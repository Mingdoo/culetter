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
  const [type, setType] = useState("postcard");
  const [checked, setChecked] = useState(0);
  // const { content, setContent } = useState(
  //   "이름을 알고 나면 이웃이 되고\n" +
  //     "색깔을 알고 나면 친구가 되고\n" +
  //     "모양까지 알고 나면 연인이 된다\n" +
  //     "아, 이것은 비밀\n"
  // );

  const checkboxClasses = useCheckboxStyles();

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

  const handleChange = (event) => {
    const curIndex = event.target.value;
    if (curIndex == checked) {
      setChecked(-1);
    } else {
      setChecked(curIndex);
    }
  };

  useEffect(() => {
    console.log(checked);
  }, [checked]);

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
        <Header
          title="포토카드 선택"
          detail2="카드를 탭하면 카드가 뒤집힙니다"
        />
      ) : type === "normal" ? (
        <Header title="편지지 선택" />
      ) : (
        <Header
          title="엽서 선택"
          detail2="당신의 편지 내용에 어울리는 사진입니다"
        />
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
            <Box key={index} sx={{ display: "flex", flexDirection: "row" }}>
              <Photocard
                key={index}
                front={data.front}
                back={data.back}
              ></Photocard>
              <Checkbox
                value={index}
                onChange={handleChange}
                checked={checked == index}
                labelStyle={{ color: "white" }}
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
                value={index}
                onChange={handleChange}
                checked={checked == index}
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
                    style={{ color: "#f0c8bf" }}
                  />
                </Box>
              ))}
            </Box>
            <Typography component="div" sx={{ mt: "1rem", mb: "0.5rem" }}>
              미리보기
            </Typography>
            <Box>
              <Box component="div" sx={{ position: "relative" }}>
                <img
                  width="125px"
                  height="200px"
                  src={`/img/postcardImg${checked}.jpg`}
                ></img>
                <img
                  width="200px"
                  height="200px"
                  src={"/img/postcardbg.png"}
                ></img>
              </Box>
            </Box>
            <Imgupload />
          </>
        )}
      </Box>
    </Box>
  );
};
export default Recommended;
