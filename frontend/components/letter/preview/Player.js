import { Grid, Box, Typography } from "@mui/material";
import { useState, useRef, useContext, useEffect } from "react";

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseIcon from "@mui/icons-material/Pause";
import AlbumIcon from "@mui/icons-material/Album";
import LetterContext from "../../../contexts/LetterContext";

export default function Player(props) {
  const { music, inboxMusicName } = props;
  // const { musicSelected } = useContext(ContentsContext);
  const { musicName, musicUrl, setMusicUrl } = useContext(LetterContext);
  const audioPlayer = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playStatus, setPlayStatus] = useState("stop");
  const handleMusicStart = () => {
    audioPlayer.current.play();
    setPlayStatus("play");
  };
  const handleMusicStop = () => {
    audioPlayer.current.pause();
    setPlayStatus("stop");
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
    // (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100 ===
    // 100
    //   ? setIsPlaying(true)
    //   : null;
  };

  useEffect(() => {
    if (music !== undefined) {
      console.log(music, "player music");
      setMusicUrl(music);
    } else {
      setMusicUrl(musicUrl);
    }
    console.log(isPlaying);
  }, []);

  useEffect(() => {
    console.log(music, "player");
  }, [music]);
  return (
    <>
      <audio
        src={music === undefined ? musicUrl : music}
        ref={audioPlayer}
        onTimeUpdate={onPlaying}
      >
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
          <Typography className="Batang">
            {inboxMusicName ? inboxMusicName : musicName}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          {playStatus === "stop" ? (
            <PlayArrowRoundedIcon
              sx={{ display: "flex", justifyContent: "center" }}
              onClick={() => {
                handleMusicStart();
                // setIsPlaying(true);
              }}
            ></PlayArrowRoundedIcon>
          ) : (
            <PauseIcon
              sx={{ display: "flex", justifyContent: "center" }}
              onClick={() => {
                handleMusicStop();
                // setIsPlaying(false);
              }}
            ></PauseIcon>
          )}
        </Grid>
      </Grid>
    </>
  );
}
