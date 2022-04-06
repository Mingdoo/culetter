import {
  Box,
  IconButton,
  Input,
  InputLabel,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import StyledTextField from "../components/profile/StyledTextField";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useEffect, useState, useRef } from "react";
import Router from "next/router";

import { getUserInfo, editUserInfo } from "../components/apis/profile";
import ConfirmBtn from "../components/profile/ConfirmBtn";
import axios from "axios";
import PasswordCheck from "../components/profile/PasswordCheck";

import Header from "../components/Header";

export default function Test() {
  const [profileImage, setProfileImage] = useState();
  const [showProfileImage, setShowProfileImage] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const testConfirm = useRef(false);
  const [pwConfirm, setPwConfirm] = useState(false);
  const onClickUploadFile = function (e) {
    const file = e.target.files[0];
    setProfileImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setShowProfileImage(reader.result);
    };
  };
  const setUserInfo = async () => {
    try {
      const res = await getUserInfo();
      setName(res.data.name);
      setProfileImage(res.data.profileImage);
      setEmail(res.data.email);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (testConfirm.current) {
      setUserInfo();
    } else {
      testConfirm.current = true;
    }
  }, [pwConfirm]);

  const routeToPw = (e) => {
    e.preventDefault();
    Router.push("/password");
  };
  const onClickUpdate = function () {
    const userInfo = {
      name: name,
    };
    const formData = new FormData();
    formData.append(
      "info",
      new Blob([JSON.stringify(userInfo)], { type: "application/json" })
    );
    formData.append("profileImage", profileImage);
    console.log(formData.get("info"));
    axios
      .put("https://www.culetter.site/api/members", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMiIsImF1dGgiOiJST0xFXzEiLCJleHAiOjE2NDkyNjExNTd9.uEYVoYw4viX8Wdb5ts1gDRm7pbg0xncYac-d7iuGz0si0J_rh3WFnMm6clxKZ-_-jHwIpoaWhbHesbrHOa382A",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
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
          <Header title="마이페이지"></Header>

          <Box sx={{ width: "85%" }}>
            <Typography className="Batang" sx={{ fontSize: 18 }}>
              {!pwConfirm ? "비밀번호 확인" : "회원정보 수정"}
            </Typography>
            <Typography className="Batang" sx={{ fontSize: 12 }}>
              {!pwConfirm
                ? "회원 정보 수정을 위해서 비밀번호를 입력해주세요"
                : "프로필 사진, 비밀번호, 이름을 변경할 수 있습니다"}
            </Typography>
          </Box>

          <Box sx={{ width: "90%", mt: 2 }}>
            {!pwConfirm ? (
              <PasswordCheck
                pwConfirm={pwConfirm}
                setPwConfirm={setPwConfirm}
              ></PasswordCheck>
            ) : (
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#E2E0A5",
                    padding: 3,
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box></Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Box sx={{ mx: "auto", position: "relative" }}>
                          <Box
                            component="img"
                            src={
                              showProfileImage ? showProfileImage : profileImage
                            }
                            sx={{
                              width: 130,
                              height: 130,
                              // borderRadius: "70%",
                              // border: "1px solid black",
                            }}
                          ></Box>
                          <IconButton
                            sx={{ position: "absolute", bottom: -4, right: 0 }}
                          >
                            <InputLabel htmlFor="profileImg">
                              <AddAPhotoIcon></AddAPhotoIcon>
                            </InputLabel>
                          </IconButton>
                          <Input
                            id="profileImg"
                            sx={{ display: "none" }}
                            type="file"
                            accept="image/*"
                            onChange={onClickUploadFile}
                          ></Input>
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box>
                          <Grid container>
                            <Grid
                              item
                              xs={1}
                              sx={{ display: "flex", alignItems: "flex-end" }}
                            >
                              <AccountCircleIcon
                                sx={{ color: "white", mr: 1, my: 0.5 }}
                              />
                            </Grid>
                            <Grid item xs={11} sx={{ pl: 1 }}>
                              <StyledTextField
                                id="email"
                                type="email"
                                label="이메일"
                                value={email}
                                disabled={true}
                              ></StyledTextField>
                            </Grid>
                          </Grid>
                        </Box>
                        <Box>
                          <Grid container>
                            <Grid
                              item
                              xs={1}
                              sx={{ display: "flex", alignItems: "flex-end" }}
                            >
                              <BadgeIcon
                                sx={{ color: "white", mr: 1, my: 0.5 }}
                              />
                            </Grid>
                            <Grid item sx={{ pl: 1 }} xs={11}>
                              <StyledTextField
                                id="name"
                                type="name"
                                label="이름"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={false}
                              ></StyledTextField>
                            </Grid>
                          </Grid>
                        </Box>
                        <Box
                          sx={{
                            color: "#A63636",
                            height: "18px",
                            fontFamily: "Gowun Batang",
                            px: "35px",
                            fontSize: 11,
                            pt: "3px",
                          }}
                        >
                          <Box>errorMsg spot</Box>
                        </Box>
                        <Box>
                          <Grid container>
                            <Grid
                              item
                              xs={1}
                              sx={{ display: "flex", alignItems: "flex-end" }}
                            >
                              <LockIcon
                                sx={{ color: "white", mr: 1, my: 0.5 }}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={6}
                              sx={{
                                pl: 1,
                                display: "flex",
                                alignItems: "flex-end",
                              }}
                            >
                              <Button
                                variant="contained"
                                size="small"
                                sx={{
                                  backgroundColor: "#FCFAEF",
                                  color: "#3A1D1D",
                                  fontSize: "12px",
                                  fontFamily: "Gowun Dodum",
                                  "&:hover": {
                                    backgroundColor: "#FCFAEF",
                                  },
                                }}
                                onClick={routeToPw}
                              >
                                비밀번호 변경
                              </Button>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <ConfirmBtn onClick={onClickUpdate}></ConfirmBtn>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
