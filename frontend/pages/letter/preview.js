import { Box, Button, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { useRef, useState } from "react";
import ContentsContext from "../../contexts/ContentsContext";
import Header from "../../components/write/header";
import MiniPlayer from "../../components/letter/preview/MiniPlayer";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseIcon from "@mui/icons-material/Pause";
import AlbumIcon from "@mui/icons-material/Album";

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
  // const { musicSelected } = useContext(ContentsContext);
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
      <audio
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        ref={audioPlayer}
        onTimeUpdate={onPlaying}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>

      <br />
      <p>{currentTime}</p>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={seekValue}
        onChange={(e) => {
          const seekto = audioPlayer.current.duration * (+e.target.value / 100);
          audioPlayer.current.currentTime = seekto;
          setSeekValue(e.target.value);
        }}
      />
      <Grid
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
      </Grid>
      <div>
        <button onClick={stop}>stop</button>
      </div>
      {/* 1. 포토카드 */}
      {/* 2. general */}
      {/* 내용은 저장하고 가는 게 아니라 다시 받아오는가 */}

      <Typography
        sx={{
          maxHeight: 560,
          minHeight: 560,
          whiteSpace: "pre-line",
          width: 1,
          backgroundColor: "white",
          mx: "auto",
          overflow: "auto",
          px: 1,
          py: 2.5,
          position: "relative",
          mb: 4,
        }}
      >
        미리보기 편지 형식으로 제공 미리보기 편지 형식으로 제공 미리보기 편지
        형식으로 제공 미리보기 편지 형식으로 제공 미리보기 편지 형식으로 제공
        미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공 미리보기 편지
        형식으로 제공 미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공
        미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공
      </Typography>
      <Box sx={{ border: "0.5px solid" }}>
        <img
          src="/test.png"
          width={418}
          height={200}
          style={{ display: "block" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Typography
            className="text-area"
            component="div"
            sx={{
              maxHeight: 280,
              minHeight: 280,
              minWidth: "100%",
              px: "2rem",
              py: "1rem",
              overflowY: "auto",
              whiteSpace: "pre-line",
              textUnderlineOffset: 4,
            }}
          >
            제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기
            편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
            제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기
            편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
            제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기
            편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
            제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기
            편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
            제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공
          </Typography>
        </Box>
      </Box>
      <MiniPlayer play={() => play()} pause={() => pause()}></MiniPlayer>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <StyledButton color="inherit" className="Batang" sx={{ fontSize: 18 }}>
          편지 전송
        </StyledButton>
      </Box>
    </Box>
  );
}
