package com.culetter.api.service;

import com.culetter.api.dto.MailDto;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.List;
import java.util.Map;

public interface MailService {
    MailDto.Mail selectMailById(Long mailId);
    MailDto.Mail selectMailByCode(String code);
    List<String> styleRecommendation(String emotion);
    List<String> musicRecommendation(String emotion);
    String insertMail(MailDto.Mail mail);
    Long saveTempMail(Long mailId, MailDto.Mail mail);
    String sendTempMail(MailDto.Mail mail, Long mailId);
    String analyzeResult(Map<String,String> content) throws JsonProcessingException;
}
