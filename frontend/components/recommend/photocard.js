import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const photocard = (props) => {
  const { front, back } = props;
  const { content, setContent } = useState(
    "이름을 알고 나면 이웃이 되고\n" +
      "색깔을 알고 나면 친구가 되고\n" +
      "모양까지 알고 나면 연인이 된다\n" +
      "아, 이것은 비밀\n"
  );
  console.log(content);
  return (
    <Box
      className="card"
      sx={{ width: "250px", height: "400px", mt: "2rem", position: "relative" }}
    >
      <Box component="div" className="front face">
        <img
          width="250px"
          height="400px"
          src={front}
          style={{ borderRadius: "2rem" }}
        ></img>
      </Box>
      <Box component="div" className="back face">
        <img
          className="image"
          width="250px"
          height="400px"
          src={back}
          style={{ borderRadius: "2rem" }}
        ></img>
        <Box
          sx={{ position: "absolute", top: "0", margin: "1rem", mt: "2rem" }}
        >
          <Typography
            className="innerText Dodum"
            sx={{ textAlign: "center", fontSize: "1rem" }}
          >
            {content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default photocard;
