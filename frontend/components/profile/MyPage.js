import { Box, IconButton, Input, InputLabel, Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import nomailbox from "../../public/img/nomailbox.PNG";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useState } from "react";
import PWCheckField from "./PWCheckField";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import CropEasy from "../crop/CropEasy";
import ConfirmBtn from "./ConfirmBtn";
import StyledTextField from "./StyledTextField";

export default function MyPage() {
  const res = {
    email: "ssafy@ssafy.com",
    name: "ssafy",
    profileImage: nomailbox.src,
  };

  const [open, setOpen] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);
  const [name, setName] = useState(res.name);
  const [email, setEmail] = useState(res.email);
  const [nameErrorMsg, setNameErrorMsg] = useState(false);

  const handleChangePhoto = (event) => {
    // lastModified, name, size, type, webkitrelativepath
    // console.log(event.target.files[0]);
    // setPhotoURL(event.target.files[0]);
    // 1. 파일이 있다면 확인 & 파일 크기 확인하고 너무 크면 거절!

    // 2. 파일 크기 적당하면 크롭~
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhotoURL(reader.result);
        // 임시
        setOpen(true);
      };
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const nameValidationCheck = (e) => {
    setName(e.target.value);
    const namePattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    // 한글 적어도 console.log 뜸
    if (!namePattern.test(e.target.value)) {
      setNameErrorMsg("*한글만 입력 가능합니다.");
    } else {
      setNameErrorMsg("");
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
          {/* 프로필 이미지 */}
          <Box sx={{ display: "flex", mb: 3 }}>
            <Box sx={{ mx: "auto", position: "relative" }}>
              <Box
                component="img"
                src={photoURL ? photoURL : res.profileImage}
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
                onChange={handleChangePhoto}
              ></Input>
            </Box>
          </Box>

          {/* 모달 */}
          <Dialog
            onClose={handleClose}
            aria-labelledby="cropDialog"
            open={open}
          >
            <DialogTitle
              id="cropDialog"
              onClose={handleClose}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              프로필 사진 변경
              <IconButton aria-label="Close" onClick={handleClose}>
                <CloseIcon></CloseIcon>
              </IconButton>
            </DialogTitle>
            <CropEasy
              photoURL={photoURL}
              setOpen={setOpen}
              setPhotoURL={setPhotoURL}
            ></CropEasy>
          </Dialog>
          {/* 모달 끝 */}

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* 이메일 textfield */}
            <Box sx={{ mt: 1 }}>
              <Grid container>
                <Grid
                  item
                  xs={1}
                  sx={{ display: "flex", alignItems: "flex-end" }}
                >
                  <AccountCircleIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
                </Grid>
                <Grid item xs={11} sx={{ pl: 1 }}>
                  <StyledTextField
                    id="email"
                    label="이메일"
                    value={email}
                    disabled={true}
                  ></StyledTextField>
                </Grid>
              </Grid>
            </Box>
            {/* 비밀번호 textfield */}
            {/* 비밀번호 숫자 계산해서 넘기던가 */}
            <Box sx={{ mt: 1 }}>
              <PWCheckField
                withBtn={true}
                pwInput="********"
                labelValue="비밀번호"
              ></PWCheckField>
            </Box>
            {/* 이름 textfield */}
            <Box sx={{ mt: 1 }}>
              <Grid container>
                <Grid
                  item
                  xs={1}
                  sx={{ display: "flex", alignItems: "flex-end" }}
                >
                  <BadgeIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
                </Grid>
                <Grid sx={{ pl: 1 }} xs={11}>
                  <StyledTextField
                    id="name"
                    label="이름"
                    value={name}
                    disabled={false}
                    onChange={(e) => nameValidationCheck(e)}
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
              <Box> {nameErrorMsg}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <ConfirmBtn></ConfirmBtn>
    </Box>
  );
}
