package com.culetter.api.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class FriendDto {

    @Getter
    @AllArgsConstructor
    public static class FriendResponse {
        private Long member_id;
        private String email;
        private String name;
        private boolean favorite;
        private byte friend_status;
    }

}
