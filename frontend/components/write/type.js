import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import postcardImg from "../../public/imgs/postcardImg.png";
const type = (props) => {
  const { text, index } = props;
  return (
    <Box
      className="Dodum"
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        fontSize: 26,
        width: "320px",
        height: "200px",
        backgroundColor: "#FFFFFF",
        boxShadow: "5px 2px 2px rgba(0, 0, 0, 0.25)",
        mb: index === 2 ? "0rem" : "1.2rem",
        mt: index === 0 ? "1rem" : "0rem",
      }}
    >
      <Box
        component="div"
        sx={{
          width: "110px",
          height: "160px",
          backgroundColor: "red",
          mt: 2.5,
        }}
      >
        <Image
          src="../public/imgs/postcardImg.png"
          alt="postcard"
          width={80}
          height={160}
        ></Image>
      </Box>
      {text}
    </Box>
  );
};

export default type;
