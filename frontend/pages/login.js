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
    <>
      <Box container="div" sx={{ textAlign: "center", mt: 15 }}>
        <Box
          component="div"
          sx={{
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
          <Box component="div" sx={{ position: "absolute", top: 280 }}>
            <Box
              component="div"
              sx={{
                width: 330,
                height: 400,
                backgroundColor: "#d3504a",
              }}
            >
              <Box
                component="div"
                onSubmit={handleSubmit}
                sx={{
                  width: 300,
                  height: 400,
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
                    height: 200,
                    backgroundColor: "#d3504a",
                    display: "inline-block",
                  }}
                >
                  <FormControl
                    component="fieldset"
                    variant="filled"
                    color="#ffff"
                    sx={{ mt: 5 }}
                  >
                    <Grid container spacing={2}>
                      {/* 이메일 입력 */}
                      <Grid item xs={12}>
                        <AccountCircleIcon
                          sx={{ position: "absolute", top: 10, left: 15 }}
                        />
                        <TextField
                          id="email"
                          label="이메일"
                          type="email"
                          autoComplete="false"
                          autoFocus
                          variant="standard"
                          size="small"
                          InputProps={{
                            class: styles.input,
                          }}
                          InputLabelProps={{ style: { fontSize: 12 } }}
                          onChange={(e) => {
                            console.log(e.target.value);
                          }}
                        />
                      </Grid>
                      {/* 비밀번호 입력 */}
                      <Grid item xs={12}>
                        <LockIcon
                          sx={{ position: "absolute", top: 70, left: 15 }}
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
                <Grid container spacing={2}>
                  <Grid button xs={6}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        minWidth: "100px",
                        minHeight: "30px",
                        backgroundColor: "#E2E0A5",
                        color: "#3A1D1D",
                        fontWeight: "bolder",
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
                        fontWeight: "bolder",
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
                    }}
                  >
                    비밀번호 재설정
                  </Button>
                </Box>
                <Box component="div">
                  <Button
                    size="small"
                    variant="contained"
                    style={{
                      minWidth: "150px",
                      minHeight: "30px",
                      backgroundColor: "#FEE500",
                      color: "#3A1D1D",
                      fontWeight: "bolder",
                    }}
                  >
                    카카오 로그인
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
