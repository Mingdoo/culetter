import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function palette({ colors, isColorOpen, clickedColor, setClickedColor }) {
  const settings = {
    arrows: false,
    infinite: false,
    dots: false,
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
        visibility: isColorOpen ? "visible" : "hidden",
      }}
    >
      <Slider {...settings}>
        {colors.map((color, idx) => (
          <React.Fragment key={idx}>
            <IconButton
              sx={{}}
              id={idx}
              onClick={(e) => {
                e.preventDefault();
                setClickedColor(idx);
              }}
            >
              <CircleIcon
                sx={{
                  color: { color },
                  border: clickedColor === idx ? "2px solid black" : null,
                  borderRadius: clickedColor === idx ? 5 : null,
                }}
                size="inherit"
              />
            </IconButton>
          </React.Fragment>
        ))}
      </Slider>
    </Box>
  );
}

export default palette;
