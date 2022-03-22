package com.culetter.api.service;

import com.culetter.api.dto.MemberDto;
import com.culetter.db.entity.Member;

import java.util.Map;

public interface MemberService {
    void insertMember(MemberDto.SignupRequest signupRequest);
    Map<String,String> authenticateMember(String email, String password);
    Member getMemberByAuthentication();
    MemberDto.Response getMemberInfoByAuthentication();
    void checkPassword(String password);
    void updatePassword(String password);
    void deleteMember();
}
