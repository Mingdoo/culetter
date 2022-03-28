import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const photocard = (props) => {
  const { front, back, content } = props;

  const [isClicked, setIsClicked] = useState(false);

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
            sx={{
              textAlign: "center",
              fontSize: "1rem",
              whiteSpace: "pre-wrap",
            }}
          >
            {content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default photocard;
