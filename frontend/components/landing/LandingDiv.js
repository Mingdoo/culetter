import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import PhoneImage from "./PhoneImage";

import StartButton from "./StartButton";

export default function LandingDiv(props) {
  const Navigator =
    props.id === "2" ? (
      <>
        <Typography
          sx={{
            px: "2rem",
            mt: "2rem",
            textAlign: "center",
            mx: "auto",
            mb: "2rem",
          }}
          className="Batang"
          gutterBottom
        >
          CU;LETTER를 통해 <br /> 다른 사람에게 마음을 전해보겠습니까?
        </Typography>
        <StartButton description="마음 전하기"></StartButton>
      </>
    ) : null;
  return (
    <Box sx={{ ...props.style, bgcolor: props.bgcolor, alignItems: "start" }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ px: "1rem", color: "#A63636" }}
        className="Dodum"
      >
        {props.title}
      </Typography>
      <Typography
        sx={{ px: "2rem", mb: "2rem" }}
        gutterBottom
        className="Batang"
      >
        {props.description}
      </Typography>
      {/* <PhoneImage>
        이미지가 추가되면 prop으로 경로 연결할 예정
      </PhoneImage> */}
      <Box
        sx={{ width: "100%" }}
        src="iphone.png"
        component="img"
        alt={props.title + "에 대한 사진"}
      ></Box>
      {Navigator}
    </Box>
  );
}
