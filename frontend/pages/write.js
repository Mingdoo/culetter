import React, { useState } from "react";
import Header from "../components/write/header";
import Content from "../components/write/content";
import { Box } from "@mui/material";
const writeLetter = () => {
  return (
    <Box
      component="div"
      sx={{
        width: 420,
        height: "100vh",
        mx: "auto",
        bgcolor: "#FCFAEF",
      }}
    >
      <Header title="편지쓰기" />
      <Content></Content>
    </Box>
  );
};
export default writeLetter;
