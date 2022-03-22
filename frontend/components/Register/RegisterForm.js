import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import PasswordIcon from "@mui/icons-material/Password";
import {
  Grid,
  TextField,
  FormControl,
  Button,
  Typography,
} from "@mui/material";

const useStyles = makeStyles({
  root: {
    margin: "3px",
    color: "#eeee",
    fontFamily: "Gowun Batang",
    "&.Mui-focused": {
      color: "#eeee",
      backgroundColor: "#d3504a",
    },
    "&:before": {
      color: "#eeee",
      borderBottomColor: "#eeee",
    },
    "&:hover:not(.Mui-focused):before": {
      color: "#eeee",
      borderBottomColor: "#eeee",
    },
    "&:after": {
      // focused
      color: "#eeee",
      borderBottomColor: "#eeee",
    },
  },
  input: {
    "&::selection": {
      backgroundColor: "lightgreen",
      color: "#eeee",
      fontSize: 12,
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

const msgStyle = {
  fontSize: 11,
  color: "#E2E0A5",
  fontFamily: "Gowun Batang",
  marginBottom: "3px",
};

const SignupForm = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
  });

  // 입력 폼 데이터
  const [email, setEmail] = useState("");
  const [emailConfirmCode, setEmailConfirmCode] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [name, setName] = useState("");

  // 유효성 검사 메시지
  const [emailMsg, setEmailMsg] = useState("");
  const [emailConfirmCodeMsg, setEmailConfirmCodeMsg] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");
  const [confirmPwdMsg, setConfirmPwdMsg] = useState("");
  const [nameMsg, setNameMsg] = useState("");

  // 유효성 검사 통과 flag
  const [emailCheck, setEmailCheck] = useState(false);
  const [pwdCheck, setPwdCheck] = useState(false);
  const [confirmPwdCheck, setConfirmPwdCheck] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);

  //이메일 인증여부
  const [authEmail, setAuthEamil] = useState(false);

  const handleSubmit = () => {};
  const handleInput = (e) => {
    //유효성 검사 정규식
    const idPattern = /^[a-zA-Z0-9]*$/;
    const pwdPattern =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    const emailPattern =
      /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    const namePattern = /^[가-힣]+$/;

    const { id, value } = e.target;

    switch (id) {
      case "email":
        setEmail(value);
        if (!emailPattern.test(value)) {
          setEmailMsg("이메일 형식을 확인해주세요.");
        } else {
          setEmailMsg("");
          setEmailCheck(true);
        }
        break;
      case "password":
        setPwd(value);
        console.log(value);
        if (!pwdPattern.test(value)) {
          setPwdMsg("8 ~ 20자 영어, 숫자, 특수문자의 조합");
        } else {
          setPwdMsg("");
          setPwdCheck(true);
        }
        break;
      case "passwordCheck":
        setConfirmPwd(value);
        if (pwd !== value) {
          setConfirmPwdMsg("비밀번호가 일치하지 않습니다.");
        } else {
          setConfirmPwdMsg("");
          setConfirmPwdCheck(true);
        }
        break;
    }

    console.log(e.target.id, e.target.value);
  };
  const classes = useStyles();
  const labelClasses = useLabelStyles();

  return (
    <FormControl
      component="fieldset"
      // variant="filled"
      color="#ffff"
      sx={{ mt: 1 }}
      onSubmit={handleSubmit}
    >
      <Grid container sx={{ maxHeight: "1rem", margin: 0 }}>
        {/* 이메일 입력 */}
        <Grid item xs={2}>
          <AccountCircleIcon
            sx={{ color: "white", position: "relative", top: 20, left: 7 }}
          />{" "}
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
            className="textfield"
            style={{
              marginLeft: "1.0rem",
            }}
            sx={{ color: "white" }}
            InputProps={{ classes: classes }}
            InputLabelProps={{
              style: { fontFamily: "Gowun Batang" },
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
              backgroundColor: "#FCFAEF",
              color: "#3A1D1D",
              fontSize: "0.5rem",
              margin: "1rem",
              fontFamily: "Gowun Dodum",
            }}
          >
            전송
          </Button>
        </Grid>
        <Grid item xs={12}>
          {emailCheck ? null : (
            <Typography component="p" style={msgStyle}>
              {emailMsg}
            </Typography>
          )}
        </Grid>
        {authEmail === true ? (
          <Grid container sx={{ height: "2.5rem" }}>
            <Grid item xs={2}>
              <PasswordIcon
                sx={{ color: "white", position: "relative", top: 20, left: 7 }}
              />{" "}
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="authCode"
                // label="인증코드"
                type="text"
                autoComplete="off"
                variant="standard"
                size="small"
                placeholder="코드 입력"
                style={{
                  marginLeft: "1rem",
                  fontSize: "10px",
                  height: "10px",
                }}
                InputProps={{ classes: classes }}
                InputLabelProps={{
                  style: { fontFamily: "Gowun Batang" },
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
                  backgroundColor: "#FCFAEF",
                  color: "#3A1D1D",
                  fontSize: "0.2rem",
                  margin: "1rem",
                }}
              >
                확인
              </Button>
            </Grid>
          </Grid>
        ) : null}

        <Grid item xs={12}>
          {/* 비밀번호 입력 */}
          <LockIcon
            sx={{ color: "white", position: "relative", top: 20, left: -15 }}
          />{" "}
          <TextField
            id="password"
            label="비밀번호"
            type="password"
            autoComplete="off"
            variant="standard"
            size="small"
            InputProps={{ classes: classes }}
            InputLabelProps={{
              style: { fontFamily: "Gowun Batang" },
              classes: labelClasses,
            }}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          {pwdCheck ? null : (
            <Typography component="p" style={msgStyle}>
              {pwdMsg}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          {/* 비밀번호 확인 입력 */}
          <LockIcon
            sx={{ color: "white", position: "relative", top: 20, left: -15 }}
          />{" "}
          <TextField
            id="passwordCheck"
            label="비밀번호 확인"
            type="password"
            autoComplete="off"
            variant="standard"
            size="small"
            InputProps={{ classes: classes }}
            InputLabelProps={{
              style: { fontFamily: "Gowun Batang" },
              classes: labelClasses,
            }}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          {confirmPwdCheck ? null : (
            <Typography component="p" style={msgStyle}>
              {confirmPwdMsg}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          {/* 이름 입력 */}
          <BadgeIcon
            sx={{ color: "white", position: "relative", top: 20, left: -15 }}
          />
          <TextField
            id="name"
            label="이름"
            type="name"
            autoComplete="off"
            variant="standard"
            size="small"
            InputProps={{ classes: classes }}
            InputLabelProps={{
              style: { fontFamily: "Gowun Batang" },
              classes: labelClasses,
            }}
            // style={{ marginTop: 70 }}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          {nameCheck ? null : (
            <Typography component="p" style={msgStyle}>
              {nameMsg}
            </Typography>
          )}
        </Grid>
        <Grid
          container
          sx={{
            // position: "absolute",
            mb: 0,
          }}
        >
          <Grid button xs={12}>
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
            >
              회원가입
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default SignupForm;
