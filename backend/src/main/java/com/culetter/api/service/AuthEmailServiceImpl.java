package com.culetter.api.service;

import com.culetter.db.entity.AuthEmail;
import com.culetter.db.repository.AuthEmailRepository;
import com.culetter.exception.member.AuthEmailMessagingException;
import com.culetter.exception.member.NotFoundAuthEmailException;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

@Service
@Transactional(readOnly = true)
public class AuthEmailServiceImpl implements AuthEmailService {

    private final AuthEmailRepository authEmailRepository;
    private final JavaMailSender javaMailSender;
    private final String address;

    public AuthEmailServiceImpl(AuthEmailRepository authEmailRepository, JavaMailSender javaMailSender,
                                @Value("${spring.mail.username}") String address) {
        this.authEmailRepository = authEmailRepository;
        this.javaMailSender = javaMailSender;
        this.address = address;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void sendAuthEmail(String email) {
        String code = generateCode();
        AuthEmail authEmail = AuthEmail.builder()
                .email(email)
                .code(code)
                .build();
        MimeMessage message = javaMailSender.createMimeMessage();
        try {
            message.setSubject("[CU;LETTER] 이메일 인증번호 발송", "UTF-8");
            String htmlContent = "<div class=\"container\" style=\"text-align: center; max-width: 500px; margin-top: 50px; font-family: 'Noto Sans KR';\n" +
                    "    font-size: 14px; font-weight: 500;\">\n" +
                    "      <hr style=\"background-color: #334666; width: 90%; height: 3px; border: none;\">\n" +
                    "      <img src=\"https://ifh.cc/g/vXsW61.png\" alt=\"\" \n" +
                    "      style=\"width:100px; margin-top: 40px; margin-bottom: 20px;\">\n" +
                    "      <p>CU;LETTER 회원가입을 환영합니다. \uD83D\uDC99</p>\n" +
                    "      <p\">아래의 인증코드를 입력한 후, 회원가입 절차를 진행해주세요!</p>\n" +
                    "      <div style=\"background-color: #dce1e9; width: 50%; display: inline-block; border-radius: 10px; margin: 20px;\">\n" +
                    "        <p style=\"font-size: 16px; font-weight: 700;\">" + code + "</p>\n" +
                    "      </div>\n" +
                    "      <p>CU;LETTER를 이용해주셔서 감사합니다.</p>\n" +
                    "      <hr style=\"background-color: #334666; height: 3px; border: none; margin-top: 40px;\">\n" +
                    "    </div>";
            message.setText(htmlContent, "UTF-8", "html");
            message.setFrom(new InternetAddress(address));
            message.addRecipient(MimeMessage.RecipientType.TO, new InternetAddress(email));
            javaMailSender.send(message);
            authEmailRepository.save(authEmail);
        } catch (MessagingException | MailException e) {
            throw new AuthEmailMessagingException("인증 요청 메일 전송에 실패하였습니다.");
        }
    }

    @Override
    public boolean checkCode(String email, String code) {
        AuthEmail authEmail = authEmailRepository.findFirstByEmailOrderByAuthEmailIdDesc(email)
                .orElseThrow(() -> new NotFoundAuthEmailException("인증 요청을 보내지 않은 이메일입니다."));
        return authEmail.getCode().equals(code);
    }

    private String generateCode() {
        return RandomStringUtils.randomAlphanumeric(8);
    }
}
