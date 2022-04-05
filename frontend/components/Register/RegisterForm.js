import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import BadgeIcon from "@mui/icons-material/Badge";
import PasswordIcon from "@mui/icons-material/Password";
import UserApi from "../apis/UserApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";

import {
  Grid,
  TextField,
  FormControl,
  Button,
  Typography,
} from "@mui/material";

// const useStyles = makeStyles({
//   root: {
//     margin: "3px",
//     color: "#eeee",
//     fontFamily: "Gowun Batang",
//     "&.Mui-focused": {
//       color: "#eeee",
//       backgroundColor: "#d3504a",
//     },
//     "&:before": {
//       color: "#eeee",
//       borderBottomColor: "#eeee",
//     },
//     "&:hover:not(.Mui-focused):before": {
//       color: "#eeee",
//       borderBottomColor: "#eeee",
//     },
//     "&:after": {
//       // focused
//       color: "#eeee",
//       borderBottomColor: "#eeee",
//     },
//   },
//   input: {
//     "&::selection": {
//       backgroundColor: "lightgreen",
//       color: "#eeee",
//       fontSize: 12,
//     },
//   },
// });

// const useLabelStyles = makeStyles({
//   root: {
//     color: "#eeee",
//     "&.Mui-focused": {
//       color: "#eeee",
//     },
//     fontSize: 14,
//   },
// });

const msgStyle = {
  fontSize: 11,
  color: "#E2E0A5",
  fontFamily: "Gowun Batang",
  marginBottom: "3px",
};

const labelStyle = {
  color: "#eeee",
  fontSize: 14,
  fontFamily: "Gowun Batang",
};

