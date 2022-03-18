package com.culetter.api.controller;

import com.culetter.exception.member.DuplicateMemberException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestControllerAdvice
public class ExceptionController {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<List<String>> MethodArgumentNotValidExceptionHandler(MethodArgumentNotValidException e) {
        List<String> allErrors = e.getBindingResult()
                .getAllErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .collect(Collectors.toList());
        log.error("MethodArgumentNotValidException - {}", allErrors);
        // 400
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(allErrors);
    }

    @ExceptionHandler(DuplicateMemberException.class)
    public ResponseEntity<String> DuplicateMemberExceptionHandler(DuplicateMemberException e) {
        log.error("DuplicateMemberException - {}", e.getMessage());
        // 409
        return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
    }
}
