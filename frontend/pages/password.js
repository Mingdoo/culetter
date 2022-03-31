import { Box, Button, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import Header from "../components/Header";
import Router from "next/router";
import PWCheckField from "../components/profile/PWCheckField";
import ConfirmBtn from "../components/profile/ConfirmBtn";
import { ToastContainer, toast } from "react-toastify";
export default function password() {
  const [pwInput, setPwInput] = useState(null);
  const [pwCheck, setPwCheck] = useState(true);

  const [pwSecondInput, setPwSecondInput] = useState(null);
  const [pwSecondCheck, setPwSecondCheck] = useState(true);

  const onConfirmBtnClick = (e) => {
    e.preventDefault();
  };
  const handlePrevClick = (e) => {
    e.preventDefault();
    Router.push("/");
  };

  return (
    <Box sx={{ width: 420, mx: "auto" }}>
      <Box
        sx={{
          bgcolor: "#FCFAEF",
          mx: "auto",
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header
          title="비밀번호 변경"
          handlePrevClick={handlePrevClick}
        ></Header>
        <Box sx={{ width: "85%" }}>
          <Typography className="Batang" sx={{ fontSize: 12 }}>
            변경하실 비밀번호를 입력해주세요
          </Typography>
        </Box>
        <Box
          sx={{
            width: "90%",
            mt: 2,
            backgroundColor: "#E2E0A5",
            padding: 3,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            pb: 7,
          }}
        >
          <PWCheckField
            id="newPW"
            pwInput={pwInput}
            pwCheck={pwCheck}
            setPwInput={(e) => setPwInput(e)}
            setPwCheck={(e) => setPwCheck(e)}
            labelValue="새 비밀번호"
          ></PWCheckField>
          <PWCheckField
            id="newPWCheck"
            pwInput={pwSecondInput}
            pwCheck={pwSecondCheck}
            setPwInput={(e) => setPwSecondInput(e)}
            setPwCheck={(e) => setPwSecondCheck(e)}
            labelValue="새 비밀번호 확인"
          ></PWCheckField>
        </Box>
        <ConfirmBtn onClick={onConfirmBtnClick}></ConfirmBtn>
      </Box>
    </Box>
  );
}
