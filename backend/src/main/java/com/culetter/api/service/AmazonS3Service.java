package com.culetter.api.service;

import com.amazonaws.services.s3.model.ObjectMetadata;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;

public interface AmazonS3Service {
    String upload(MultipartFile multipartFile, String folderPath);
    void uploadFile(InputStream inputStream, ObjectMetadata objectMetadata, String filePath);
    String getFileUrl(String filePath);
    String getFilePath(String url);
    void deleteFile(String url);
}
