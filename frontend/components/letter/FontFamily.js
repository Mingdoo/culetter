import React, { useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FontFamily({ fonts, isFontFamilyOpen, clickedFont, setClickedFont }) {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    variableWidth: true,
    swipeToSlide: true,
  };
  return (
    <Box
      sx={{
        m: "1rem",
        border: "2px solid #aaaaaa",
        borderRadius: 5,
        backgroundColor: "#aaaaaa",
        whiteSpace: "nowrap",
        visibility: isFontFamilyOpen ? "visible" : "hidden",
        display: isFontFamilyOpen ? "flex" : "none",
        height: 60,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Slider {...settings}>
        {fonts.map((font, idx) => (
          <Box
            sx={{
              display: "flex",
              "&:hover": { cursor: "pointer" },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              m: 1,
              backgroundColor: clickedFont === idx ? "#E4AEC5" : "white",
              width: 30,
              textAlign: "center",
              boxShadow: 2,
              alignSelf: "center",
            }}
            key={idx}
            onClick={() => {
              setClickedFont(idx);
            }}
          >
            <Typography variant="" sx={{ fontFamily: font.fontfamily }}>
              {font.fontname}
            </Typography>
            <Typography sx={{ fontFamily: font.fontfamily }}>
              가나Abg12
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default FontFamily;
