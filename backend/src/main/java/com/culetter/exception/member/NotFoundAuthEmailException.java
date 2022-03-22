package com.culetter.exception.member;

public class NotFoundAuthEmailException extends RuntimeException {
    public NotFoundAuthEmailException(String message) {
        super(message);
    }
}
