import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import StyledTextField from "./StyledTextField";
import Router from "next/router";

export default function PWCheckField({
  pwInput,
  setPwInput,
  pwCheck,
  setPwCheck,
  withBtn,
  labelValue,
  id,
}) {
  const [pwMsg, setPwMsg] = useState(true);
  const pwdPattern = /^.{8,16}$/;

  const pwValidationCheck = (e) => {
    setPwInput(e.target.value);
    if (!pwdPattern.test(e.target.value)) {
      setPwMsg("8자 이상 16자 이하");
      setPwCheck(false);
    } else {
      setPwMsg("");
      setPwCheck(true);
    }
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={1} sx={{ display: "flex", alignItems: "flex-end" }}>
          <LockIcon sx={{ color: "white", mr: 1, my: 0.5 }}></LockIcon>
        </Grid>
        <Grid item xs={11} sx={{ pl: 1 }}>
          <StyledTextField
            disabled={withBtn ? true : false}
            id={id}
            type="password"
            label={labelValue}
            defaultValue={pwInput ? pwInput : ""}
            onChange={(e) => pwValidationCheck(e)}
            value={pwInput}
          ></StyledTextField>
        </Grid>
      </Grid>
      <Box
        component="div"
        sx={{
          fontSize: 11,
          color: "#d25858",
          fontFamily: "Gowun Batang",
          height: "18px",
          pt: "2px",
          ml: 4.7,
        }}
      >
        {pwCheck ? "" : pwMsg}
      </Box>
    </Box>
  );
}
