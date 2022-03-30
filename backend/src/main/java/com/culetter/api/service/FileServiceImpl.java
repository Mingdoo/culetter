package com.culetter.api.service;

import com.culetter.api.dto.FileDto;
import lombok.extern.slf4j.Slf4j;
import org.apache.tika.Tika;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class FileServiceImpl implements FileService {

    private final AmazonS3Service amazonS3Service;
    private final String letterImage;
    private final String postcardImage;
    private final String photocardImage;
    private final String music;
    private final String happy;
    private final String angry;
    private final String sad;
    private final String panic;

    public FileServiceImpl(
            AmazonS3Service amazonS3Service,
            @Value("${cloud.aws.s3.folder.letterImage}") String letterImage,
            @Value("${cloud.aws.s3.folder.postcardImage}") String postcardImage,
            @Value("${cloud.aws.s3.folder.photocardImage}") String photocardImage,
            @Value("${cloud.aws.s3.folder.music}") String music,
            @Value("${cloud.aws.s3.emotion.happy}") String happy,
            @Value("${cloud.aws.s3.emotion.angry}") String angry,
            @Value("${cloud.aws.s3.emotion.sad}") String sad,
            @Value("${cloud.aws.s3.emotion.panic}") String panic
    ) {
        this.amazonS3Service = amazonS3Service;
        this.letterImage = letterImage;
        this.postcardImage = postcardImage;
        this.photocardImage = photocardImage;
        this.music = music;
        this.happy = happy;
        this.angry = angry;
        this.sad = sad;
        this.panic = panic;
    }

    @Override
    public String uploadImage(MultipartFile multipartFile, String folderPath) {
        // 이미지 파일의 크기가 2MB를 초과하는 경우
        if (multipartFile.getSize() > 2 * Math.pow(2, 20))
            throw new IllegalArgumentException("파일의 크기가 2MB를 초과합니다.");
        // MIME Type 확인
        Tika tika = new Tika();
        String mimeType;
        try {
            mimeType = tika.detect(multipartFile.getInputStream());
        } catch (IOException e) {
            throw new IllegalArgumentException("파일 변환 중 에러가 발생했습니다.");
        }
        if (!mimeType.startsWith("image"))
            throw new IllegalArgumentException("image 타입의 파일이 아닙니다.");
        return amazonS3Service.upload(multipartFile, folderPath);
    }

    @Override
    public List<FileDto.FileInfoWithEmotion> getFileInfoWithEmotionListByType(String type, String emotion) {
        String folderPath = "";
        if ("letterImage".equals(type)) folderPath += letterImage;
        else if ("postcardImage".equals(type)) folderPath += postcardImage;
        else if ("photocardImage".equals(type)) folderPath += photocardImage;
        else if ("music".equals(type)) folderPath += music;

        if ("happy".equals(emotion)) folderPath += happy;
        else if ("angry".equals(emotion)) folderPath += angry;
        else if ("sad".equals(emotion)) folderPath += sad;
        else if ("panic".equals(emotion)) folderPath += panic;

        return amazonS3Service.getFileInfoList(folderPath).stream()
                .map(o -> new FileDto.FileInfoWithEmotion(o.getFileName(), o.getFilePath(), o.getUrl(), emotion))
                .collect(Collectors.toList());
    }

    @Override
    public void deleteImage(String url) {
        amazonS3Service.deleteFile(url);
    }
}
