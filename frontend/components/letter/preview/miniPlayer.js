import { Grid, Box, Typography } from "@mui/material";
import { useState, useContext } from "react";

import ContentsContext from "../../../contexts/ContentsContext";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseIcon from "@mui/icons-material/Pause";
import AlbumIcon from "@mui/icons-material/Album";

// const styles = theme => ({

// })
export default function miniPlayer({ play, pause }) {
  // const { musicSelected } = useContext(ContentsContext);
  const musicSelected = { title: "라일락", singer: "아이유" };

  const [isPlaying, setIsPlaying] = useState(true);
  return (
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
              setIsPlaying(true);
            }}
          ></PlayArrowRoundedIcon>
        ) : (
          <PauseIcon
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={() => {
              setIsPlaying(false);
            }}
          ></PauseIcon>
        )}
      </Grid>
    </Grid>
  );
}
