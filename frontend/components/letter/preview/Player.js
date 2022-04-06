import { Grid, Box, Typography } from "@mui/material";
import { useState, useRef, useContext, useEffect } from "react";

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseIcon from "@mui/icons-material/Pause";
import AlbumIcon from "@mui/icons-material/Album";
import LetterContext from "../../../contexts/LetterContext";

export default function Player() {
  // const { musicSelected } = useContext(ContentsContext);
  const { musicName, musicUrl } = useContext(LetterContext);
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
    (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100 ===
    100
      ? setIsPlaying(true)
      : null;
  };

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {}, []);
  return (
    <>
      <audio src={musicUrl} ref={audioPlayer} onTimeUpdate={onPlaying}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
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
          <Typography className="Batang">{musicName}</Typography>
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
    </>
  );
}
