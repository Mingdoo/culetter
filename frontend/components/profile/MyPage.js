import {
  Box,
  Button,
  IconButton,
  Input,
  InputLabel,
  TextField,
  Grid,
} from "@mui/material";
import nomailbox from "../../public/img/nomailbox.PNG";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useState, useRef, useCallback, useEffect } from "react";
import PWCheckField from "./PWCheckField";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CropEasy from "../crop/CropEasy";

export default function MyPage() {
  const res = {
    email: "ssafy@ssafy.com",
    name: "ssafy",
    profileImage: nomailbox.src,
  };

  const [imgFile, setImgFile] = useState(null);
  const [name, setName] = useState(res.name);
  const [email, setEmail] = useState(res.email);
  const [openCrop, setOpenCrop] = useState(false);

  const handleChangeFile = (event) => {
    // lastModified, name, size, type, webkitrelativepath
    // console.log(event.target.files[0]);
    // setImgFile(event.target.files[0]);
    // 1. 파일이 있다면 확인 & 파일 크기 확인하고 너무 크면 거절!

    // 2. 파일 크기 적당하면 크롭~
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result);
        // 임시
        res.profileImage = imgFile;
        setOpenCrop(true);
      };
    }
  };

  const nameValidationCheck = (e) => {
    setName(e.target.value);
    const namePattern = /^[가-힣]+$/;

    // 한글 적어도 console.log 뜸
    // if (!namePattern.test(e.target.value)) {
    //   console.log("이름이 한글이 아님");
    // }
  };

  const emailValidationCheck = (e) => {
    setEmail(e.target.value);
    const emailPattern =
      /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!emailPattern.test(email)) {
      console.log("형식에 안 맞음");
    }
  };

  return (
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
        <Box>
          {/* <CropDialog></CropDialog> */}
          {/* cropper를 modal에 넣어야 함! */}
          {/* <Cropper
          image={imgFile}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        /> */}
          {/* 프로필 이미지 */}
          <Box sx={{ display: "flex", mb: 3 }}>
            <Box sx={{ mx: "auto", position: "relative" }}>
              <Box
                component="img"
                src={imgFile ? imgFile : res.profileImage}
                sx={{
                  width: 110,
                  height: 110,
                  borderRadius: "70%",
                  border: "1px solid black",
                }}
              ></Box>
              <IconButton sx={{ position: "absolute", bottom: -4, right: 0 }}>
                <InputLabel htmlFor="profileImg">
                  <AddAPhotoIcon></AddAPhotoIcon>
                </InputLabel>
              </IconButton>
              <Input
                id="profileImg"
                sx={{ display: "none" }}
                type="file"
                accept="image/*"
                onChange={handleChangeFile}
              ></Input>
            </Box>
            {/* <Box component="img" src={imgFile}></Box> */}
          </Box>
          {/* 이메일 textfield */}
          <Grid container>
            <Grid item xs={1} sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircleIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
            </Grid>
            <Grid item xs={11} sx={{ pl: 1 }}>
              <TextField
                id="email"
                label="이메일"
                type="email"
                autoComplete="off"
                variant="standard"
                size="small"
                value={email}
                onChange={(e) => emailValidationCheck(e)}
                InputLabelProps={{
                  style: { fontFamily: "Gowun Batang" },
                }}
                sx={{ width: 1 }}
              />
            </Grid>
          </Grid>
          {/* 비밀번호 textfield */}
          <PWCheckField withBtn={true}></PWCheckField>
          {/* 이름 textfield */}
          <Grid container>
            <Grid item xs={1} sx={{ display: "flex", alignItems: "flex-end" }}>
              <BadgeIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
            </Grid>
            <Grid sx={{ pl: 1 }} xs={11}>
              <TextField
                id="name"
                label="이름"
                type="name"
                autoComplete="off"
                variant="standard"
                size="small"
                value={name}
                onChange={(e) => nameValidationCheck(e)}
                InputLabelProps={{
                  style: { fontFamily: "Gowun Batang" },
                }}
                sx={{ width: 1 }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          size="small"
          sx={{
            minWidth: "200px",
            minHeight: "30px",
            backgroundColor: "#E2E0A5",
            color: "#3A1D1D",
            marginTop: "1rem",
            fontFamily: "Gowun Batang",
          }}
        >
          확인
        </Button>
      </Box>
      {/* {openCrop ? <CropEasy></CropEasy> : null} */}
    </Box>
  );
}
