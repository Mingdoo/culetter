package com.culetter.api.service;

import com.culetter.api.dto.MemberDto;

public interface MemberService {
    void insertMember(MemberDto.SignupRequest signupRequest);
}
