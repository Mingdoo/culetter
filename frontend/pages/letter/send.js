import { Box, Typography, Button, Grid } from "@mui/material";
import ContentsContext from "../../contexts/ContentsContext";
import Header from "../../components/Header";
import Router from "next/router";

import LinkShare from "../../components/letter/send/LinkShare";
import KakaoShare from "../../components/letter/send/KakaoShare";
export default function Send() {
  // memberId가 있으면 카카오톡으로 알리기 아니면 링크 공유
  // const { memberId, setMemberId } = useContext(ContentsContext);
  const memberId = "temp";

  const toHome = () => Router.push("/");
  const toMailSent = () => Router.push("/mail/sent");

  const shareData = {
    title: "test",
    text: "test",
    url: "document.location.href",
  };

  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        width: 420,
        minHeight: "100vh",
        mx: "auto",
        bgcolor: "#FCFAEF",
      }}
    >
      <Header title="전송"></Header>
      <Box sx={{ textAlign: "center", fontFamily: "Gowun Batang" }}>
        편지를 전달할 준비를 마쳤습니다.<br></br>공유를 통해 다른 사람에게
        편지를 전달해주세요!
      </Box>
      {/* 가운데 위치시키는 방법은?? */}
      <Box component="div" sx={{ mt: "7rem" }}>
        {/* 편지 봉투 디자인 좀 바꾸자.... */}
        {/* 아이디가 있다면 카톡 공유 */}
        {memberId ? (
          <KakaoShare></KakaoShare>
        ) : (
          <Box>
            <LinkShare></LinkShare>
          </Box>
        )}
      </Box>
      <Grid
        container
        sx={{
          position: "absolute",
          bottom: 35,
          width: 1,
        }}
        component="div"
      >
        <Grid item xs={2}></Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              fontFamily: "Gowun Batang",
              fontSize: 18,
              color: "black",
            }}
            onClick={toMailSent}
          >
            보낸 편지
          </Button>
        </Grid>
        <Grid xs={2} item></Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{ fontFamily: "Gowun Batang", fontSize: 18, color: "black" }}
            onClick={toHome}
          >
            홈으로
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
