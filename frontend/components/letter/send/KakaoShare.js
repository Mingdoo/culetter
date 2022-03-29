import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import KakaoIcon from "./KakaoIcon";
export default function KakaoShare() {
  useEffect(() => {
    // 내 js 키 숨기기.
    Kakao.init("3a6df59af8e42ef7045cfd0b2303169c");
  }, []);

  const sendKakaoMsg = () => {
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
  return (
    <Box sx={{ width: 1, display: "flex", justifyContent: "center", mt: 1 }}>
      <Button
        sx={{
          width: "240px",
          backgroundColor: "#FEE500",
          color: "black",
          "&:hover": {
            backgroundColor: "#FEE500",
          },
          fontFamily: "Gowun Batang",
        }}
        onClick={sendKakaoMsg}
        startIcon={<KakaoIcon />}
      >
        카카오톡으로 전하기
      </Button>
    </Box>
  );
}
