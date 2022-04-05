import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import KakaoIcon from "./KakaoIcon";
export default function KakaoShare({ title, name }) {
  const sendKakaoMsg = () => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: title,
        description: `${name}님께서 보낸 편지가 도착했습니다.`,
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: "http://culetter.site/",
          webUrl: "http://culetter.site/",
        },
      },
      buttons: [
        {
          title: "CU;LETTER로 가기",
          link: {
            mobileWebUrl: "http://culetter.site/",
            webUrl: "http://culetter.site/",
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
