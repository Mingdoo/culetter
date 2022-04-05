package com.culetter.api.service;

import org.springframework.web.multipart.MultipartFile;


public interface FileService {
    String uploadImage(MultipartFile multipartFile, String folderPath);
//    List<FileDto.FileInfoWithEmotion> loadFileInfoWithEmotionListByType(String type, String emotion);
//    List<FileDto.FileInfoWithEmotion> getFileInfoWithEmotionListByType(String type, String emotion);
    void deleteImage(String url);
}
