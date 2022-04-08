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
public class SendMailbox {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sendId;

    @ManyToOne(targetEntity = Member.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "owner")
    private Member member;
    @OneToOne(targetEntity = Mail.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "mail_id")
    private Mail mail;

    @Builder
    public SendMailbox(Member member, Mail mail) {
        this.member = member;
        this.mail = mail;
    }
}
