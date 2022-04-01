import { Box, Button, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { useRef, useState, useContext } from "react";

import Header from "../../components/Header";
import MiniPlayer from "../../components/letter/preview/MiniPlayer";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import Letter from "../../components/letter/Letter";
import Photocard from "../../components/letter/preview/Photocard";
import General from "../../components/letter/general/General";
import Postcard from "../../components/letter/preview/Postcard";

import PauseIcon from "@mui/icons-material/Pause";
import AlbumIcon from "@mui/icons-material/Album";
import LetterContext from "../../contexts/LetterContext";

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
`;
const StyledButton = styled(Button)`
  background-color: none;
  &:hover {
    background-color: #fcfaef;
  }
  && .MuiTouchRipple-child {
    background-color: #e2e0a5;
  }
  && .MuiTouchRipple-rippleVisible {
    opacity: 0.5;
    animation-name: ${enterKeyframe};
    animation-duration: 550ms;
    animation-timing-function: ${({ theme }) =>
      theme.transitions.easing.easeInOut};
  }
`;

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
    stickers,
    fontOrder,
    fontType,
    fontColor,
  } = useContext(LetterContext);

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
    stickers,
    fontOrder,
    fontType,
    fontColor
  );
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
      (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
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
        <Letter></Letter>
        {/* <Photocard
          key="previewLetter"
          front={image}
          back={image}
          content="test"
        ></Photocard> */}
      </Box>

      <audio
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        ref={audioPlayer}
        onTimeUpdate={onPlaying}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>

      {/* player play 버튼 때문에 빼옴 */}
      {/* <Grid
        container
        sx={{
          backgroundColor: "#E7A69E",
          borderRadius: 30,
          py: "2px",
          px: "4px",
          display: "flex",
          color: "white",
          width: "90%",
          mx: "auto",
          // mb: 10,
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
      </Grid> */}
      {/* <MiniPlayer play={() => play()} pause={() => pause()}></MiniPlayer> */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <StyledButton color="inherit" className="Batang" sx={{ fontSize: 18 }}>
          편지 전송
        </StyledButton>
      </Box>
    </Box>
  );
}
