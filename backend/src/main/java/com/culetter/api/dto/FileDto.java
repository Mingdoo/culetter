package com.culetter.api.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

public class FileDto {

    @Getter
    @AllArgsConstructor
    public static class FileInfo {
        private String fileName;
        private String filePath;
        private String url;
    }

    @Getter
    public static class FileInfoWithEmotion extends FileInfo {
        private final String emotion;

        public FileInfoWithEmotion(String fileName, String filePath, String url, String emotion) {
            super(fileName, filePath, url);
            this.emotion = emotion;
        }
    }

}
