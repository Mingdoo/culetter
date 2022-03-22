package com.culetter.api.controller;

import com.culetter.api.dto.AuthEmailDto;
import com.culetter.api.service.AuthEmailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/members/email")
public class AuthEmailController {

    private final AuthEmailService authEmailService;

    public AuthEmailController(AuthEmailService authEmailService) {
        this.authEmailService = authEmailService;
    }

    @PostMapping
    public ResponseEntity<String> requestAuthEmail(@Valid @RequestBody AuthEmailDto.EmailRequest emailRequest) {
        authEmailService.sendAuthEmail(emailRequest.getEmail());
        return ResponseEntity.status(HttpStatus.OK).body("인증을 위한 이메일을 발송하였습니다.");
    }

    @PostMapping("/check")
    public ResponseEntity<String> verifyCode(@Valid @RequestBody AuthEmailDto.AuthEmailRequest authEmailRequest) {
        if (authEmailService.checkCode(authEmailRequest.getEmail(), authEmailRequest.getCode())) {
            return ResponseEntity.status(HttpStatus.OK).body("이메일 인증이 완료되었습니다.");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("이메일 인증이 실패하였습니다. 인증 코드를 확인해주세요.");
    }
}
