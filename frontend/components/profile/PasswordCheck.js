import { Button, FormControl, Box } from "@mui/material";
import axios from "axios";
import { useCallback, useState } from "react";
import PWCheckField from "./PWCheckField";

const SERVER_URL = "https://j6a201.p.ssafy.io:8080";
const token = "temp";

export default function PasswordCheck({ pwConfirm, setPwConfirm }) {
  const [pwInput, setPwInput] = useState(null);
  const [pwCheck, setPwCheck] = useState(true);

  const pwdPattern =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  const sendPw = useCallback(async () => {
    // console.log(pwInput);
    // 임시
    setPwConfirm(true);
    try {
      const res = await axios.post(`${SERVER_URL}/api/members/pwcheck`, {
        headers: { Authorization: `Bearer ${token}` },
        password: { pwInput },
      });
      // setPwConfirm(true);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <FormControl component="fieldset" sx={{ display: "flex" }}>
      <Box
        sx={{
          backgroundColor: "#E2E0A5",
          pt: 1,
          px: 3,
          pb: 3,
          borderRadius: 2,
        }}
      >
        <PWCheckField
          pwInput={pwInput}
          setPwInput={(e) => setPwInput(e)}
          pwCheck={pwCheck}
          setPwCheck={(e) => setPwCheck(e)}
        ></PWCheckField>
      </Box>
      <Button
        variant="contained"
        size="small"
        sx={{
          minWidth: "200px",
          minHeight: "30px",
          backgroundColor: "#E2E0A5",
          color: "#3A1D1D",
          marginTop: "1rem",
          fontFamily: "Gowun Batang",
          mx: "auto",
        }}
        onClick={sendPw}
        disabled={!pwCheck}
      >
        확인
      </Button>
    </FormControl>
  );
}
