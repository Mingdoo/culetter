package com.culetter.api.dto;

import lombok.Getter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

public class MailDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Mail {
        private String sender_name;
        private String sender_email;
        private String receiver_name;
        private String receiver_email;
        private LocalDateTime created_date;
        private String title;
        private String mail_type;
        private String style_url;
        private String content;
        private String song_url;
        private String image;
        private String content_position;
        private String stickers;
        private String font_order;
        private String font_type;
        private Byte font_color;
        private String handwrite_image;
    }

    @Getter
    @AllArgsConstructor
    public static class ShortMail {
        private Long short_id;
        private Long sender_id;
        private String sender_name;
        private String content;
        private String mail_style;
        private String font_type;

        private LocalDateTime created_date;
    }
}
