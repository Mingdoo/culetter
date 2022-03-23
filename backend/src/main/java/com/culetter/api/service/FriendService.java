package com.culetter.api.service;

import com.culetter.api.dto.FriendDto;

import java.util.List;

public interface FriendService {
    List<FriendDto.FriendResponse> selectFriendList();
    List<FriendDto.FriendResponse> selectGetRequestList();
    List<FriendDto.FriendResponse> selectMemberList(String email);
    void requestFriend(long memberId);
    void acceptRequest(long memberId);
    void declineRequest(long memberId);
    void deleteFriend(long memberId);
}
