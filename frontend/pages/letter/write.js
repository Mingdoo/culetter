import React, { useEffect, useState, useContext } from "react";
import Header from "../../components/Header";
import Content from "../../components/write/Content";
import { Box } from "@mui/material";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LetterContext from "../../contexts/LetterContext";
import { authentication } from "../../components/apis/auth";
const writeLetter = () => {
  const [textValid, setTextValid] = useState(false);
  const { mailType } = useContext(LetterContext);

  const handleNextClick = (e) => {
    e.preventDefault();

    if (textValid) {
      Router.push("/letter/recommended");
    } else {
      toast.error("제목 또는 내용을 확인해주세요", {
        position: toast.POSITION.TOP_CENTER,
        role: "alert",
      });
    }
  };

  const handlePrevClick = (e) => {
    e.preventDefault();
    Router.push("/letter/type");
  };

  const checkTextValid = (valid) => {
    setTextValid(valid);
  };

  useEffect(() => {
    console.log(mailType);
    authentication();
  }, []);

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
      <Content checkTextValid={checkTextValid}></Content>
      <ToastContainer />
    </Box>
  );
};
export default writeLetter;
