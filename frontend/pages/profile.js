import { Box, Typography } from "@mui/material";
import PasswordCheck from "../components/profile/PasswordCheck";
import MyPage from "../components/profile/MyPage";
import { useState } from "react";

export default function Profile() {
  const [pwConfirm, setPwConfirm] = useState(false);

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
        <Typography
          sx={{ mx: "2rem", my: "2rem" }}
          className="Dodum"
          variant="h5"
        >
          마이페이지
        </Typography>
        <Box sx={{ width: "85%" }}>
          <Typography className="Batang" sx={{ fontSize: 18 }}>
            {!pwConfirm ? "비밀번호 확인" : "회원정보 수정"}
          </Typography>
          <Typography className="Batang" sx={{ fontSize: 12 }}>
            {!pwConfirm
              ? "회원 정보 수정을 위해서 비밀번호를 입력해주세요"
              : "프로필 사진, 비밀번호, 이름을 변경할 수 있습니다"}
          </Typography>
        </Box>
        <Box sx={{ width: "90%", mt: 2 }}>
          {!pwConfirm ? (
            <PasswordCheck
              pwConfirm={pwConfirm}
              setPwConfirm={setPwConfirm}
            ></PasswordCheck>
          ) : (
            <MyPage></MyPage>
          )}
        </Box>
      </Box>
    </Box>
  );
}
