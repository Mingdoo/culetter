import React, { useState } from "react";
import Header from "../../components/Header";
import Content from "../../components/write/Content";
import { Box } from "@mui/material";
import Router from "next/router";

const writeLetter = () => {
  const handleNextClick = (e) => {
    e.preventDefault();
  };
  const handlePrevClick = (e) => {
    e.preventDefault();
    Router.push("/letter/type");
  };

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
      <Header
        handlePrevClick={handlePrevClick}
        title="편지 쓰기"
        handleNextClick={handleNextClick}
      />
      <Content></Content>
    </Box>
  );
};
export default writeLetter;
