import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Header from "../components/write/header";
import Type from "../components/write/type";

const selectType = (props) => {
  const { describe, detail } = props;
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
      <Header
        title="편지 형식"
        detail1="보낼 편지의 형식을 선택해주세요"
        detail2="모든 편지 내용과 어울리는 노래를 추천해드립니다."
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {["포토 카드", "일반 편지", "엽서"].map((text, index) => (
          <Type text={text} index={index} key={index}></Type>
        ))}
      </Box>
    </Box>
  );
};

export default selectType;
