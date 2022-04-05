import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import Type from "../../components/write/Type";
import Router from "next/router";
import { authentication } from "../../components/apis/auth";
const type = (props) => {
  useEffect(() => {
    authentication();
  }, []);
  const { describe, detail } = props;
  const source = [
    {
      text: "포토 카드",
      describe: "사진과 글을 \n" + "앞 뒷면으로 \n" + "나누어 보내보세요",
      imgsrc: "/img/photocardImg.PNG",
      href: "photocard",
    },
    {
      text: "일반 편지",
      describe: "글로  \n" + "당신의 마음을 \n" + "표현해보세요",
      imgsrc: "/img/normalImg.PNG",
      href: "normal",
    },
    {
      text: "엽서",
      describe: "당신의 글과 \n" + "어울리는 사진을\n" + " 함께 보내드릴게요",
      imgsrc: "/img/postcardImg.png",
      href: "postcard",
    },
  ];

  const handleNextClick = (e) => {
    e.preventDefault();
    Router.push("/letter/write");
  };
  const handlePrevClick = (e) => {
    e.preventDefault();
    Router.push("/letter/select");
  };

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
      <Header handlePrevClick={handlePrevClick} title="형식 선택" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#FCFAEF",
        }}
      >
        {source.map((data, index) => (
          <Type
            text={data.text}
            index={index}
            key={index}
            describe={data.describe}
            imgsrc={data.imgsrc}
          ></Type>
        ))}
      </Box>
    </Box>
  );
};

export default type;
