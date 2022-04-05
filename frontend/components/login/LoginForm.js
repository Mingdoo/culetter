import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Grid,
  TextField,
  FormControl,
  Button,
  Link,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import UserApi from "../apis/UserApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = () => {
  const { getLogin } = UserApi;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (value, data) => {
    console.log(value, data);

    if (data === "email") {
      const newInputData = {
        email: value,
        password: input.password,
      };
      setInput(newInputData);
    } else {
      const newInputData = {
        email: input.email,
        password: value,
      };
      setInput(newInputData);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginApi();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("name");
    Router.push("/");
  };

  const loginApi = async () => {
    const body = {
      ...input,
    };
    try {
      const response = await getLogin(body);
      localStorage.setItem("accessToken", response.headers.authorization);
      localStorage.setItem("name", response.data.name);
      toast.success(
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              display: "inline-block",
              fontFamily: "Gowun Batang",
            }}
          >
            로그인 성공🎉
          </div>
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
          role: "alert",
        }
      );
      setTimeout(function () {
        Router.push("/main");
      }, 3000);
    } catch (error) {
      toast.error(
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              display: "inline-block",
              fontFamily: "Gowun Batang",
            }}
          >
            로그인에 실패했습니다😢
          </div>
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
          role: "alert",
        }
      );
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(true);
    }
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const textStyle = {
    fontFamily: "Gowun Batang",
    color: "#eeee",
    margin: "1rem",
    fontSize: "1rem",
  };

  const BtnStyle = {
    width: "35%",
    fontFamily: "Gowun Batang",
    backgroundColor: "#E2E0A5",
    color: "#3A1D1D",
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "1rem 1rem",
  };
  // const classes = useStyles();
  // const labelClasses = useLabelStyles();

  return (
    <>
      {accessToken ? (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mt: "10rem" }}>
            <Typography style={textStyle}>이미 로그인 된 상태입니다</Typography>
            <Typography style={textStyle}>로그아웃 하시겠습니까?</Typography>

            <Button
              style={BtnStyle}
              onClick={() => {
                Router.push("/main");
              }}
            >
              <HomeRoundedIcon />
              홈으로
            </Button>
            <Button style={BtnStyle} onClick={handleLogout}>
              <LogoutIcon />
              로그아웃
            </Button>
          </Box>
        </Box>
      ) : (
        <FormControl
          component="fieldset"
          // variant="filled"
          color="#ffff"
          sx={{ mt: 5 }}
          // onSubmit={handleSubmit}
        >
          {/* 이메일 입력 */}
          <Grid container>
            <Grid item xs={10}>
              <TextField
                id="email"
                label="이메일"
                type="email"
                autoComplete="off"
                autoFocus
                variant="standard"
                size="small"
                style={{
                  marginLeft: "2.5rem",
                  fontFamily: "Gowun Batang",
                  color: "#eeee",
                  fontSize: "1rem",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon sx={{ color: "white" }} />
                    </InputAdornment>
                  ),
                  style: {
                    fontSize: "1rem",
                    color: "#eeee",
                    fontFamily: "Gowun Batang",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Gowun Batang",
                    color: "#eeee",
                    fontSize: "0.9rem",
                  },
                }}
                onChange={(e) => handleInput(e.target.value, "email")}
              />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          {/* 비밀번호 입력 */}
          <Grid container sx={{ mt: 2 }}>
            <Grid item xs={10}>
              <TextField
                id="password"
                label="비밀번호"
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                variant="standard"
                size="small"
                style={{
                  marginLeft: "2.5rem",
                  fontFamily: "Gowun Batang",
                  color: "#eeee",
                  fontSize: "1rem",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: "white" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? (
                          <VisibilityOff sx={{ color: "white" }} />
                        ) : (
                          <Visibility sx={{ color: "white" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                  style: {
                    fontSize: "1rem",
                    color: "#eeee",
                    fontFamily: "Gowun Batang",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Gowun Batang",
                    color: "#eeee",
                    fontSize: "0.9rem",
                  },
                }}
                onChange={(e) => handleInput(e.target.value, "password")}
              />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          {/* <Grid
              container
              spacing={2}
              sx={{
                mb: 1,
                mt: 5,
                ml: 1,
              }}
            > */}
          <Grid container>
            <Grid item xs={6} sx={{ mt: 6 }}>
              <Button
                variant="contained"
                size="small"
                style={{
                  minWidth: "100px",
                  minHeight: "30px",
                  backgroundColor: "#E2E0A5",
                  color: "#3A1D1D",
                }}
                onClick={handleLogin}
              >
                로그인
              </Button>
            </Grid>
            <Grid item xs={6} sx={{ mt: 6 }}>
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
          <Grid item xs={12}>
            <Box component="div">
              <Button
                size="small"
                style={{
                  minWidth: "150px",
                  minHeight: "30px",
                  color: "#FCFAEF",
                  fontSize: 12,
                  marginTop: "1rem",
                }}
              >
                비밀번호 재설정
              </Button>
            </Box>
          </Grid>
          <ToastContainer />
        </FormControl>
      )}
    </>
  );
};

export default LoginForm;
