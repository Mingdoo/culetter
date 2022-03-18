import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { Grid, TextField, FormControl, Button } from "@mui/material";

const useIconStyles = makeStyles({
  color: "#eeee",
});

const useStyles = makeStyles({
  root: {
    marginBlock: "10px",
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
    fontSize: 12,
    margin: 0,
  },
});

const SignupForm = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
  });

  const [authCode, setAuthCode] = useState("");

  const handleSubmit = () => {};
  const handleInput = (e) => {
    const { id, value } = e.target;
    setInput({
      ...input,
      [id]: value,
    });

    console.log(e.target.id, e.target.value);
  };
  const classes = useStyles();
  const labelClasses = useLabelStyles();
  const iconClasses = useIconStyles();
  return (
    <FormControl
      component="fieldset"
      variant="filled"
      color="#ffff"
      sx={{ mt: 3 }}
      onSubmit={handleSubmit}
    >
      <Grid container>
        {/* 이메일 입력 */}
        <Grid item xs={2}>
          <AccountCircleIcon
            style={{ color: "green" }}
            sx={{ position: "absolute", top: 15, left: 15 }}
          />
        </Grid>
        <Grid item xs={7}>
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
        <Grid item xs={3}>
          <Button
            variant="contained"
            size="small"
            style={{
              minWidth: "10px",
              minHeight: "10px",
              backgroundColor: "#E2E0A5",
              color: "#3A1D1D",
              fontSize: "0.2rem",
              // ms: "auto",
              margin: "1rem",
            }}
          >
            인증
          </Button>
        </Grid>

        <Grid item xs={2}>
          <AccountCircleIcon
            className={classes.iconClasses}
            sx={{ position: "absolute", top: 15, left: 15, fill: "red" }}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="authCode"
            // label="인증코드"
            type="text"
            autoComplete="off"
            autoFocus
            variant="standard"
            size="small"
            placeholder="코드 입력"
            InputProps={{ classes: classes }}
            InputLabelProps={{
              classes: labelClasses,
            }}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            size="small"
            style={{
              minWidth: "10px",
              minHeight: "10px",
              backgroundColor: "#E2E0A5",
              color: "#3A1D1D",
              fontSize: "0.2rem",
              // ms: "auto",
              margin: "1rem",
            }}
          >
            확인
          </Button>
        </Grid>

        <Grid item xs={12}>
          {/* 비밀번호 입력 */}
          <AccountCircleIcon sx={{ position: "absolute", top: 15, left: 15 }} />
          <TextField
            id="password"
            label="비밀번호"
            type="password"
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
        <Grid item xs={12} sx={{}}>
          {/* 비밀번호 확인 입력 */}
          <AccountCircleIcon sx={{ position: "absolute", top: 15, left: 15 }} />
          <TextField
            id="passwordCheck"
            label="비밀번호 확인"
            type="passwordCheck"
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
        <Grid item xs={12}>
          {/* 이름 입력 */}
          <AccountCircleIcon sx={{ position: "absolute", top: 15, left: 15 }} />
          <TextField
            id="name"
            label="이름"
            type="name"
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
      </Grid>
    </FormControl>
  );
};

export default SignupForm;
