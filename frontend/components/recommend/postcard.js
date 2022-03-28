import React from "react";
import { Box, Input, Typography, Button } from "@mui/material";

const Postcard = (props) => {
  const { imgsrc } = props;
  return (
    <Box
      sx={{
        width: "125px",
        height: "200px",
        mt: "2rem",
        position: "relative",
        float: "left",
      }}
    >
      <Box component="div" sx={{ position: "relative" }}>
        <img width="125px" height="200px" src={imgsrc}></img>
      </Box>
    </Box>
  );
};
export default Postcard;
