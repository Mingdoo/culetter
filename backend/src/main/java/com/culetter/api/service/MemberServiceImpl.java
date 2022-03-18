package com.culetter.api.service;

import com.culetter.api.dto.MemberDto;
import com.culetter.db.entity.Member;
import com.culetter.db.repository.MemberRepository;
import com.culetter.exception.member.DuplicateMemberException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@Service
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public MemberServiceImpl(MemberRepository memberRepository,
                             PasswordEncoder passwordEncoder
    ) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void insertMember(MemberDto.SignupRequest signupRequest) {
        validateDuplicateMember(signupRequest.getEmail());
        memberRepository.save(Member.builder()
                .email(signupRequest.getEmail())
                .password(passwordEncoder.encode(signupRequest.getPassword()))
                .name(signupRequest.getName())
                .status((byte) 1)   // 비회원: 0, 회원: 1, 관리자: 2
                .build());
    }

    private void validateDuplicateMember(String email) {
        if (memberRepository.findByEmail(email).isPresent()) {
            throw new DuplicateMemberException("이미 존재하는 회원입니다.");
        }
    }
}
