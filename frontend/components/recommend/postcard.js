import React from "react";
import { Box, Input, Typography, Button } from "@mui/material";

const Postcard = (props) => {
  const { imgsrc } = props;
  return (
    <Box
      sx={{
        width: "320px",
        height: "160px",
        position: "relative",
        alignItems: "center",
      }}
    >
      <Box component="div" sx={{ position: "relative" }}>
        <img width="320px" height="160px" src={imgsrc}></img>
      </Box>
    </Box>
  );
};
export default Postcard;
