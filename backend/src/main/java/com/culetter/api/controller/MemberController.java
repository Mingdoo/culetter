package com.culetter.api.controller;

import com.culetter.api.dto.MemberDto;
import com.culetter.api.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RestController
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping
    public ResponseEntity<String> signupMember(@Valid @RequestBody MemberDto.SignupRequest signupRequest) {
        memberService.insertMember(signupRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body("회원가입에 성공했습니다.");
    }
}
