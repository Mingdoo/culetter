package com.culetter.db.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@EntityListeners(AuditingEntityListener.class)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class MailImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mailImageId;
    private String emotion;
    private String url;

    @Builder
    public MailImage(String emotion, String url) {
        this.emotion = emotion;
        this.url = url;
    }
}
