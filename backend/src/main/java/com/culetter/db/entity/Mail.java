package com.culetter.db.entity;

import com.culetter.common.util.BooleanToYNConverter;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@EntityListeners(AuditingEntityListener.class)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Mail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mailId;
    private String code;
    private String senderEmail;
    private String senderName;
    @Convert(converter = BooleanToYNConverter.class)
    private Boolean isRead;
    private String receiverEmail;
    private String receiverName;
    private Byte existCnt;
    private String mailType;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String content;
    private String mailStyle;
    private String songUrl;
    private String image;
    private String contentPosition;
    private String fontOrder;
    private String fontType;
    private Byte fontColor;
    private String handwriteImage;
    @CreatedDate
    private LocalDateTime createdDate;

    @Builder
    public Mail(String code, String senderEmail, String senderName, Boolean isRead, String receiverEmail,
                String receiverName, Byte existCnt, String mailType, String title, String content, String mailStyle,
                String songUrl, String image, String contentPosition, String fontOrder, String fontType, Byte fontColor,
                String handwriteImage, LocalDateTime createdDate) {
        this.code = code;
        this.senderEmail = senderEmail;
        this.senderName = senderName;
        this.isRead = isRead;
        this.receiverEmail = receiverEmail;
        this.receiverName = receiverName;
        this.existCnt = existCnt;
        this.mailType = mailType;
        this.title = title;
        this.content = content;
        this.mailStyle = mailStyle;
        this.songUrl = songUrl;
        this.image = image;
        this.contentPosition = contentPosition;
        this.fontOrder = fontOrder;
        this.fontType = fontType;
        this.fontColor = fontColor;
        this.handwriteImage = handwriteImage;
        this.createdDate = createdDate;
    }

//    @OneToOne(mappedBy = "mail")
//    RecvMailbox recvMailbox;
//    @OneToOne(mappedBy = "mail")
//    SendMailbox sendMailbox;
//    @OneToOne(mappedBy = "mail")
//    UndoneMailbox undoneMailbox;
//    @OneToOne(mappedBy = "mail")
//    TimeMailbox timeMailbox;
}