import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../../../components/Variables";
import Palette from "../Palette";

function PostCard({ props }) {
  const [bgColor, setBgColor] = useState(1);
  const [underlineColor, setUnderlineColor] = useState(0);

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
