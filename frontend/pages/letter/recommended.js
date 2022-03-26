import React, { useContext, useState } from "react";
import ContentsContext from "../../contexts/ContentsContext";
import Header from "../../components/write/Header";
import Photocard from "../../components/recommend/Photocard";
import Postcard from "../../components/recommend/postcard";
import Normal from "../../components/recommend/Normal";
import { Box, Checkbox, Grid } from "@mui/material";
const Recommended = () => {
  //   const { type } = useContext(ContentsContext);
  const [type, setType] = useState("normal");
  const [checked, setChecked] = useState(0);
  // const { content, setContent } = useState(
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
  ];

  const handleChange = (event) => {
    const curIndex = event.target.value;
    if (curIndex == checked) {
      setChecked(-1);
    } else {
      setChecked(curIndex);
    }
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
          display: type === "normal" ? "inline-block" : "flex",
          flexDirection: "column",
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
                iconStyle={{ fill: "white" }}
              />
            </Box>
          ))
        ) : type === "normal" ? (
          letterList.map((data, index) => (
            <Box
              component="div"
              key={index}
              sx={{
                display: "inline-block",
                flexDirection: "column",
                margin: "0rem 1.5rem 0rem 1.5rem",
              }}
            >
              <Grid container component="div">
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Normal imgsrc={data.imgsrc}></Normal>
                  <Checkbox
                    value={index}
                    onChange={handleChange}
                    checked={checked == index}
                    iconStyle={{ fill: "white" }}
                  />
                </Box>
              </Grid>
            </Box>
          ))
        ) : (
          <Postcard></Postcard>
        )}
      </Box>
    </Box>
  );
};
export default Recommended;
