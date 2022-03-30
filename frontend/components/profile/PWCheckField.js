import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Router from "next/router";

const useStyles = makeStyles({
  root: {
    color: "#3A1D1D",
    "&.Mui-focused": {
      color: "#3A1D1D",
    },
    "&:before": {
      borderBottomColor: "#3A1D1D",
    },
    "&:hover:not(.Mui-focused):before": {
      borderBottomColor: "#3A1D1D",
    },
    "&:after": {
      borderBottomColor: "#3A1D1D",
    },
  },
});
const useLabelStyles = makeStyles({
  root: {
    color: "#3A1D1D",
    "&.Mui-focused": {
      color: "#3A1D1D",
    },
    fontSize: 14,
  },
});

export default function PWCheckField({
  pwInput,
  setPwInput,
  pwCheck,
  setPwCheck,
  withBtn,
  labelValue,
  gridLength,
  id,
}) {
  const [pwMsg, setPwMsg] = useState(true);

  // 변경 버튼 눌렀을 때
  const toPwChange = (e) => {
    e.preventDefault();
    Router.push("/password");
  };

  //
  const pwValidationCheck = (e) => {
    setPwInput(e.target.value);
    const pwdPattern =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    console.log(">>>>", !pwdPattern.test(pwInput), pwCheck);
    if (!pwdPattern.test(pwInput)) {
      setPwCheck(false);
      setPwMsg("* 8 ~ 20자 영어, 숫자, 특수문자의 조합");
    } else {
      setPwCheck(true);
      setPwMsg("");
    }
  };

  const classes = useStyles();
  const labelClasses = useLabelStyles();

  return (
    <Box>
      <Grid container>
        <Grid item xs={1} sx={{ display: "flex", alignItems: "flex-end" }}>
          <LockIcon sx={{ color: "white", mr: 1, my: 0.5 }}></LockIcon>
        </Grid>
        <Grid item xs={11} sx={{ pl: 1 }}>
          <TextField
            InputLabelProps={{
              style: { fontFamily: "Gowun Batang" },
              classes: labelClasses,
            }}
            sx={{ width: 1 }}
            disabled={withBtn ? true : false}
            id={id}
            type="password"
            variant="standard"
            label={labelValue}
            defaultValue={pwInput ? pwInput : ""}
            onChange={(e) => pwValidationCheck(e)}
            InputProps={{
              classes: classes,
              endAdornment: withBtn ? (
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#FCFAEF",
                    color: "#3A1D1D",
                    fontSize: "10px",
                    fontFamily: "Gowun Dodum",
                    "&:hover": {
                      backgroundColor: "#FCFAEF",
                    },
                  }}
                  onClick={toPwChange}
                >
                  변경
                </Button>
              ) : null,
            }}
          ></TextField>
        </Grid>
      </Grid>
      <Grid container>
        {/* grid로 안 가는 게 나을 수도 */}
        <Grid item xs={2} />
        <Grid item xs={10}>
          {/* {pwCheck ? null : ( */}
          <Box
            component="div"
            sx={{
              fontSize: 11,
              color: "#A63636",
              fontFamily: "Gowun Batang",
              height: "18px,",
              pt: "2px",
              "&:hover": {
                backgroundColor: "#f6f4b2",
              },
            }}
          >
            {/* 메세지 뜰때 높이 변하지 않도록 */}
            <Box>{pwCheck ? "" : pwMsg}</Box>
          </Box>
          {/* )} */}
        </Grid>
      </Grid>
    </Box>
  );
}
