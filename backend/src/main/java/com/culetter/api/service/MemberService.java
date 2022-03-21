package com.culetter.api.service;

import com.culetter.api.dto.MemberDto;

import java.util.Map;

public interface MemberService {
    void insertMember(MemberDto.SignupRequest signupRequest);
    Map<String,String> authenticateMember(String email, String password);
}
