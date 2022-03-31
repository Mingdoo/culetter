import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Photocard from "../../components/recommend/Photocard";
import Imgupload from "../../components/recommend/Imgupload";
import Postcard from "../../components/recommend/Postcard";
import Normal from "../../components/recommend/Normal";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Checkbox, Grid, Typography } from "@mui/material";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import LetterContext from "../../contexts/LetterContext";

const useCheckboxStyles = makeStyles({
  overrides: {
    MuiCheckbox: {
      colorSecondary: {
        color: "#ffff",
        "&$checked": {
          color: "#000",
        },
      },
    },
  },
});

const Recommended = () => {
  const { mailType, content, title } = useContext(LetterContext);

  // const [type, setType] = useState("photocard");
  // const [type, setType] = useState("normal");
  // const [type, setType] = useState("postcard");

  const [checked, setChecked] = useState(0);
  // const [content, setContent] = useState(
  //   "이름을 알고 나면 이웃이 되고\n" +
  //     "색깔을 알고 나면 친구가 되고\n" +
  //     "모양까지 알고 나면 연인이 된다\n" +
  //     "아, 이것은 비밀\n"
  // );

  const photocardList = [
    { front: "/img/photocard_front1.jpg", back: "/img/photocard_back.png" },
    { front: "/img/photocard_front2.jpg", back: "/img/photocard_back.png" },
    { front: "/img/photocard_front3.jpg", back: "/img/photocard_back.png" },
    { front: "/img/photocard_front4.jpg", back: "/img/photocard_back.png" },
    { front: "/img/photocard_front5.jpg", back: "/img/photocard_back.png" },
  ];

  const letterList = [
    { imgsrc: "/img/letterImg1.png" },
    { imgsrc: "/img/letterImg2.png" },
    { imgsrc: "/img/letterImg3.png" },
    { imgsrc: "/img/letterImg4.png" },
    { imgsrc: "/img/letterImg5.png" },
    { imgsrc: "/img/letterImg6.png" },
    { imgsrc: "/img/letterImg7.png" },
    { imgsrc: "/img/letterImg8.png" },
    { imgsrc: "/img/letterImg9.png" },
    { imgsrc: "/img/letterImg10.png" },
  ];

  const postcardList = [
    { imgsrc: "/img/postcard1.jpg" },
    { imgsrc: "/img/postcard2.jpg" },
    { imgsrc: "/img/postcard3.jpg" },
    { imgsrc: "/img/postcard4.jpg" },
    { imgsrc: "/img/postcard5.jpg" },
    { imgsrc: "/img/postcard6.jpg" },
    { imgsrc: "/img/postcard7.jpg" },
    { imgsrc: "/img/postcard8.jpg" },
    { imgsrc: "/img/postcard9.jpg" },
    { imgsrc: "/img/postcard10.jpg" },
  ];

  const [prevImg, setPrevImg] = useState("");

  const handleChange = (event) => {
    const curIndex = event.target.value;
    if (curIndex === checked) {
      setChecked(-1);
      setPrevImg("/img/prevImg.png");
    } else {
      const index = parseInt(curIndex) + 1;
      setChecked(curIndex);
      setPrevImg(`/img/postcard${index}.jpg`);
    }
  };

  const handlePrevImage = (url) => {
    setPrevImg(url);
    setChecked(-1);
  };

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  useEffect(() => {
    setPrevImg("/img/prevImg.png");
  }, []);

  useEffect(() => {}, [prevImg]);

  useEffect(() => {
    if (mailType == "") {
      setTimeout(() => {
        Router.push("/letter/select");
      }, 3000);
    }
  }, []);

  const handleNextClick = (e) => {
    e.preventDefault();
    if (checked != -1) {
      Router.push("/letter/music");
    } else {
      toast.error("사진을 선택해주세요", {
        position: toast.POSITION.TOP_CENTER,
        role: "alert",
      });
    }
  };
  const handlePrevClick = (e) => {
    e.preventDefault();
    Router.push("/letter/type");
  };
  return (
    <Box
      component="div"
      sx={{
        width: 420,
        mx: "auto",
        bgcolor: "#FCFAEF",
      }}
    >
      {mailType === "PHOTOCARD" ? (
        <>
          <Header
            handlePrevClick={handlePrevClick}
            title="포토카드 선택"
            handleNextClick={handleNextClick}
          />
          <Typography className="Batang" sx={{ textAlign: "center" }}>
            카드를 탭하면 카드가 뒤집힙니다
          </Typography>
        </>
      ) : mailType === "GENERAL" ? (
        <>
          <Header
            handlePrevClick={handlePrevClick}
            title="편지지 선택"
            handleNextClick={handleNextClick}
          />
          <Typography
            className="Batang"
            sx={{ textAlign: "center", mb: "1rem" }}
          >
            편지 내용에 어울리는 편지지 입니다
          </Typography>
        </>
      ) : (
        <>
          <Header
            handlePrevClick={handlePrevClick}
            title="엽서 선택"
            handleNextClick={handleNextClick}
          />
          <Typography
            className="Batang"
            sx={{ textAlign: "center", mb: "1rem" }}
          >
            편지 내용에 어울리는 엽서사진 입니다
          </Typography>
        </>
      )}
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: mailType === "POSTCARD" ? null : "space-between",
          flexDirection: mailType === "GENERAL" ? "row" : "column",
          flexWrap: mailType === "PHOTOCARD" ? null : "wrap",
          alignItems: "center",
        }}
      >
        {mailType === "PHOTOCARD" ? (
          photocardList.map((data, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                // alignItems: "center",
              }}
            >
              <Photocard
                key={index}
                front={data.front}
                back={data.back}
                content={content}
              ></Photocard>
              <Checkbox
                value={index}
                onChange={handleChange}
                checked={checked == index}
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon />}
                style={{
                  height: "10%",
                  color: checked == index ? "#dc816c  " : "#ECDDBE",
                }}
              />
            </Box>
          ))
        ) : mailType === "GENERAL" ? (
          letterList.map((data, index) => (
            <Box
              component="div"
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: " 0rem 1rem",
              }}
            >
              <Normal imgsrc={data.imgsrc}></Normal>
              <Checkbox
                component="div"
                value={index}
                onChange={handleChange}
                checked={checked == index}
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleOutlineIcon />}
                style={{
                  display: "inline-block",
                  alignSelf: "center",
                  width: "25%",
                  height: "1%",
                  color: checked == index ? "#dc816c " : "#f0c8bf",
                }}
              />
            </Box>
          ))
        ) : mailType === "POSTCARD" ? (
          <>
            <Box
              component="div"
              sx={{
                height: "65vh",
                display: "flex",
                flexDirection: "column",
                overflow: "auto",
              }}
            >
              {postcardList.map((data, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    mb: "1rem",
                  }}
                >
                  <Postcard
                    component="div"
                    key={index}
                    imgsrc={data.imgsrc}
                  ></Postcard>
                  <Checkbox
                    value={index}
                    onChange={handleChange}
                    checked={checked == index}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleOutlineIcon />}
                    style={{
                      display: "inline-block",
                      width: "12%",
                      height: "20%",
                      color: checked == index ? "#dc816c " : "#ECDDBE",
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Typography
              component="div"
              className="Dodum"
              sx={{ mt: "2rem", mb: "1rem" }}
            >
              엽서 미리보기
            </Typography>
            <Box component="div" sx={{ position: "relative" }}>
              <img width="288px" height="180px" src={prevImg}></img>
              <Typography
                sx={{
                  position: "relative",
                  top: "-6rem",
                  left: "6rem",
                  fontSize: "1rem",
                }}
              >
                {prevImg === "/img/prevImg.png" ? "미리보기 이미지" : null}
              </Typography>
              <Box sx={{ position: "relative", mt: "-1.8rem" }}>
                <img
                  width="288px"
                  height="180px"
                  src={"/img/postcardbg.png"}
                ></img>
              </Box>
            </Box>
            <Imgupload handlePrevImage={handlePrevImage} />
          </>
        ) : (
          <Box
            sx={{
              height: "100vh",
              mt: "10rem",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Gowun Batang",
                fontWeight: "bolder",
                textAlign: "center",
              }}
            >
              형식이 선택되지 않았습니다
            </Typography>

            <Typography
              sx={{
                fontFamily: "Gowun Batang",
                fontWeight: "bolder",
                textAlign: "center",
              }}
            >
              형식 선택 페이지로 이동합니다
            </Typography>
          </Box>
        )}
      </Box>
      <ToastContainer />
    </Box>
  );
};
export default Recommended;
