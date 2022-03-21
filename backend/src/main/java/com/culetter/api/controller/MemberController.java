package com.culetter.api.controller;

import com.culetter.api.dto.MemberDto;
import com.culetter.api.service.MemberService;
import com.culetter.common.jwt.JwtFilter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

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

    @PostMapping("/signin")
    public ResponseEntity<Map<String,String>> signinMember(@RequestBody Map<String,String> signinRequest) {
        Map<String,String> map = memberService.authenticateMember(signinRequest.get("email"), signinRequest.get("password"));
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + map.get("jwt"));
        map.remove("jwt");
        return ResponseEntity.status(HttpStatus.OK).headers(httpHeaders).body(map);
    }
}
