import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import LandingDiv from "../components/landing/LandingDiv";
import StartButton from "../components/landing/StartButton";
import Footer from "../components/Footer";

export default function landing() {
  return (
    <>
      <Box sx={{ width: 420, mx: "auto" }}>
        <Box sx={{ ...landingBoxStyle }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ pb: "4rem" }}
            className="Arvo"
          >
            CU;LETTER
          </Typography>
          <Typography
            sx={{
              pb: "5rem",
              px: "3rem",
              textAlign: "center",
              lineHeight: "2rem",
            }}
            className="Dodum"
            gutterBottom
          >
            문득 생각나는 사람에게 <br />
            마음을 전달하고싶었던 적 없으신가요?
            <br />
            CU;LETTER가 <br /> 당신의 마음이 <br />
            오롯이 전달되는것을 도와드릴게요
          </Typography>
          <StartButton description="시작하기"></StartButton>
        </Box>
        <LandingDiv
          style={landingBoxStyle}
          bgcolor={divColor[0]}
          title="테마 추천"
          description="편지 내용을 분석해 가장 적절한 테마를 추천합니다."
          id="0"
        ></LandingDiv>
        <LandingDiv
          style={landingBoxStyle}
          bgcolor={divColor[1]}
          title="다양한 레이아웃 제공"
          description="사용자의 편지가 더 돋보일 수 있도록 다양한 템플릿을 제공해드립니다. "
          id="1"
        ></LandingDiv>
        <LandingDiv
          style={landingBoxStyle}
          bgcolor={divColor[2]}
          title="배경음악 선정"
          description="당신의 편지가 더욱 와닿을 수 있도록"
          id="2"
        ></LandingDiv>
      </Box>
      <Footer />
    </>
  );
}

const landingBoxStyle = {
  bgcolor: "#FCFAEF",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  mx: "auto",
  height: "100vh",
};

const divColor = ["#E2E0A5", "#EEEB94", "#E2E0A5"];
