package com.culetter.exception.member;

public class MemberNotExistException extends RuntimeException {
    public MemberNotExistException(String message) { super(message); }
}
