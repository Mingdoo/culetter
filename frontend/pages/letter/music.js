import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  ListItemIcon,
  Checkbox,
  Grid,
} from "@mui/material";
import Header from "../../components/Header";
import SkipPreviousSharpIcon from "@mui/icons-material/SkipPreviousSharp";
import PlayCircleFilledSharpIcon from "@mui/icons-material/PlayCircleFilledSharp";
import SkipNextSharpIcon from "@mui/icons-material/SkipNextSharp";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import ContentsContext from "../../contexts/ContentsContext";
import "react-toastify/dist/ReactToastify.css";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  width: "75%",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#D3504A",
  },
}));

const music = () => {
  const [title, setTitle] = useState("라일락");
  const [singer, setSinger] = useState("아이유");
  const musicList = [
    { title: "내 맘을 볼 수 있나요", singer: "헤이즈" },
    { title: "라일락", singer: "아이유" },
    { title: "너였다면", singer: "정승환" },
    { title: "동화", singer: "멜로망스" },
    { title: "우리의 이야기", singer: "멜로망스" },
    { title: "미안해", singer: "양다일" },
    { title: "좋겠다", singer: "로이킴" },
    { title: "느낌", singer: "폴킴" },
    { title: "고백", singer: "양다일" },
    { title: "사랑인가 봐", singer: "멜로망스" },
    { title: "마음", singer: "폴킴" },
  ];
  const lpImgList = ["/img/lpImg1.png", "/img/lpImg2.png", "/img/lpImg3.png"];
  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState(musicList[0].title);
  const { setMusicSelected } = useContext(ContentsContext);

  const playerIcon = {
    fontSize: "2.3rem",
    margin: "1rem",
  };

  const handleToggle = (item) => () => {
    //선택 해제
    if (item.title === checked) {
      setChecked("");
      setTitle("제목");
      setSinger("가수");
      //선택
    } else {
      setChecked(item.title);
      setTitle(item.title);
      setSinger(item.singer);
    }
  };

  useEffect(() => {
    let index = Math.floor(Math.random() * 3);
    setIndex(index);
  }, []);

  useEffect(() => {
    if (checked !== "") {
      setMusicSelected(true);
    } else {
      setMusicSelected(false);
    }
  }, [checked]);

  useEffect(() => {
    setTitle(musicList[0].title);
    setSinger(musicList[0].singer);
  }, []);

  const handleNextClick = (e) => {
    e.preventDefault();
    if (checked != "") {
      Router.push("/letter/edit");
    } else {
      toast.error("노래를 선택해주세요", {
        position: toast.POSITION.TOP_CENTER,
        role: "alert",
      });
    }
  };

  const handlePrevClick = (e) => {
    e.preventDefault();
    Router.push("/letter/recommended");
  };

  return (
    <Box
      component="div"
      sx={{
        width: 420,
        height: "100vh",
        mx: "auto",
        bgcolor: "#FCFAEF",
      }}
    >
      <Header
        handlePrevClick={handlePrevClick}
        title="노래 선택"
        handleNextClick={handleNextClick}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          component="div"
          vatiant="p"
          sx={{
            fontSize: "1.5rem",
            mb: "0.5rem",
            mt: "0.5rem",
            fontFamily: "Gowun Dodum",
          }}
        >
          {title}
        </Typography>
        <Typography
          component="div"
          vatiant="p"
          sx={{ mb: "2rem", fontFamily: "Gowun Dodum" }}
        >
          {singer}
        </Typography>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            width="200px"
            height="200px"
            src={lpImgList[index]}
            style={{
              borderRadius: "50%",
              animation: "rotate_image 5s linear infinite",
              transformOrigin: " 50% 50%",
            }}
          ></img>
          <Box
            sx={{
              width: "50px",
              height: "50px",
              backgroundColor: "#333333",
              borderRadius: "50%",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              // top: "40%",
              // left: "35%",
            }}
          >
            <Box
              sx={{
                width: "20px",
                height: "20px",
                backgroundColor: "#FFFFFF",
                borderRadius: "50%",
                position: "absolute",
                justifyContent: "center",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "1.3rem" }}>
        <BorderLinearProgress variant="determinate" value={50} sx={{}} />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <SkipPreviousSharpIcon style={playerIcon} />
        <PlayCircleFilledSharpIcon style={playerIcon} />
        <SkipNextSharpIcon style={playerIcon} />
      </Box>
      <Typography
        sx={{
          fontSize: "13px",
          textAlign: "center",
          fontFamily: "Gowun Dodum",
        }}
      >
        추천된 곡들 중 하나를 선택하고 다음을 눌러주세요.
      </Typography>
      <Box
        sx={{
          width: "380px",
          height: "365px",
          backgroundColor: "#f0c8bf",
          margin: "auto",
          mt: "0.8rem",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            borderBottom: 2,
            borderColor: "#FCFAEF",
            padding: "0.3rem",
            fontFamily: "Gowun Dodum",
          }}
        >
          <Typography variant="p" sx={{ fontFamily: "Gowun Dodum" }}>
            추천 곡 리스트
          </Typography>
        </Box>
        <Box sx={{ width: "380px", height: "330px", overflow: "auto" }}>
          <List sx={{ width: "100%", fontFamily: "Gowun Dodum" }}>
            {musicList.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={handleToggle(item)} dense>
                  <ListItemIcon>
                    <Checkbox
                      value={[item.title, item.singer]}
                      edge="start"
                      disableRipple
                      checked={checked === item.title}
                      inputProps={{ "aria-labelledby": item }}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                      style={{ color: "#FCFAEF" }}
                    />
                  </ListItemIcon>
                  <Grid container>
                    <Grid item xs={8}>
                      <ListItemText
                        id={index}
                        primary={item.title}
                        primaryTypographyProps={{ className: "Dodum" }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <ListItemText
                        id={index}
                        primary={item.singer}
                        primaryTypographyProps={{ className: "Dodum" }}
                      />
                    </Grid>
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default music;
