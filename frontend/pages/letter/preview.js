import { Box, Button, Typography, Grid } from "@mui/material";
import { useRef, useState, useContext, useEffect } from "react";

import Header from "../../components/Header";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import General from "../../components/letter/preview/General";
import Photocard from "../../components/letter/preview/Photocard";

import MiniPlayer from "../../components/letter/preview/miniPlayer";
import LetterContext from "../../contexts/LetterContext";

import { sendLetter } from "../../components/apis/letter";
import PostCard from "../../components/letter/preview/Postcard";
import { authentication } from "../../components/apis/auth";

import Router from "next/router";

export default function Preview() {
  const {
    memberId,
    receiverName,
    receiverEmail,
    title,
    mailType,
    styleUrl,
    content,
    musicUrl,
    image,
    contentPosition,
    stickersPos,
    bgcolor,
    fontOrder,
    fontType,
    fontColor,
    setIsFontBold,
    underlineColor,
    setMailCode,
  } = useContext(LetterContext);
  // 편지 전송 내용물
  const body = {};

  useEffect(() => {
    authentication();
  }, []);
  const send = async () => {
    const body = {
      receiver_name: receiverName,
      receiver_email: receiverEmail,
      title: title,
      mail_type: mailType,
      style_url: styleUrl,
      content: content,
      music_url: musicUrl,
      image: image,
      content_position: contentPosition,
      stickers: stickersPos,
      font_order: fontOrder,
      font_type: fontType,
      // 숫자로
      font_color: fontColor,
      background_color: bgcolor,
      handwrite_image: "",
    };
    try {
      const res = await sendLetter(body);
      await setMailCode(res.data.code);
      Router.push("/letter/send");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box
      component="div"
      sx={{
        width: 420,
        minHeight: "100vh",
        mx: "auto",
        bgcolor: "#FCFAEF",
      }}
    >
      <Header title="미리보기"></Header>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* 포토카드 */}
        {mailType === "PHOTOCARD" ? (
          <Photocard
            key="previewLetter"
            front="/img/photocard_front1.jpg"
            back="/img/photocard_back.png"
            content={content}
            preview={true}
          ></Photocard>
        ) : (
          <></>
        )}
        {mailType === "GENERAL" ? <General /> : <></>}
        {mailType === "POSTCARD" ? <PostCard /> : <></>}
      </Box>

      <MiniPlayer musicUrl={musicUrl}></MiniPlayer>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <Button
          color="inherit"
          className="Batang"
          sx={{ fontSize: 18 }}
          onClick={send}
        >
          편지 전송
        </Button>
      </Box>
    </Box>
  );
}
