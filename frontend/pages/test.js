import {
  Box,
  IconButton,
  Input,
  InputLabel,
  Grid,
  Button,
} from "@mui/material";
import StyledTextField from "../components/profile/StyledTextField";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useEffect, useState } from "react";
import { getUserInfo, editUserInfo } from "../components/apis/profile";
import axios from "axios";
export default function test() {
  const [profileImage, setProfileImage] = useState();
  const [showProfileImage, setShowProfileImage] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
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
    setUserInfo();
  }, []);
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
                    src={showProfileImage ? showProfileImage : profileImage}
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
                      <BadgeIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
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
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
