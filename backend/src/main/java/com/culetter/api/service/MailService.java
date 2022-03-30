package com.culetter.api.service;

import com.culetter.api.dto.MailDto;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.Map;

public interface MailService {
    MailDto.Mail selectMailById(Long mailId);
    MailDto.Mail selectMailByCode(String code);
    String insertMail(MailDto.Mail mail);
    Long saveTempMail(Long mailId, MailDto.Mail mail);
    String sendTempMail(MailDto.Mail mail, Long mailId);
    String analyzeResult(Map<String,String> content) throws JsonProcessingException;
}
