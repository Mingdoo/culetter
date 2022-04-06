import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import Router from "next/router";

import RoutingContext from "../contexts/RoutingContext";
import PWCheckField from "../components/profile/PWCheckField";
import ConfirmBtn from "../components/profile/ConfirmBtn";
import { ToastContainer, toast } from "react-toastify";
import { changePw } from "../components/apis/profile";
import { authentication } from "../components/apis/auth";
export default function password() {
  const [pwInput, setPwInput] = useState(null);
  const [pwCheck, setPwCheck] = useState(true);

  const [pwSecondInput, setPwSecondInput] = useState(null);
  const [samePw, setSamePw] = useState(true);

  const { setFromBack } = useContext(RoutingContext);

  const onConfirmBtnClick = async (e) => {
    e.preventDefault();
    try {
      const res = await changePw(pwInput);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authentication();
  }, []);

  useEffect(() => {
    console.log("test");
    handleSamePw();
  }, [pwSecondInput]);

  const handlePrevClick = (e) => {
    e.preventDefault();
    // router back with parameters... 비밀번호 확인을 또 시킬 순 없음.
    setFromBack(true);
    Router.back();
  };

  const handleSamePw = () => {
    if (pwInput !== pwSecondInput) {
      setSamePw(false);
    } else {
      setSamePw(true);
    }
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
          <Typography className="Batang" sx={{ fontSize: 14 }}>
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
            pt: 2,
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
            pwCheck={samePw}
            setPwInput={(e) => setPwSecondInput(e)}
            setPwCheck={(e) => handleSamePw(e)}
            labelValue="새 비밀번호 확인"
          ></PWCheckField>
          <Typography
            sx={{
              fontSize: 11,
              color: "#d25858",
              fontFamily: "Gowun Batang",
              height: "18px",
              pt: "2px",
              ml: 4.7,
            }}
          >
            {samePw ? "" : "비밀번호가 일치하지 않습니다."}
          </Typography>
        </Box>
        <ConfirmBtn onClick={onConfirmBtnClick}></ConfirmBtn>
      </Box>
    </Box>
  );
}
