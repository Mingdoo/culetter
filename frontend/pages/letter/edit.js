import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button, IconButton } from "@mui/material";
import { landingBoxStyle } from "../index";
import Palette from "../../components/letter/Palette";
import FontFamily from "../../components/letter/FontFamily";
import Router from "next/router";
import Alignment from "../../components/letter/Alignment";
import Header from "../../components/Header";
import FontSize from "../../components/letter/FontSize";
import Letter from "../../components/letter/Letter";

function edit() {
  const colors = [
    "#000000",
    "#ffffff",
    "#733C3C",
    "#8479E1",
    "#B4ECE3",
    "#FFF8D5",
    "#FD5D5D",
    "#FF8080",
    "#FFF7BC",
    "#C0EDA6",
    "#FAD9E6",
    "#E4AEC5",
    "#5F7464",
    "#243D25",
    "#FF6B6B",
    "#FFD93D",
    "#6BCB77",
    "#4D96FF",
  ];

  const fonts = [
    { fontfamily: "Noto Sans", fontname: "Noto Sans", className: "" },
    { fontfamily: "Nanum Gothic", fontname: "나눔 고딕", className: "" },
    { fontfamily: "Nanum Myeongjo", fontname: "나눔 명조", className: "" },
    { fontfamily: "Nanum Pen", fontname: "나눔 펜", className: "" },
    { fontfamily: "Nanum Brush", fontname: "나눔 브러쉬", className: "" },
    { fontfamily: "Gowun Dodum", fontname: "고운 돋움", className: "" },
    { fontfamily: "Gowun Batang", fontname: "고운 바탕", className: "" },
  ];

  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isFontFamilyOpen, setIsFontFamilyOpen] = useState(false);
  const [isAlignmentOpen, setisAlignmentOpen] = useState(false);
  const [alignment, setAlignment] = useState("justify");
  const [clickedColor, setClickedColor] = useState(0);
  const [clickedFont, setClickedFont] = useState(0);
  const [isFontSizeOpen, setIsFontSizeOpen] = useState(false);
  const [fontSize, setFontSize] = useState(20);
  const [showDots, setShowDots] = useState(true);

  const templateLiteral = `좋은 옷 있으면 생각날 때 입고
  좋은 음식 있으면 먹고 싶을 때 먹고
  좋은 음악 있으면 듣고 싶을 때 들으세요
  더구나 좋은 사람 있으면
  마음 속에 숨겨두지 말고
  마음껏 좋아하고 마음껏 그리워하세요
  그리하여 때로는 얼굴 붉힐 일
  눈물 글썽일 일 있다한들
  그게 무슨 대수겠어요!
  지금도 그대 앞에 꽃이 있고
  좋은 사람이 있지 않나요
  그 꽃을 마음껏 좋아하고
  그 사람을 마음껏 그리워하세요`;
  useEffect(() => {
    setShowDots(
      !(isColorOpen || isFontSizeOpen || isAlignmentOpen || isFontSizeOpen),
    );
  }, [isColorOpen, isFontFamilyOpen, isAlignmentOpen, isFontSizeOpen]);

  const handleOpenPalette = (e, type) => {
    e.preventDefault();
    switch (type) {
      case "text":
        setIsColorOpen(!isColorOpen);
        setIsFontFamilyOpen(false);
        setisAlignmentOpen(false);
        setIsFontSizeOpen(false);
        break;

      case "fontfamily":
        setIsFontFamilyOpen(!isFontFamilyOpen);
        setIsColorOpen(false);
        setisAlignmentOpen(false);
        setIsFontSizeOpen(false);
        break;

      case "alignment":
        setisAlignmentOpen(!isAlignmentOpen);
        setIsColorOpen(false);
        setIsFontFamilyOpen(false);
        setIsFontSizeOpen(false);
        break;

      case "fontsize":
        setIsFontSizeOpen(!isFontSizeOpen);
        setisAlignmentOpen(false);
        setIsColorOpen(false);
        setIsFontFamilyOpen(false);
        break;
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
  };
  const handlePrevClick = (e) => {
    e.preventDefault();
    Router.push("/letter/music");
  };
  return (
    <>
      <Box
        sx={{
          ...landingBoxStyle,
          width: 420,
          height: 1,
          justifyContent: "start",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Header
          handlePrevClick={handlePrevClick}
          title="스타일 변경"
          handleNextClick={handleNextClick}
        />
        <Typography className="Batang" sx={{ mb: "1rem" }}>
          글꼴과 글자색을 변경할 수 있습니다
        </Typography>
        {/* 여기부터 편지 */}
        <Letter
          fontFamily={fonts[clickedFont].fontfamily}
          color={colors[clickedColor]}
          textAlign={alignment}
          fontSize={fontSize}
          text={templateLiteral}
        />
        {/* 여기까지 편지 */}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            width: 420,
            mx: "auto",
          }}
        >
          <Palette
            colors={colors}
            isColorOpen={isColorOpen}
            clickedColor={clickedColor}
            setClickedColor={setClickedColor}
          />
          <FontFamily
            fonts={fonts}
            isFontFamilyOpen={isFontFamilyOpen}
            clickedFont={clickedFont}
            setClickedFont={setClickedFont}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Alignment
              isAlignmentOpen={isAlignmentOpen}
              setAlignment={setAlignment}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <FontSize
              isFontSizeOpen={isFontSizeOpen}
              setFontSize={setFontSize}
              fontSize={fontSize}
            />
          </Box>

          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={3}>
              <Box sx={{ mb: "2rem", ml: "1rem", textAlign: "center" }}>
                <Box
                  onClick={(e) => handleOpenPalette(e, "text")}
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <Typography className="Dodum">글자색</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ mb: "2rem", textAlign: "center" }}>
                <Box
                  onClick={(e) => handleOpenPalette(e, "fontfamily")}
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <Typography className="Dodum">글꼴</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ mb: "2rem", mr: "1rem", textAlign: "center" }}>
                <Box
                  onClick={(e) => handleOpenPalette(e, "alignment")}
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <Typography className="Dodum">정렬</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ mb: "2rem", mr: "1rem", textAlign: "center" }}>
                <Box
                  onClick={(e) => handleOpenPalette(e, "fontsize")}
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <Typography className="Dodum">글자 크기</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default edit;
