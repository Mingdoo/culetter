package com.culetter.api.service;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.UUID;

@Slf4j
@Service
public class AmazonS3ServiceImpl implements AmazonS3Service {

    private final AmazonS3Client amazonS3Client;
    private final String bucket;

    public AmazonS3ServiceImpl(@Value("${cloud.aws.s3.bucket}") String bucket,
                               @Value("${cloud.aws.credentials.accessKey}") String accessKey,
                               @Value("${cloud.aws.credentials.secretKey}") String secretKey,
                               @Value("${cloud.aws.region.static}") String region
    ) {
        this.bucket = bucket;
        this.amazonS3Client = (AmazonS3Client) AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
                .withRegion(region)
                .build();
    }

    @Override
    public String upload(MultipartFile multipartFile, String folderPath) {
        String filePath = folderPath + UUID.randomUUID() + "-" + new Date().getTime();
        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(multipartFile.getSize());
        objectMetadata.setContentType(multipartFile.getContentType());
        log.debug("upload - content type: {}", objectMetadata.getContentType());

        try (InputStream inputStream = multipartFile.getInputStream()) {
            uploadFile(inputStream, objectMetadata, filePath);
        } catch (IOException e) {
            throw new IllegalArgumentException("파일 변환 중 에러가 발생했습니다.");
        }
        return getFileUrl(filePath);
    }

    @Override
    public void uploadFile(InputStream inputStream, ObjectMetadata objectMetadata, String filePath) {
        amazonS3Client.putObject(new PutObjectRequest(bucket, filePath, inputStream, objectMetadata)
                .withCannedAcl(CannedAccessControlList.PublicReadWrite));
    }

    @Override
    public String getFileUrl(String filePath) {
        return amazonS3Client.getUrl(bucket, filePath).toString();
    }

    @Override
    public String getFilePath(String url) {
        String[] paths = url.split("//");
        return paths[1].substring(paths[1].indexOf('/') + 1);
    }

    @Override
    public void deleteFile(String url) {
        amazonS3Client.deleteObject(bucket, getFilePath(url));
    }

}