const SignupForm = () => {
  const { getAuthCode, getConfirmAuthCode, getRegister } = UserApi;
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
  const [code, setCode] = useState("");

  // 유효성 검사 메시지
  const [emailMsg, setEmailMsg] = useState("");
  const [emailConfirmCodeMsg, setEmailConfirmCodeMsg] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");
  const [confirmPwdMsg, setConfirmPwdMsg] = useState("");
  const [nameMsg, setNameMsg] = useState("");
  const [registMsg, setRegistMsg] = useState("");

  // 유효성 검사 통과 flag
  const [emailCheck, setEmailCheck] = useState(false);
  const [pwdCheck, setPwdCheck] = useState(false);
  const [confirmPwdCheck, setConfirmPwdCheck] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);

  //이메일 인증여부
  const [authEmail, setAuthEamil] = useState(false);
  //코드 확인 여부
  const [authCode, setAuthCode] = useState(false);

  const handleSubmit = () => {};
  const handleInput = (e) => {
    //유효성 검사 정규식
    const idPattern = /^[a-zA-Z0-9]*$/;
    //8자이상 16자이하
    const pwdPattern = /^.{8,16}$/;
    const emailPattern =
      /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    const namePattern = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]{2,12}$/;

    const { id, value } = e.target;

    switch (id) {
      case "email":
        setEmail(value);
        if (!emailPattern.test(value)) {
          setEmailMsg("이메일 형식을 확인해주세요.");
          setEmailCheck(false);
        } else {
          setEmailMsg("");
          setEmailCheck(true);
        }
        break;
      case "password":
        setPwd(value);
        if (!pwdPattern.test(value)) {
          setPwdMsg("8자 이상 16자 이하");
          setPwdCheck(false);
        } else {
          setPwdMsg("");
          setPwdCheck(true);
        }
        break;
      case "passwordCheck":
        setConfirmPwd(value);
        if (pwd !== value) {
          setConfirmPwdMsg("비밀번호가 일치하지 않습니다.");
          setConfirmPwdCheck(false);
        } else {
          setConfirmPwdMsg("");
          setConfirmPwdCheck(true);
        }
        break;
      case "name":
        setName(value);
        if (!namePattern.test(value)) {
          setNameMsg("2자 이상 12자 이하로 특수문자는 포함하지 않습니다");
          setNameCheck(false);
        } else {
          setNameMsg("");
          setNameCheck(true);
        }
        break;
      case "code":
        setCode(value);
        break;
    }
  };

  const handleBtn = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "sendBtn":
        sendEmailAuthCodeApi();
        break;
      case "confirmBtn":
        checkEmailAuthCodeApi();
        break;
      case "registerBtn":
        //입력 형식 체크필요
        if (registMsg != "") {
          toast.error(registMsg, {
            position: toast.POSITION.TOP_CENTER,
            role: "alert",
          });
        } else {
          registerApi();
        }
        break;
    }
  };

  const sendEmailAuthCodeApi = async () => {
    const body = {
      email: email,
    };
    try {
      const response = await getAuthCode(body);
      setAuthEamil(true);
      toast.success(
        <div>
          인증코드를 메일로 전송했습니다 <br />
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
          role: "alert",
        }
      );
      console.log(response);
    } catch (error) {
      //이메일 인증 코드 전송 실패시 처리
      toast.error(" 이메일을 확인해주세요", {
        position: toast.POSITION.TOP_CENTER,
        role: "alert",
      });
    }
  };

  const checkEmailAuthCodeApi = async () => {
    const body = {
      email: email,
      code: code,
    };
    try {
      const response = await getConfirmAuthCode(body);
      setAuthCode(true);
      console.log(response);
    } catch (error) {
      toast.error(" 인증코드를 확인해주세요", {
        position: toast.POSITION.TOP_CENTER,
        role: "alert",
      });
      console.log(error);
    }
  };

  const registerApi = async () => {
    const body = {
      email: email,
      password: pwd,
      name: name,
    };
    try {
      const response = await getRegister(body);
      console.log(response);
      toast.success(
        <div>
          회원가입에 성공했습니다 <br />
          로그인 페이지로 이동합니다
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
          role: "alert",
        }
      );
      setTimeout(function () {
        Router.push("/login");
      }, 3000);
    } catch (error) {
      // console.log(error.response.status);
      const status = error.response.status;
      let msg = "";
      switch (status) {
        case 400:
          msg = "입력 형식을 확인해주세요";
          break;
        case 409:
          msg = "이미 존재하는 회원입니다";
          break;
        case 500:
          msg = "회원가입에 실패했습니다";
          break;
      }
      toast.error(msg, {
        position: toast.POSITION.TOP_CENTER,
        role: "alert",
      });
    }
  };

  // const classes = useStyles();
  // const labelClasses = useLabelStyles();

  const styles = (theme) => ({
    multilineColor: {
      color: "red",
    },
  });
  useEffect(() => {
    if (authEmail === false) {
      setRegistMsg("이메일 인증을 진행해주세요");
    } else if (authCode === false) {
      setRegistMsg("코드 인증을 진행해주세요");
    } else if (emailCheck === false) {
      setRegistMsg(" 이메일을 확인해주세요");
    } else if (pwdCheck === false) {
      setRegistMsg(" 비밀번호를 확인해주세요");
    } else if (nameCheck === false) {
      setRegistMsg(" 이름을 확인해주세요");
    } else {
      setRegistMsg("");
    }
  }, [authEmail, authCode, emailCheck, pwdCheck, nameCheck]);

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
            style={{
              marginLeft: "1.0rem",
            }}
            sx={{ color: "white" }}
            InputProps={{
              style: {
                color: "#eeee",
                fontFamily: "Gowun Batang",
              },
            }}
            InputLabelProps={{
              style: {
                fontFamily: "Gowun Batang",
                color: "#eeee",
                fontSize: "0.9rem",
                "&::after": {
                  border: "2px solid red",
                },
              },
            }}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            id="sendBtn"
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
            onClick={handleBtn}
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
        {authEmail === true && authCode === false ? (
          <Grid container sx={{ height: "2.5rem" }}>
            <Grid item xs={2}>
              <PasswordIcon
                sx={{ color: "white", position: "relative", top: 10, left: 9 }}
              />{" "}
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="code"
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
                InputProps={{
                  style: {
                    color: "#eeee",
                    fontFamily: "Gowun Batang",
                  },
                }}
                InputLabelProps={{
                  style: {
                    style: {
                      fontFamily: "Gowun Batang",
                      color: "#eeee",
                      fontSize: "0.9rem",
                    },
                  },
                  // classes: labelClasses,
                }}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                id="confirmBtn"
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
                onClick={handleBtn}
              >
                확인
              </Button>
            </Grid>
          </Grid>
        ) : authCode === true && authEmail === true ? (
          <Grid container sx={{ height: "2.5rem" }}>
            <Grid item xs={2}>
              <ThumbUpAltIcon
                sx={{ color: "white", position: "relative", top: 10, left: 9 }}
              />{" "}
            </Grid>
            <Grid item xs={9}>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#FCFAEF",
                  fontFamily: "Gowun Batang",
                  // backgroundColor: "#FCFAEF",
                  mt: "0.6rem",
                }}
              >
                이메일 인증이 완료되었습니다
              </Typography>
            </Grid>
          </Grid>
        ) : null}

        {/* 비밀번호 입력 */}
        <Grid item xs={2}>
          <LockIcon
            sx={{ color: "white", position: "relative", top: 20, left: 7 }}
            // sx={{ color: "white", position: "relative", top: 20, left: -17 }}
          />{" "}
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="password"
            label="비밀번호"
            type="password"
            autoComplete="off"
            variant="standard"
            size="small"
            style={{
              marginLeft: "1.0rem",
              fontFamily: "Gowun Batang",
              color: "#eeee",
            }}
            // InputProps={{
            //   style: {
            //     color: "#eeee",
            //   },
            // }}
            InputLabelProps={{
              style: {
                fontFamily: "Gowun Batang",
                color: "#eeee",
                fontSize: "0.9rem",
              },
            }}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={12}>
          {pwdCheck ? null : (
            <Typography component="p" style={msgStyle}>
              {pwdMsg}
            </Typography>
          )}
        </Grid>
        <Grid item xs={2}>
          {/* 비밀번호 확인 입력 */}
          <LockIcon
            // sx={{ color: "white", position: "relative", top: 20, left: -17 }}
            sx={{ color: "white", position: "relative", top: 20, left: 7 }}
          />{" "}
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="passwordCheck"
            label="비밀번호 확인"
            type="password"
            autoComplete="off"
            variant="standard"
            size="small"
            style={{
              marginLeft: "1.0rem",
              fontFamily: "Gowun Batang",
              color: "#eeee",
            }}
            InputProps={{
              style: {
                color: "#eeee",
              },
            }}
            InputLabelProps={{
              style: {
                fontFamily: "Gowun Batang",
                color: "#eeee",
                fontSize: "0.9rem",
              },
            }}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={12}>
          {confirmPwdCheck ? null : (
            <Typography component="p" style={msgStyle}>
              {confirmPwdMsg}
            </Typography>
          )}
        </Grid>
        <Grid item xs={2}>
          {/* 이름 입력 */}
          <BadgeIcon
            // sx={{ color: "white", position: "relative", top: 20, left: -19 }}
            sx={{ color: "white", position: "relative", top: 20, left: 9 }}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="name"
            label="이름"
            type="name"
            autoComplete="off"
            variant="standard"
            size="small"
            style={{
              marginLeft: "1.0rem",
              fontFamily: "Gowun Batang",
              color: "#eeee",
            }}
            InputProps={{
              style: {
                color: "#eeee",
              },
            }}
            InputLabelProps={{
              style: {
                fontFamily: "Gowun Batang",
                color: "#eeee",
                fontSize: "0.9rem",
              },
            }}
            // style={{ marginTop: 70 }}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={3}></Grid>
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
          <Grid item xs={12}>
            <Button
              id="registerBtn"
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
              onClick={handleBtn}
            >
              회원가입
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <ToastContainer />
    </FormControl>
  );
};

export default SignupForm;
