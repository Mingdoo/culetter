package com.culetter.api.service;

import com.culetter.api.dto.MemberDto;
import com.culetter.common.jwt.TokenProvider;
import com.culetter.common.util.SecurityUtil;
import com.culetter.db.entity.Member;
import com.culetter.db.repository.MemberRepository;
import com.culetter.exception.member.DuplicateMemberException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Transactional(readOnly = true)
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    public MemberServiceImpl(MemberRepository memberRepository,
                             PasswordEncoder passwordEncoder,
                             TokenProvider tokenProvider,
                             AuthenticationManagerBuilder authenticationManagerBuilder
    ) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
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

    @Override
    public Map<String,String> authenticateMember(String email, String password) {
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException(email + "은(는) 존재하지 않는 회원입니다."));
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(member.getMemberId(), password);
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return new HashMap<String,String>(){{
                put("name", member.getName());
                put("status", String.valueOf(member.getStatus()));
                put("jwt", tokenProvider.createToken(authentication));
        }};
    }

    @Override
    public Member getMemberByAuthentication() {
        return memberRepository.findById(
                Long.valueOf(SecurityUtil.getCurrentUsername()
                        .orElseThrow(() -> new ArithmeticException("토큰으로 조회되는 회원이 존재하지 않습니다."))))
                .orElseThrow(() -> new ArithmeticException("토큰으로 조회되는 회원이 존재하지 않습니다."));
    }

    @Override
    public MemberDto.Response getMemberInfoByAuthentication() {
        Member member = getMemberByAuthentication();
        return new MemberDto.Response(member.getEmail(), member.getName(), member.getProfileImage());
    }

    @Override
    public void checkPassword(String password) {
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(getMemberByAuthentication().getMemberId(), password);
        authenticationManagerBuilder.getObject().authenticate(authenticationToken);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updatePassword(String password) {
        Member member = getMemberByAuthentication();
        member.updatePassword(passwordEncoder.encode(password));
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteMember() {
        Member member = getMemberByAuthentication();
        member.argsNullSetter();
    }

    private void validateDuplicateMember(String email) {
        if (memberRepository.findByEmail(email).isPresent()) {
            throw new DuplicateMemberException("이미 존재하는 회원입니다.");
        }
    }
}
