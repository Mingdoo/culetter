import { Box, Typography, Button, TextField, Grid } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import ContentsContext from "../../contexts/ContentsContext";
import ShareIcon from "@mui/icons-material/Share";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Test from "../../components/letter/send/test";
import Header from "../../components/Header";
import Router from "next/router";

export default function Send() {
  // memberId가 있으면 카카오톡으로 알리기 아니면 링크 공유
  // const { memberId, setMemberId } = useContext(ContentsContext);
  const memberId = "temp";
  const Explain = useEffect(() => {
    // 내 js 키 숨기기.
    console.log(window.location.href);
    // Kakao.init("3a6df59af8e42ef7045cfd0b2303169c");
  }, []);

  const toHome = () => Router.push("/");
  const toMailSent = () => Router.push("/mail/sent");

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
        position: "relative",
        width: 420,
        minHeight: "100vh",
        mx: "auto",
        bgcolor: "#FCFAEF",
      }}
    >
      <Header title="전송"></Header>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "0.5rem",
          fontFamily: "Gowun Batang",
        }}
      >
        편지를 전달할 준비를 마쳤습니다.
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Gowun Batang",
        }}
      >
        공유를 통해 다른 사람에게 편지를 전달해주세요!
      </Typography>
      {/* 가운데 위치시키는 방법은?? */}

      <Box component="div" sx={{ mt: "7rem" }}>
        {/* 편지 봉투 디자인 좀 바꾸자.... */}

        {/* 카톡 공유 */}
        {memberId ? (
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
        ) : (
          <Box>
            <Grid container sx={{ px: 2 }}>
              <Grid item xs={9}>
                <TextField
                  disabled
                  id="linkShare"
                  defaultValue={test}
                  variant="standard"
                  sx={{ color: "black", width: "100%" }}
                />
              </Grid>
              <Grid item xs={1}>
                <Button
                  sx={{ color: "black", fontFamily: "Gowun Batang" }}
                  onClick={copyData}
                >
                  복사
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button
                  sx={{ color: "black", fontFamily: "Gowun Batang", pl: 3 }}
                  onClick={shareMobile}
                >
                  공유
                </Button>
              </Grid>
            </Grid>
            <ToastContainer
              toastStyle={{ backgroundColor: "#12121290", color: "white" }}
            />
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
        <Grid xs={2}></Grid>
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
