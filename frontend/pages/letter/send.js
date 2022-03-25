import { Box, Typography, Button, TextField, Grid } from "@mui/material";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

import Letter from "../../components/mail/sent/Letter";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Test from "../../components/letter/send/test";

const SuccessSlider = styled(Button)(({ theme }) => ({
  color: "#00000080",
  backgroundColor: "#FEE500",
  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    "&.Mui-active": {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}));

export default function Send() {
  const Explain = useEffect(() => {
    // 내 js 키 숨기기.
    console.log(window.location.href);
    Kakao.init("3a6df59af8e42ef7045cfd0b2303169c");
  }, []);

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "[형식] 편지 제목",
        description: "내용!",
        imageUrl: "https://ibb.co/5KX4zYT",
        link: {
          mobileWebUrl: "http://localhost:3000/letter/send",
          webUrl: "https://developers.kakao.com",
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: window.location.href,
            // 내 앱 플랫폼 주소로만 보내주는 듯!!!!!!!!!!!!!!!!!!!!!!
            webUrl: "http://localhost:3000/test",
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: "https://developers.kakao.com",
          },
        },
      ],
    });
  };
  const shareData = {
    title: "test",
    text: "test",
    url: "document.location.href",
  };
  const shareMobile = async () => {
    if (navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);

        console.log("successfully shared");
      } catch (err) {
        console.error("Something went wrong sharing the blog", error);
      }
    } else {
      console.log("cant share");
    }
  };
  const [test, setTest] = useState("http://localhost:3000/letter/send");
  const copyData = async () => {
    try {
      await navigator.clipboard.writeText(test);
      console.log("copied!");
      toast("복사성공", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(`copy failed ${error}`);
    }
  };
  return (
    <Box
      component="div"
      sx={{
        width: 420,
        minHeight: "100vh",
        mx: "auto",
        bgcolor: "#FCFAEF",
      }}
    >
      <Box
        component="span"
        className="Dodum"
        sx={{
          fontSize: 24,
          display: "flex",
          justifyContent: "center",
          pt: "1rem",
        }}
      >
        전송
      </Box>
      <Typography
        className="Batang"
        sx={{ display: "flex", justifyContent: "center", mt: "0.5rem" }}
      >
        편지를 전달할 준비를 마쳤습니다.
      </Typography>
      <Typography
        className="Batang"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        공유를 통해 다른 사람에게 편지를 전달해주세요!
      </Typography>
      {/* 가운데 위치시키는 방법은?? */}
      <Box component="div" sx={{ mt: "7rem" }}>
        {/* 편지 봉투 디자인 좀 바꾸자.... */}
        {/* letter 쓸거면 click 막아야 함 */}
        <Letter width={300} date=""></Letter>
        <Box
          sx={{ width: 1, display: "flex", justifyContent: "center", mt: 1 }}
        >
          <Button
            sx={{ backgroundColor: "#FEE500", color: "black" }}
            onClick={shareKakao}
            startIcon={<Test />}
          >
            카카오톡으로 알리기
          </Button>
        </Box>
        <Grid container>
          <Grid item xs={8}>
            <TextField
              disabled
              id="standard-disabled"
              // label="Disabled"
              defaultValue={test}
              variant="outlined"
              sx={{ color: "black", width: "100%" }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              startIcon={<ContentCopyRoundedIcon />}
              onClick={copyData}
            ></Button>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={shareMobile}>공유</Button>
          </Grid>
        </Grid>
        <ToastContainer
          toastStyle={{ backgroundColor: "#12121290", color: "white" }}
        />
        {/* <SuccessSlider onClick={shareMobile}>공유</SuccessSlider> */}
      </Box>
    </Box>
  );
}
