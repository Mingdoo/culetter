import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { Grid, TextField, FormControl, Button, Link, Box } from "@mui/material";
import UserApi from "../apis/UserApi";

const useStyles = makeStyles({
  root: {
    color: "#eeee",
    backgroundColor: "",
    "&.Mui-focused": {
      color: "#eeee",
      backgroundColor: "#d3504a",
    },
    "&:before": {
      borderBottomColor: "#eeee",
    },
    "&:hover:not(.Mui-focused):before": {
      borderBottomColor: "#eeee",
    },
    "&:after": {
      // focused
      borderBottomColor: "#eeee",
    },
  },
  input: {
    "&::selection": {
      backgroundColor: "lightgreen",
      color: "#eeee",
    },
  },
});
const useLabelStyles = makeStyles({
  root: {
    color: "#eeee",
    "&.Mui-focused": {
      color: "#eeee",
    },
    fontSize: 14,
  },
});

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {};
  const handleInput = (e) => {
    const { id, value } = e.target;
    setInput({
      ...input,
      [id]: value,
    });
  };

  const classes = useStyles();
  const labelClasses = useLabelStyles();

  return (
    <FormControl
      component="fieldset"
      variant="filled"
      color="#ffff"
      sx={{ mt: 5 }}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        {/* 이메일 입력 */}
        <Grid item xs={12}>
          {/* <PersonIcon sx={{ color: "white" }}></PersonIcon> */}
          <AccountCircleIcon
            sx={{ color: "white", position: "absolute", top: 15, left: 15 }}
          />
          <TextField
            id="email"
            label="이메일"
            type="email"
            autoComplete="off"
            autoFocus
            variant="standard"
            size="small"
            InputProps={{ classes: classes }}
            InputLabelProps={{
              classes: labelClasses,
            }}
            onChange={handleInput}
          />
        </Grid>
        {/* 비밀번호 입력 */}
        <Grid item xs={12}>
          <LockIcon
            sx={{ color: "white", position: "absolute", top: 75, left: 15 }}
          />
          <TextField
            id="password"
            label="비밀번호"
            type="password"
            autoComplete="off"
            variant="standard"
            size="small"
            InputProps={{ classes: classes }}
            InputLabelProps={{
              classes: labelClasses,
            }}
            onChange={handleInput}
          />
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            mb: 1,
            mt: 5,
            ml: 1,
          }}
        >
          <Grid item xs={6}>
            <Button
              variant="contained"
              size="small"
              style={{
                minWidth: "100px",
                minHeight: "30px",
                backgroundColor: "#E2E0A5",
                color: "#3A1D1D",
              }}
            >
              로그인
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Link href="/register">
              <Button
                variant="contained"
                size="small"
                style={{
                  minWidth: "100px",
                  minHeight: "30px",
                  backgroundColor: "#E2E0A5",
                  color: "#3A1D1D",
                }}
              >
                회원가입
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Box component="div">
          <Button
            size="small"
            style={{
              minWidth: "150px",
              minHeight: "30px",
              color: "#FCFAEF",
              fontSize: 12,
              marginTop: "1rem",
              marginLeft: "5rem",
            }}
          >
            비밀번호 재설정
          </Button>
        </Box>
      </Grid>
    </FormControl>
  );
};

export default LoginForm;
