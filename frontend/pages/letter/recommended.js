import React, { useContext, useEffect, useState } from "react";
import ContentsContext from "../../contexts/ContentsContext";
import Header from "../../components/write/Header";
import Photocard from "../../components/recommend/Photocard";
import Imgupload from "../../components/recommend/Imgupload";
import Postcard from "../../components/recommend/Postcard";
import Normal from "../../components/recommend/Normal";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Checkbox, Grid, Typography } from "@mui/material";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";

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
  //   const { type } = useContext(ContentsContext);
  // const [type, setType] = useState("photocard");
  // const [type, setType] = useState("normal");
  const [type, setType] = useState("postcard");

  const [checked, setChecked] = useState(0);
  const [content, setContent] = useState(
    "이름을 알고 나면 이웃이 되고\n" +
      "색깔을 알고 나면 친구가 되고\n" +
      "모양까지 알고 나면 연인이 된다\n" +
      "아, 이것은 비밀\n"
  );

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
  ];

  const postcardList = [
    { imgsrc: "/img/postcardImg0.jpg" },
    { imgsrc: "/img/postcardImg1.jpg" },
    { imgsrc: "/img/postcardImg2.jpg" },
    { imgsrc: "/img/postcardImg3.jpg" },
  ];

  const [prevImg, setPrevImg] = useState("");

  const handleChange = (event) => {
    const curIndex = event.target.value;
    if (curIndex == checked) {
      setChecked(-1);
      setPrevImg("/img/prevImg.png");
    } else {
      setChecked(curIndex);
      setPrevImg(`/img/postcardImg${curIndex}.jpg`);
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

  const handleNextClick = (e) => {
    e.preventDefault();
  };
  const handlePrevClick = (e) => {
    e.preventDefault();
    Router.push("/letter/music");
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
      {type === "photocard" ? (
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
      ) : type === "normal" ? (
        <>
          <Header
            handlePrevClick={handlePrevClick}
            title="편지지 선택"
            handleNextClick={handleNextClick}
          />
          <Typography className="Batang" sx={{ textAlign: "center" }}>
            편지 내용에 어울리는 편지지를 선택해주세요
          </Typography>
        </>
      ) : (
        <>
          <Header
            handlePrevClick={handlePrevClick}
            title="엽서 선택"
            handleNextClick={handleNextClick}
          />
          <Typography className="Batang" sx={{ textAlign: "center" }}>
            편지 내용에 어울리는 엽서를 선택해주세요
          </Typography>
        </>
      )}
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: type === "postcard" ? null : "space-between",
          flexDirection: type === "normal" ? "row" : "column",
          flexWrap: type === "photocard" ? null : "wrap",
          alignItems: "center",
        }}
      >
        {type === "photocard" ? (
          photocardList.map((data, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
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
        ) : type === "normal" ? (
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
                  textAlign: "center",
                  width: "100%",
                  height: "4%",
                  color: checked == index ? "#dc816c " : "#f0c8bf",
                }}
              />
            </Box>
          ))
        ) : (
          <>
            <Box
              component="div"
              sx={{ display: "flex", flexWrap: "wrap", margin: "0rem 3rem" }}
            >
              {postcardList.map((data, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    margin: " 0rem 1rem",
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
                      color: checked == index ? "#dc816c " : "#ECDDBE",
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Typography
              component="div"
              className="Dodum"
              sx={{ mt: "1rem", mb: "0.5rem" }}
            >
              엽서 미리보기
            </Typography>
            <Box>
              <Box component="div" sx={{ position: "relative" }}>
                <img width="125px" height="200px" src={prevImg}></img>
                <img
                  width="200px"
                  height="200px"
                  src={"/img/postcardbg.png"}
                ></img>
              </Box>
            </Box>
            <Imgupload handlePrevImage={handlePrevImage} />
          </>
        )}
      </Box>
    </Box>
  );
};
export default Recommended;
