import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
const Normal = (props) => {
  const { imgsrc, content } = props;
  return (
    <Box
      className="card"
      sx={{
        width: "125px",
        height: "200px",
        mt: "2rem",
        position: "relative",
        float: "left",
      }}
    >
      <Box component="div" sx={{ position: "relative" }}>
        <img
          width="125px"
          height="200px"
          src={imgsrc}
          style={{ borderRadius: "2rem" }}
        ></img>
        <Typography sx={{ position: "absolute", top: 0 }}>{content}</Typography>
      </Box>
    </Box>
  );
};

export default Normal;
