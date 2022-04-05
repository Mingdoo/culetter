package com.culetter.api.service;

import com.culetter.api.dto.FileDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FileService {
    String uploadImage(MultipartFile multipartFile, String folderPath);
    List<FileDto.FileInfoWithEmotion> loadFileInfoWithEmotionListByType(String type, String emotion);
    List<FileDto.FileInfoWithEmotion> getFileInfoWithEmotionListByType(String type, String emotion);
    void deleteImage(String url);
}
