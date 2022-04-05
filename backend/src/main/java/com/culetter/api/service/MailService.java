package com.culetter.api.service;

import com.culetter.api.dto.MailDto;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.List;
import java.util.Map;

public interface MailService {
    MailDto.Mail selectMailById(Long mailId);
    MailDto.Mail selectMailByCode(String code);
    List<String> styleRecommendation(Map<String,String> style);
    List<String> musicRecommendation(Map<String,String> music);
    String insertMail(MailDto.Mail mail);
    Long saveTempMail(Long mailId, MailDto.Mail mail);
    String sendTempMail(MailDto.Mail mail, Long mailId);
    void saveInRecvMailbox(String code);
    String analyzeResult(Map<String,String> content) throws JsonProcessingException;
}
