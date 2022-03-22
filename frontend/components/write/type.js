import React, { useState } from "react";
import Link from "next/link";
import { Box } from "@mui/material";
const link = ["photocard", "normal", "postcard"];
const type = (props) => {
  const { text, index, describe, imgsrc, href } = props;
  return (
    <Link href={`/${href}`}>
      <Box
        className="Dodum"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          fontSize: 20,
          width: "350px",
          height: "230px",
          backgroundColor: "#FFFFFF",
          boxShadow: "5px 2px 2px rgba(0, 0, 0, 0.25)",
          borderRadius: "0.5rem",
          alignItems: "center",
          mb: index === 2 ? "0rem" : "1.2rem",
          mt: index === 0 ? "1.5rem" : "0rem",
        }}
      >
        <Box
          component="div"
          sx={{
            // width: "140px",
            // height: "160px",
            // mt: 2.5,
            // mr: index === 2 ? "2.2rem" : "0rem",
            borderRadius: index === 2 ? "1rem" : "0rem",
          }}
        >
          <img width="180px" height="160px" src={imgsrc} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "5rem",
            alignItems: "center",
          }}
        >
          <Box>{text}</Box>
          <Box sx={{ fontSize: "0.6rem", textAlign: "center", mt: "1rem" }}>
            {describe}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default type;
