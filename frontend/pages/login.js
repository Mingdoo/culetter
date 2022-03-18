import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import AutosizeInput from "react-input-autosize";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import UserIcon from "../components/icon/userIcon";
import {
  Button,
  Grid,
  Input,
  TextField,
  Typography,
  Box,
  FormControl,
  Icon,
  SvgIcon,
} from "@mui/material";
import { flexbox } from "@mui/system";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [value, setValue] = useState({
    id: "",
    password: "",
  });

  const handleSubmit = () => {};

  return (
    <Box
      container="div"
      sx={{
        textAlign: "center",
        backgroundColor: "#FCFAEF",
        width: 420,
        height: "100vh",
      }}
    >
      <Box
        component="div"
        sx={{
          mt: 12,
          width: 330,
          height: 330,
          backgroundColor: "#d3504a",
          borderRadius: "50%",
          textAlign: "center",
          display: "inline-block",
        }}
      >
        <Box
          component="div"
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "#d3504a",
            borderRadius: "50%",
            border: 2,
            display: "inline-block",
            mt: 1,
            borderColor: "#A63636",
          }}
        >
          <Typography
            variant="h4"
            color="#FFFFFF"
            align="center"
            sx={{ mt: 10, mb: 10, fontWeight: "100" }}
          >
            LOGIN
          </Typography>
        </Box>
        <Box component="div" sx={{ position: "absolute", top: 250 }}>
          <Box
            component="div"
            sx={{
              width: 330,
              height: 450,
              backgroundColor: "#d3504a",
            }}
          >
            <Box
              component="div"
              sx={{
                width: 300,
                height: 450,
                backgroundColor: "#d3504a",
                border: 2,
                borderColor: "#A63636",
                display: "inline-block",
              }}
            >
              <Box
                component="div"
                onSubmit={handleSubmit}
                sx={{
                  width: 290,
                  height: 180,
                  backgroundColor: "#d3504a",
                  display: "inline-block",
                }}
              >
                <FormControl
                  component="fieldset"
                  variant="filled"
                  color="#ffff"
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    {/* 이메일 입력 */}
                    <Grid item xs={12}>
                      <AccountCircleIcon
                        sx={{ position: "absolute", top: 15, left: 15 }}
                      />
                      <TextField
                        id="email"
                        label="이메일"
                        type="email"
                        autoComplete="false"
                        autoFocus
                        variant="standard"
                        size="small"
                        InputLabelProps={{ style: { fontSize: 12 } }}
                        onChange={(e) => {
                          console.log(e.target.value);
                        }}
                      />
                    </Grid>
                    {/* 비밀번호 입력 */}
                    <Grid item xs={12}>
                      <LockIcon
                        sx={{ position: "absolute", top: 75, left: 15 }}
                      />
                      <TextField
                        id="standard-password-input"
                        label="비밀번호"
                        type="password"
                        autoComplete="false"
                        variant="standard"
                        size="small"
                        InputLabelProps={{ style: { fontSize: 12 } }}
                        onChange={(e) => {
                          console.log(e.target.value);
                        }}
                      />
                    </Grid>
                  </Grid>
                </FormControl>
              </Box>
              <Grid
                container
                spacing={2}
                sx={{
                  mb: 1,
                }}
              >
                <Grid button xs={6}>
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
                <Grid button xs={6}>
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
                  }}
                >
                  비밀번호 재설정
                </Button>
              </Box>
              <Box component="div" sx={{ mt: 2 }}>
                <Button
                  size="small"
                  variant="contained"
                  style={{
                    minWidth: "150px",
                    minHeight: "30px",
                    backgroundColor: "#FEE500",
                    color: "#3A1D1D",
                    fontWeight: "900",
                  }}
                >
                  카카오 로그인
                </Button>
              </Box>
              <Box
                component="div"
                border={2}
                sx={{
                  height: 134,
                  width: 240,
                  display: "inline-block",
                  mt: 4.3,
                  borderColor: "#A63636",
                }}
              >
                <Box
                  component="div"
                  borderTop={2}
                  sx={{
                    height: 80,
                    width: 236,
                    display: "inline-block",
                    mt: 2,
                    borderBlockColor: "#A63636",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      height: 18,
                      width: 18,
                      display: "inline-block",
                      mt: 2,
                      backgroundColor: "#737373",
                      borderRadius: 50,
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        height: 25,
                        width: 7,
                        display: "inline-block",
                        mt: 2,
                        backgroundColor: "#737373",
                        borderRadius: 50,
                      }}
                    ></Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            component="div"
            sx={{
              width: 70,
              display: "inline-block",
              backgroundColor: "#d3504a",
              borderLeft: 70,
              borderBottom: 60,
              borderBottomColor: "#d3504a",
              borderRight: 0,
              borderLeftColor: "#FCFAEF",
            }}
          ></Box>
          <Box
            component="div"
            border={2}
            sx={{
              height: 110,
              width: 100,
              display: "inline-block",
              backgroundColor: "#d3504a",
              borderColor: "#A63636",
            }}
          ></Box>
          <Box
            component="div"
            sx={{
              width: 70,
              display: "inline-block",
              backgroundColor: "#d3504a",
              borderLeft: 0,
              borderBottom: 60,
              borderBottomColor: "#d3504a",
              borderRight: 70,
              borderRightColor: "#FCFAEF",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
