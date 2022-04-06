import { Box, Button, Typography, Grid } from "@mui/material";
import { useRef, useState, useContext, useEffect } from "react";

import Header from "../../components/Header";
import General from "../../components/letter/preview/General";
import Photocard from "../../components/letter/preview/Photocard";
import Player from "../../components/letter/preview/Player";
import LetterContext from "../../contexts/LetterContext";
import RoutingContext from "../../contexts/RoutingContext";
import PostCard from "../../components/letter/preview/Postcard";
import MenuList from "../../components/menu/MenuList";

import { sendLetter } from "../../components/apis/letter";
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
    setStyleUrl,
    content,
    musicUrl,
    image,
    contentPosition,
    fontsize,
    stickersPos,
    bgcolor,
    fontOrder,
    fontType,
    fontColor,
    isFontBold,
    setIsFontBold,
    underlineColor,
    setReceiverName,
    setReceiverEmail,
  } = useContext(LetterContext);

  const { setMailCode } = useContext(RoutingContext);
  useEffect(() => {
    authentication();
  }, []);

  const send = async () => {
    const stringifyStickers = JSON.stringify(stickersPos);
    const body = {
      mail_type: mailType,
      receiver_name: receiverName,
      receiver_email: receiverEmail,
      title: title,
      content: content,
      style_url: styleUrl,
      music_url: musicUrl,
      image: "",
      content_position: "",
      stickers: stringifyStickers,
      font_order: fontOrder,
      font_type: fontType,
      font_size: fontsize,
      // 숫자로
      font_color: fontColor,
      background_color: bgcolor,
      is_font_bold: isFontBold,
      underline_color: underlineColor,
      handwrite_image: "",
    };

    try {
      const res = await sendLetter(body);
      setMailCode(res.data);
      setReceiverName(null);
      setReceiverEmail(null);
      // console.log(res.data.code);
      // console.log("하기 전", stickersPos);
      // console.log(JSON.stringify(stickersPos));
      // console.log("다시", JSON.parse(stringifyStickers));
      Router.push("/letter/share");
    } catch (e) {
      console.log(e);
    }
  };

  const handlePrevClick = () => {
    Router.push("/letter/edit");
  };

  return (
    <Box
      component="div"
      sx={{
        width: 420,
        minHeight: "100vh",
        mx: "auto",
        bgcolor: "#FCFAEF",
        position: "relative",
      }}
    >
      <Header title="미리보기" handlePrevClick={handlePrevClick}></Header>
      <MenuList></MenuList>
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
      <Box sx={{ mt: "2rem" }}>
        <Player musicUrl={musicUrl}></Player>
      </Box>

      <Button
        color="inherit"
        className="Batang"
        sx={{
          fontSize: 18,
          display: "flex",
          mt: "1rem",
          mx: "auto",
          "&:hover": { bgcolor: "transparent" },
        }}
        onClick={send}
      >
        편지 전송
      </Button>
    </Box>
  );
}
