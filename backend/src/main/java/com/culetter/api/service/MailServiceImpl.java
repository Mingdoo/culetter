package com.culetter.api.service;

import com.culetter.api.dto.MailDto;
import com.culetter.db.entity.*;
import com.culetter.db.repository.MailRepository;
import com.culetter.db.repository.RecvMailboxRepository;
import com.culetter.db.repository.SendMailboxRepository;
import com.culetter.db.repository.UndoneMailboxRepository;
import com.culetter.exception.member.ChangeNotMadeException;
import com.culetter.exception.member.ValueNotExistException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.nio.charset.Charset;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
@Transactional(readOnly = true)
public class MailServiceImpl implements MailService {

    private final MailRepository mailRepository;
    private final RecvMailboxRepository recvMailboxRepository;
    private final SendMailboxRepository sendMailboxRepository;
    private final UndoneMailboxRepository undoneMailboxRepository;
    private final MemberService memberService;
    private final ObjectMapper objectMapper;
    private final FileService fileService;
    private final String customPostcardImagePath;

    public MailServiceImpl(MailRepository mailRepository,
                           RecvMailboxRepository recvMailboxRepository, SendMailboxRepository sendMailboxRepository,
                           UndoneMailboxRepository undoneMailboxRepository,
                           MemberService memberService, ObjectMapper objectMapper, FileService fileService,
                           @Value("${cloud.aws.s3.folder.customPostcardImage}") String customPostcardImagePath) {
        this.mailRepository = mailRepository;
        this.recvMailboxRepository = recvMailboxRepository;
        this.sendMailboxRepository = sendMailboxRepository;
        this.undoneMailboxRepository = undoneMailboxRepository;
        this.memberService = memberService;
        this.objectMapper = objectMapper;
        this.fileService = fileService;
        this.customPostcardImagePath = customPostcardImagePath;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public MailDto.Mail selectMailById(Long mailId) {
        memberService.getMemberByAuthentication();

        Mail mail = mailRepository.findByMailId(mailId)
                .orElseThrow(()-> new ValueNotExistException("편지가 존재하지 않습니다."));

        mail.updateIsRead(true);

        return new MailDto.Mail(
            mail.getSenderName(),mail.getSenderEmail(),
            mail.getReceiverName(),mail.getReceiverEmail(),
            mail.getCreatedDate(),
            mail.getTitle(),
            mail.getMailType(),mail.getStyleUrl(),
            mail.getContent(),
            mail.getMusicUrl(),
            mail.getImage(),
            mail.getContentPosition(),
            mail.getStickers(),
            mail.getFontOrder(),mail.getFontType(),mail.getFontColor(),
            mail.getBackgroundColor(),
            mail.getIsFontBold(),
            mail.getUnderlineColor(),
            mail.getHandwriteImage()
        );
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public MailDto.Mail selectMailByCode(String code) {
        Mail mail = mailRepository.findByCode(code)
                .orElseThrow(()-> new ValueNotExistException("편지가 존재하지 않습니다."));

        mail.updateIsRead(true);

        return new MailDto.Mail(
                mail.getSenderName(),mail.getSenderEmail(),
                mail.getReceiverName(),mail.getReceiverEmail(),
                mail.getCreatedDate(),
                mail.getTitle(),
                mail.getMailType(),mail.getStyleUrl(),
                mail.getContent(),
                mail.getMusicUrl(),
                mail.getImage(),
                mail.getContentPosition(),
                mail.getStickers(),
                mail.getFontOrder(),mail.getFontType(),mail.getFontColor(),
                mail.getBackgroundColor(),
                mail.getIsFontBold(),
                mail.getUnderlineColor(),
                mail.getHandwriteImage()
        );
    }

    // TODO
    @Override
    public List<String> styleRecommendation(Map<String,String> style) {

        return null;
    }

    @Override
    public List<String> musicRecommendation(Map<String,String> music) {

        return null;
    }

    @Override
    public String insertPostcardImage(MultipartFile multipartFile) {
        if (multipartFile.isEmpty()) throw new NullPointerException("업로드할 파일이 존재하지 않습니다.");
        return fileService.uploadImage(multipartFile, customPostcardImagePath);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String insertMail(MailDto.Mail mail){
        Member cur_member = memberService.getMemberByAuthentication();
        String code = RandomStringUtils.randomAlphanumeric(16);
        byte existCnt;

        //이메일이 없으면 비회원에게, 있으면 회원에게
        if("".equals(mail.getReceiver_email())) existCnt = (byte) 1;
        else existCnt = (byte) 2;

        Mail m = mailRepository.save(Mail.builder()
                .code(code)
                .senderId(cur_member.getMemberId())
                .senderName(cur_member.getName())
                .senderEmail(cur_member.getEmail())
                .isRead(false)
                .receiverName(mail.getReceiver_name())
                .receiverEmail(mail.getReceiver_email())
                .existCnt(existCnt)
                .title(mail.getTitle())
                .mailType(mail.getMail_type())
                .styleUrl(mail.getStyle_url())
                .content(mail.getContent())
                .musicUrl(mail.getMusic_url())
                .image(mail.getImage())
                .contentPosition(mail.getContent_position())
                .stickers(mail.getStickers())
                .fontOrder(mail.getFont_order())
                .fontType(mail.getFont_type())
                .fontColor(mail.getFont_color())
                .backgroundColor(mail.getBackground_color())
                .isFontBold(mail.getIs_font_bold())
                .underlineColor(mail.getUnderline_color())
                .handwriteImage(mail.getHandwrite_image())
                .build()
        );

        //cur_member send & recv_member recv mailbox 저장
        sendMailboxRepository.save(SendMailbox.builder()
                .member(cur_member)
                .mail(m)
                .build()
        );

        if(existCnt == (byte) 2) {
            Member recv_mem = memberService.findMemberByEmail(mail.getReceiver_email());
            recvMailboxRepository.save(RecvMailbox.builder()
                    .member(recv_mem)
                    .mail(m)
                    .build()
            );
        }

        return code;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Long saveTempMail(Long mailId, MailDto.Mail mail) {
        Member cur_member = memberService.getMemberByAuthentication();
        Mail temp;
        byte existCnt;

        if("".equals(mail.getReceiver_email())) existCnt = (byte) 1;
        else existCnt = (byte) 2;

        //처음 저장
        if(mailId == 0){
            temp = mailRepository.save(Mail.builder()
                    .code(RandomStringUtils.randomAlphanumeric(16))
                    .senderId(cur_member.getMemberId())
                    .senderName(cur_member.getName())
                    .senderEmail(cur_member.getEmail())
                    .isRead(false)
                    .receiverName(mail.getReceiver_name())
                    .receiverEmail(mail.getReceiver_email())
                    .existCnt(existCnt)
                    .title(mail.getTitle())
                    .mailType(mail.getMail_type())
                    .styleUrl(mail.getStyle_url())
                    .content(mail.getContent())
                    .musicUrl(mail.getMusic_url())
                    .image(mail.getImage())
                    .contentPosition(mail.getContent_position())
                    .stickers(mail.getStickers())
                    .fontOrder(mail.getFont_order())
                    .fontType(mail.getFont_type())
                    .fontColor(mail.getFont_color())
                    .backgroundColor(mail.getBackground_color())
                    .handwriteImage(mail.getHandwrite_image())
                    .isFontBold(mail.getIs_font_bold())
                    .underlineColor(mail.getUnderline_color())
                    .createdDate(mail.getCreated_date())
                    .build()
            );
        }
        //이후 저장
        else{
            temp = mailRepository.findByMailId(mailId)
                    .orElseThrow(()-> new ValueNotExistException("편지가 존재하지 않습니다."));

            temp.updateTempMail(
                    mail.getReceiver_email(), mail.getReceiver_name(),
                    mail.getTitle(),
                    mail.getMail_type(), mail.getStyle_url(),
                    mail.getContent(), mail.getMusic_url(), mail.getImage(),
                    mail.getContent_position(), mail.getStickers(),
                    mail.getFont_order(), mail.getFont_type(), mail.getFont_color(),
                    mail.getBackground_color(),
                    mail.getIs_font_bold(),
                    mail.getUnderline_color(),
                    mail.getHandwrite_image()
            );

            temp.updateExistCnt(existCnt);
        }

        //임시 우편함에 저장 이미 있다면 넘어가고 아니면 임시 우편함에 저장해주기
        if(!undoneMailboxRepository.findByMailId(temp.getMailId()).isPresent()) {
            undoneMailboxRepository.save(UndoneMailbox.builder()
                    .member(cur_member)
                    .mail(temp)
                    .build()
            );
        }

        return temp.getMailId();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String sendTempMail(MailDto.Mail mail, Long mailId){
        Member cur_member = memberService.getMemberByAuthentication();

        UndoneMailbox temp = undoneMailboxRepository.findByMailId(mailId)
                .orElseThrow(() -> new ValueNotExistException("편지가 존재하지 않습니다."));

        byte existCnt;

        if("".equals(mail.getReceiver_email())) existCnt = (byte) 1;
        else existCnt = (byte) 2;

        temp.getMail().updateTempMail(
                mail.getReceiver_email(), mail.getReceiver_name(),
                mail.getTitle(),
                mail.getMail_type(), mail.getStyle_url(),
                mail.getContent(), mail.getMusic_url(), mail.getImage(),
                mail.getContent_position(), mail.getStickers(),
                mail.getFont_order(), mail.getFont_type(), mail.getFont_color(),
                mail.getBackground_color(),
                mail.getIs_font_bold(),
                mail.getUnderline_color(),
                mail.getHandwrite_image()
        );

        temp.getMail().updateExistCnt(existCnt);

        //사용자와 편지 작성자가 다르면
        if(!cur_member.getMemberId().equals(temp.getMember().getMemberId())) {
            throw new ChangeNotMadeException("임시 편지 전송 에러");
        }

        sendMailboxRepository.save(SendMailbox.builder()
                .member(temp.getMember())
                .mail(temp.getMail())
                .build()
        );

        if(temp.getMail().getExistCnt() == (byte) 2) {
            Member recv_mem = memberService.findMemberByEmail(temp.getMail().getReceiverEmail());
            recvMailboxRepository.save(RecvMailbox.builder()
                    .member(recv_mem)
                    .mail(temp.getMail())
                    .build()
            );
        }

        //임시 메일 전송해쓰니 자동 삭제
        int res = undoneMailboxRepository.deleteByUndoneId(temp.getUndoneId());
        validateChangeMade(res, "임시 메일 삭제");

        return temp.getMail().getCode();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveInRecvMailbox(String code) {
        Member cur_member = memberService.getMemberByAuthentication();

        Mail mail = mailRepository.findByCode(code)
                .orElseThrow(() -> new ValueNotExistException("편지가 존재하지 않습니다."));

        mail.updateExistCnt((byte) 2);

        recvMailboxRepository.save(RecvMailbox.builder()
                .member(cur_member)
                .mail(mail)
                .build()
        );
    }

    @Override
    public String analyzeResult(Map<String,String> content) throws JsonProcessingException {
        //사용자이여야 사용 가능
        memberService.getMemberByAuthentication();

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));

        //엔터 제거
        String removeEnter = content.get("content").replace("\n","\\n").replace("\t", "\\t");
        content.put("content",removeEnter);

        String param = objectMapper.writeValueAsString(content);
        HttpEntity httpEntity = new HttpEntity(param, httpHeaders);

        RestTemplate restTemplate = new RestTemplate();

        //TODO AI 학습 서버로 content 전송, Emotion을 String으로 반환받기 json 형식 수정 결과 같으면 하나 선택
        ResponseEntity<String> responseEntity = restTemplate.exchange("https://www.culetter.site/nlp", HttpMethod.POST, httpEntity, String.class);

        if (responseEntity.getStatusCode() == HttpStatus.OK) return responseEntity.getBody();
        else throw new ValueNotExistException("감정 분석 오류");
    }

    private void validateChangeMade(int res, String func) {
        if(res == 0) {
            throw new ChangeNotMadeException(func + " 요청이 처리되지 않았습니다.");
        }
    }
}