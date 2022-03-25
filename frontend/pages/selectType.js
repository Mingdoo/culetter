import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../components/write/Header";
import Type from "../components/write/type";

const selectType = (props) => {
  const { describe, detail } = props;
  const source = [
    {
      text: "포토 카드",
      describe: "사진, 그리고 글을 앞 뒷면으로 나누어 보내보세요",
      imgsrc: "/img/photocardImg.png",
      href: "photocard",
    },
    {
      text: "일반 편지",
      describe: "글로 당신의 마음을 표현해보세요",
      imgsrc: "/img/normalImg.png",
      href: "normal",
    },
    {
      text: "엽서",
      describe: "당신의 글과 어울리는 사진을 함께 보내드릴게요",
      imgsrc: "/img/postcardImg.png",
      href: "postcard",
    },
  ];
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
        {source.map((data, index) => (
          <Type
            text={data.text}
            index={index}
            key={index}
            describe={data.describe}
            imgsrc={data.imgsrc}
            href={data.href}
          ></Type>
        ))}
      </Box>
    </Box>
  );
};

export default selectType;
