import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
const Normal = (props) => {
  const { imgsrc, content } = props;
  return (
    <Box
      sx={{
        width: "175px",
        height: "280px",
        margin: "auto",
        mt: "2rem",
        position: "relative",
      }}
    >
      <Box component="div" sx={{ position: "relative" }}>
        <img width="175px" height="280px" src={imgsrc} style={{}}></img>
      </Box>
    </Box>
  );
};

export default Normal;
