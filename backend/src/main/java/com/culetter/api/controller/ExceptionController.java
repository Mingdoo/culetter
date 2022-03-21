package com.culetter.api.controller;

import com.culetter.exception.member.DuplicateMemberException;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
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

    @ExceptionHandler(MalformedJwtException.class)
    public ResponseEntity<String> MalformedJwtExceptionHandler(MalformedJwtException e) {
        log.error("MalformedJwtException - {}", e.getMessage());
        // 401
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }

    @ExceptionHandler(ExpiredJwtException.class)
    public ResponseEntity<String> ExpiredJwtExceptionHandler(ExpiredJwtException e) {
        log.error("ExpiredJwtException - {}", e.getMessage());
        // 401
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }

    @ExceptionHandler(UnsupportedJwtException.class)
    public ResponseEntity<String> UnsupportedJwtExceptionHandler(UnsupportedJwtException e) {
        log.error("UnsupportedJwtException - {}", e.getMessage());
        // 401
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> IllegalArgumentExceptionHandler(IllegalArgumentException e) {
        log.error("IllegalArgumentException - {}", e.getMessage());
        // 400
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }
}
