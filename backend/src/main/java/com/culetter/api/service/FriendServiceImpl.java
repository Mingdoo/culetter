package com.culetter.api.service;

import com.culetter.api.dto.FriendDto;
import com.culetter.db.entity.Friend;
import com.culetter.db.entity.Member;
import com.culetter.db.repository.FriendRepository;
import com.culetter.exception.member.ChangeNotMadeException;
import com.culetter.exception.member.MemberNotExistException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
public class FriendServiceImpl implements FriendService {

    private final FriendRepository friendRepository;
    private final MemberService memberService;

    public FriendServiceImpl(FriendRepository friendRepository, MemberService memberService) {
        this.friendRepository = friendRepository;
        this.memberService = memberService;
    }

    @Override
    public List<FriendDto.FriendResponse> selectFriendList() {
        List<FriendDto.FriendResponse> friendResponse = new ArrayList<>();

        Member cur_member = memberService.getMemberByAuthentication();

        for(Friend f : friendRepository.findByFriend(cur_member.getMemberId())) {
            FriendDto.FriendResponse friend = new FriendDto.FriendResponse(
                    f.getToMember().getMemberId(),
                    f.getToMember().getEmail(),
                    f.getToMember().getName(),
                    f.getIsFavorite(),
                    (byte) 3
            );

            friendResponse.add(friend);
        }

        return friendResponse;
    }

    @Override
    public List<FriendDto.FriendResponse> selectGetRequestList() {
        List<FriendDto.FriendResponse> requestResponse = new ArrayList<>();

        Member cur_member = memberService.getMemberByAuthentication();

        for(Friend req : friendRepository.findByFriendRequest(cur_member.getMemberId())) {
            FriendDto.FriendResponse request = new FriendDto.FriendResponse(
                    req.getFromMember().getMemberId(),
                    req.getFromMember().getName(),
                    req.getFromMember().getEmail(),
                    req.getIsFavorite(),
                    (byte) 2
            );

            requestResponse.add(request);
        }
        return requestResponse;
    }

    @Override
    public List<FriendDto.FriendResponse> selectMemberList(String email) {
        List<FriendDto.FriendResponse> memberResponse = new ArrayList<>();

        Member cur_member = memberService.getMemberByAuthentication();

        for(Member m : friendRepository.findByEmail(email)) {
            if(cur_member.getMemberId().equals(m.getMemberId())) continue;

            boolean favorite = false;
            byte friend_status = 0;

            //현재 사용자가 친구 요청을 보냈는가
            Friend relation = friendRepository.findByRequest(cur_member.getMemberId(), m.getMemberId());

            if(relation != null){
                favorite = relation.getIsFavorite();

                //친구 요청 보낸 상태이다 하지만 수락은 못받음
                if(relation.getStatus() == 0) friend_status = 1;
                //이미 친구다
                else friend_status = 3;
            }
            //친구 요청 한적이 없다
            else {
                //현재 사용자가 친구 요청을 받았는가
                relation = friendRepository.findByRequest(m.getMemberId(),cur_member.getMemberId());
                //친구 요청 받은 상태이다
                if (relation != null) {
                    favorite = relation.getIsFavorite();
                    friend_status = 2;
                }
            }

            FriendDto.FriendResponse user = new FriendDto.FriendResponse(
                    m.getMemberId(),
                    m.getEmail(),
                    m.getName(),
                    favorite,
                    friend_status
            );

            memberResponse.add(user);
        }

        return memberResponse;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void requestFriend(long memberId) {
        Member cur_member = memberService.getMemberByAuthentication();
        Member req_member = friendRepository.findByMemberId(memberId);

        validateMemberExist(req_member);

        Friend existCurReq = friendRepository.findByRequest(cur_member.getMemberId(),req_member.getMemberId());
        Friend existReqCur = friendRepository.findByRequest(req_member.getMemberId(), cur_member.getMemberId());

        if(existCurReq == null && existReqCur == null){
            friendRepository.save(Friend.builder()
                    .isFavorite(false)
                    .status((byte) 0)
                    .fromMember(cur_member)
                    .toMember(req_member)
                    .build());
        }
        else{
            validateChangeMade(0,"친구 추가");
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void acceptRequest(long memberId) {
        Member cur_member = memberService.getMemberByAuthentication();
        Member req_member = friendRepository.findByMemberId(memberId);

        validateMemberExist(req_member);

        Friend cur_stat = friendRepository.findByRequest(req_member.getMemberId(),cur_member.getMemberId());
        int res = friendRepository.updateByFriendId(cur_stat.getFriendId(), (byte) 1);

        validateChangeMade(res,"친구 추가 수락");

        friendRepository.save(Friend.builder()
                .isFavorite(false)
                .status((byte) 1)
                .fromMember(cur_member)
                .toMember(req_member)
                .build());
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void declineRequest(long memberId) {
        Member cur_member = memberService.getMemberByAuthentication();
        Member req_member = friendRepository.findByMemberId(memberId);

        validateMemberExist(req_member);

        int res = friendRepository.deleteByFromFriend(req_member.getMemberId(), cur_member.getMemberId());

        validateChangeMade(res,"친구 추가 거절");
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteFriend(long memberId) {
        Member cur_member = memberService.getMemberByAuthentication();
        Member req_member = friendRepository.findByMemberId(memberId);

        validateMemberExist(req_member);

        int res1 = friendRepository.deleteByFromFriend(cur_member.getMemberId(), req_member.getMemberId());
        int res2 = friendRepository.deleteByToFriend(req_member.getMemberId(), cur_member.getMemberId());

        validateChangeMade(res1,"친구 삭제");
        validateChangeMade(res2,"친구 삭제");
    }

    private void validateMemberExist(Member member) {
        if(member == null) {
            throw new MemberNotExistException("존재하지 않는 사용자입니다.");
        }
    }

    private void validateChangeMade(int res, String func) {
        if(res == 0) {
            throw new ChangeNotMadeException(func + " 요청이 처리되지 않았습니다.");
        }
    }
}
