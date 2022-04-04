import { Box, Button, Typography, Grid } from "@mui/material";
import { useRef, useState, useContext, useEffect } from "react";

import Header from "../../components/Header";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import General from "../../components/letter/preview/General";
import Photocard from "../../components/letter/preview/Photocard";

import PauseIcon from "@mui/icons-material/Pause";
import AlbumIcon from "@mui/icons-material/Album";
import LetterContext from "../../contexts/LetterContext";

import { sendLetter } from "../../components/apis/letter";
import PostCard from "../../components/letter/preview/Postcard";

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
  } = useContext(LetterContext);
  // 편지 전송 내용물
  const body = {};

  useEffect(() => {
    console.log(
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
    );
  }, []);
  const send = async () => {
    try {
      const res = await sendLetter(body);
    } catch (e) {
      console.log(e);
    }
  };

  // 플레이어
  const audioPlayer = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const play = () => {
    audioPlayer.current.play();
  };
  const pause = () => {
    audioPlayer.current.pause();
  };
  const stop = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
  };
  const onPlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime);
    setSeekValue(
      (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100,
    );
  };
  const musicSelected = { title: "라일락", singer: "아이유" };

  const [isPlaying, setIsPlaying] = useState(true);

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
      <audio
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        ref={audioPlayer}
        onTimeUpdate={onPlaying}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>

      {/* player play 버튼 때문에 임시로 빼옴 */}
      <Grid
        container
        sx={{
          backgroundColor: "#E7A69E",
          borderRadius: 30,
          mt: "2rem",
          py: "2px",
          px: "4px",
          display: "flex",
          color: "white",
          width: "90%",
          mx: "auto",
          alignItems: "center",
        }}
      >
        <Grid item xs={1} sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AlbumIcon fontSize="small"></AlbumIcon>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Typography className="Batang">
            {musicSelected.title} - {musicSelected.singer}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          {isPlaying ? (
            <PlayArrowRoundedIcon
              sx={{ display: "flex", justifyContent: "center" }}
              onClick={() => {
                play();
                setIsPlaying(false);
              }}
            ></PlayArrowRoundedIcon>
          ) : (
            <PauseIcon
              sx={{ display: "flex", justifyContent: "center" }}
              onClick={() => {
                pause();
                setIsPlaying(true);
              }}
            ></PauseIcon>
          )}
        </Grid>
      </Grid>
      {/* <MiniPlayer play={() => play()} pause={() => pause()}></MiniPlayer> */}
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
