import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Palette from "../Palette";

function PostCard({ props }) {
  const [bgColor, setBgColor] = useState(0);
  const [underlineColor, setUnderlineColor] = useState(1);
  const colors = [
    "#ffffff",
    "#000000",
    "#8479E1",
    "#0E1555",
    "#3E432E",
    "#DBEDF3",
    "#E9B5D2",
    "#FF8080",
    "#FFF7BC",
    "#FFD93D",
    "#B4ECE3",
    "#4D96FF",
    "#C84B31",
    "#700B97",
    "#C0EDA6",
    "#C70D3A",
    "#AF0404",
    "#A12568",
    "#346751",
    "#FFF8D5",
    "#FD5D5D",
    "#FF6B6B",
    "#83142C",
    "#6BCB77",
    "#1C0C5B",
    "#31112C",
    "#FAD9E6",
    "#1A1A2E",
    "#E4AEC5",
    "#5F7464",
    "#243D25",
    "#1F4068",
    "#FF8BA0",
    "#14FFEC",
    "#733C3C",
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: 420,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ border: "0.5px solid" }}>
        <img
          src="/test.png"
          width={418}
          height={200}
          style={{ display: "block" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Typography
            className="text-area"
            component="div"
            sx={{
              fontFamily: props.fontFamily,
              color: props.color,
              textAlign: props.textAlign,
              fontSize: props.fontSize,
              maxHeight: 280,
              minHeight: 280,
              minWidth: "100%",
              px: "2rem",
              py: "1rem",
              overflowY: "auto",
              whiteSpace: "pre-line",
              fontWeight: props.bold ? "bold" : "normal",
              textDecoration: `${colors[underlineColor]} underline`,
              textUnderlineOffset: 4,
              bgcolor: colors[bgColor],
            }}
          >
            {props.text}
          </Typography>
        </Box>
      </Box>
      <br />
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Palette
          colors={colors}
          isColorOpen={props.showDots}
          clickedColor={bgColor}
          setClickedColor={setBgColor}
          size="half"
        />
        {/* <br /> */}
        <Palette
          colors={colors}
          isColorOpen={props.showDots}
          clickedColor={underlineColor}
          setClickedColor={setUnderlineColor}
          size="half"
        />
      </Box>
    </Box>
  );
}

export default PostCard;
