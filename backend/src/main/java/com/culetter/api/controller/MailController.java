package com.culetter.api.controller;

import com.culetter.api.dto.MailDto;
import com.culetter.api.service.MailService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/mails")
public class MailController {
    private final MailService mailService;

    public MailController(MailService mailService) {
        this.mailService = mailService;
    }

    @GetMapping("/id/{mailId}")
    public ResponseEntity<MailDto.Mail> getMailWithId(@PathVariable("mailId") Long mailId) {
        return ResponseEntity.status(HttpStatus.OK).body(mailService.selectMailById(mailId));
    }

    @GetMapping("/code/{code}")
    public ResponseEntity<MailDto.Mail> getMailWithCode(@PathVariable("code") String code) {
        return ResponseEntity.status(HttpStatus.OK).body(mailService.selectMailByCode(code));
    }

    @PostMapping("/analyze")
    public ResponseEntity<Map<String,String>> anylyzeContent(@RequestBody Map<String,String> content)
            throws JsonProcessingException {
        Map<String,String> memo = new HashMap<>();
        memo.put("emotion",mailService.analyzeResult(content));

        return ResponseEntity.status(HttpStatus.OK).body(memo);
    }

    //TODO style이랑 song은 AI 완성후 상의
    @GetMapping("/style")
    public ResponseEntity<Map<String,String>> recommendStyle(@RequestBody Map<String,String> emotion){

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @GetMapping("/song")
    public ResponseEntity<Map<String,String>> recommendSong(@RequestBody Map<String,String> emotion){

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @PostMapping("/write")
    public ResponseEntity<Map<String,String>> writeMail(@RequestBody MailDto.Mail mail){
        Map<String,String> mcode = new HashMap<>();
        mcode.put("code", mailService.insertMail(mail));

        return ResponseEntity.status(HttpStatus.OK).body(mcode);
   }

    @PostMapping("/tempsave/{mailId}")
    public ResponseEntity<Map<String,Long>> tempSaveMail(
            @RequestBody MailDto.Mail mail, @PathVariable("mailId") Long mailId) {
        Map<String,Long> mid = new HashMap<>();
        mid.put("mail_id", mailService.saveTempMail(mailId, mail));

        return ResponseEntity.status(HttpStatus.OK).body(mid);
    }

    @PostMapping("/tempsave/write/{mailId}")
    public ResponseEntity<Map<String,String>> sendTempSaveMail(
            @RequestBody MailDto.Mail mail, @PathVariable("mailId") Long mailId){
        Map<String,String> mcode = new HashMap<>();
        mcode.put("code", mailService.sendTempMail(mail,mailId));

        return ResponseEntity.status(HttpStatus.OK).body(mcode);
    }
}
