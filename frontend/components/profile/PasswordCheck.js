import {
  Box,
  Typography,
  Button,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import { useCallback, useState } from "react";
import PWCheckField from "./PWCheckField";

const SERVER_URL = "https://j6a201.p.ssafy.io:8080";
const token = "temp";

export default function PasswordCheck() {
  const [pwInput, setPwInput] = useState(null);
  const [pwCheck, setPwCheck] = useState(true);

  const pwdPattern =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  const sendPw = useCallback(async () => {
    console.log(pwInput);
    try {
      const res = await axios.post(`${SERVER_URL}/api/members/pwcheck`, {
        headers: { Authorization: `Bearer ${token}` },
        password: { pwInput },
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <FormControl component="fieldset">
      {/* <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }}></LockIcon>
        <TextField
          id="password"
          type="password"
          label="비밀번호"
          variant="standard"
          defaultValue={pwInput}
          onChange={(e) => {
            setPwInput(e.target.value);
          }}
        ></TextField>
      </Box> */}
      <PWCheckField
        pwInput={pwInput}
        setPwInput={(e) => setPwInput(e)}
        pwCheck={pwCheck}
        setPwCheck={(e) => setPwCheck(e)}
      ></PWCheckField>
      <Button
        variant="contained"
        size="small"
        style={{
          minWidth: "200px",
          minHeight: "30px",
          backgroundColor: "#E2E0A5",
          color: "#3A1D1D",
          marginTop: "1rem",
          fontFamily: "Gowun Batang",
        }}
        onClick={sendPw}
        disabled={!pwCheck}
      >
        확인
      </Button>
    </FormControl>
  );
}
