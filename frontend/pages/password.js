import { Box, Typography } from "@mui/material";
import { useCallback, useState } from "react";

import PWCheckField from "../components/profile/PWCheckField";
export default function password() {
  const [pwInput, setPwInput] = useState(null);
  const [pwCheck, setPwCheck] = useState(true);

  const [pwSecondInput, setPwSecondInput] = useState(null);
  const [pwSecondeCheck, setPwSecondCheck] = useState(true);

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
        <Box sx={{ width: "80%" }}>
          <Typography className="Batang" sx={{ fontSize: 18 }}></Typography>
          <Typography className="Batang" sx={{ fontSize: 12 }}>
            변경하실 비밀번호를 입력해주세요
          </Typography>
        </Box>
        <Box sx={{ width: "90%", backgroundColor: "#E2E0A5" }}>
          <PWCheckField
            id="newPW"
            pwInput={pwInput}
            setPwInput={(e) => setPwInput(e)}
            pwCheck={pwCheck}
            setPwCheck={(e) => setPwCheck(e)}
          ></PWCheckField>
          <PWCheckField
            id="newPWCheck"
            pwInput={pwSecondInput}
            setPwInput={(e) => setPwSecondInput(e)}
            pwCheck={pwSecondeCheck}
            setPwCheck={(e) => setPwSecondCheck(e)}
          ></PWCheckField>
        </Box>
      </Box>
    </Box>
  );
}
