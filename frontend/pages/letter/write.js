import React, { useEffect, useState, useContext } from "react";
import Header from "../../components/Header";
import Content from "../../components/write/Content";
import { Box } from "@mui/material";
import Router from "next/router";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LetterContext from "../../contexts/LetterContext";
import { authentication } from "../../components/apis/auth";
import MailApi from "../../components/apis/MailApi";
const writeLetter = () => {
  const [textValid, setTextValid] = useState(false);
  const [tempMailId, setTempMailId] = useState("");
  const [tempContent, setTempContent] = useState("");
  const [tempTitle, setTempTitle] = useState("");
  const { mailType } = useContext(LetterContext);
  const { getMailById } = MailApi;
  const router = useRouter();

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

  const handleGetMail = async (id) => {
    try {
      const response = await getMailById(id);
      setTempContent(response.data.content);
      setTempTitle(response.data.title);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(mailType);
    authentication();
    if (
      router.query.constructor === Object &&
      Object.keys(router.query).length === 0
    ) {
      console.log("notTempSave");
    } else {
      handleGetMail(router.query.tempId);
      console.log("tempSave");
    }
  }, []);

  useEffect(() => {
    console.log(tempContent);
  }, [tempContent, tempTitle]);

  return (
    <Box
      component="div"
      sx={{
        width: 420,
        height: "100vh",
        bgcolor: "#FCFAEF",
        mx: "auto",
      }}
    >
      <Header
        handlePrevClick={handlePrevClick}
        title="편지 쓰기"
        handleNextClick={handleNextClick}
      />
      <Content
        checkTextValid={checkTextValid}
        tempContent={tempContent}
        tempTitle={tempTitle}
      ></Content>
      <ToastContainer />
    </Box>
  );
};
export default writeLetter;
