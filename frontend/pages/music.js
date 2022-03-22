import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Header from "../components/write/header";
import { borderRadius } from "@mui/system";
import SkipPreviousSharpIcon from "@mui/icons-material/SkipPreviousSharp";
import PlayCircleFilledSharpIcon from "@mui/icons-material/PlayCircleFilledSharp";
import SkipNextSharpIcon from "@mui/icons-material/SkipNextSharp";

const music = () => {
  const [title, setTitle] = useState("라일락");
  const [singer, setSinger] = useState("아이유");

  const lpImgList = ["/img/lpImg1.png", "/img/lpImg2.png", "/img/lpImg3.png"];
  const [index, setIndex] = useState(0);

  const playerIcon = {
    fontSize: "2.5rem",
    margin: "1rem",
  };
  useEffect(() => {
    let index = Math.floor(Math.random() * 3);
    setIndex(index);
  }, []);

  return (
    <Box
      component="div"
      sx={{
        width: 420,
        height: "100vh",
        mx: "auto",
        bgcolor: "#FCFAEF",
      }}
    >
      <Header title="편지와 어울리는 노래들" />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          component="div"
          vatiant="p"
          className="Dodum"
          sx={{ fontSize: "1.5rem", mb: "0.5rem", mt: "0.5rem" }}
        >
          {title}
        </Typography>
        <Typography
          component="div"
          vatiant="p"
          className="Dodum"
          sx={{ mb: "2rem" }}
        >
          {singer}
        </Typography>
        <img
          width="200px"
          height="200px"
          borderRadius="1rem"
          src={lpImgList[index]}
          style={{
            borderRadius: "50%",
            animation: "rotate_image 5s linear infinite",
            transformOrigin: " 50% 50%",
          }}
        ></img>
        <Box
          sx={{
            width: "50px",
            height: "50px",
            backgroundColor: "#333333",
            borderRadius: "50%",
            position: "absolute",
            top: "16rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "20px",
              height: "20px",
              backgroundColor: "#FFFFFF",
              borderRadius: "50%",
              position: "absolute",
              top: "1rem",
            }}
          ></Box>
        </Box>
      </Box>
      <Box></Box>

      <Box sx={{ mt: "1rem", display: "flex", justifyContent: "center" }}>
        <SkipPreviousSharpIcon style={playerIcon} />
        <PlayCircleFilledSharpIcon style={playerIcon} />
        <SkipNextSharpIcon style={playerIcon} />
      </Box>
      <Typography className="Dodum" sx={{ textAlign: "center", mt: "2rem" }}>
        추천된 곡들 중 하나를 선택하고 다음을 눌러주세요.
      </Typography>
      <Box
        sx={{
          width: "380px",
          height: "380px",
          backgroundColor: "#D3504A",
          opacity: "29%",
          margin: "auto",
          mt: "1rem",
          borderRadius: "14px",
        }}
      ></Box>
    </Box>
  );
};

export default music;
