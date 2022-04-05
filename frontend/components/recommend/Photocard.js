import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Photocard = (props) => {
  const { front, back, content } = props;
  //something changed
  const [isClicked, setIsClicked] = useState(false);
  const [showFront, setShowFront] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const handleFrontClick = () => {
    setShowFront(true);
    setShowBack(true);
    setIsClicked(true);
  };

  const handleBackClick = () => {
    setIsClicked(false);
  };

  const width = props.preview ? 300 : 250;
  const height = props.preview ? 480 : 400;

  return (
    <Box
      className="card"
      sx={{ width: width, height: height, mt: "2rem", position: "relative" }}
    >
      <Box
        component="div"
        className={
          "front face " + (isClicked && showFront ? "rotateFront" : null)
        }
        onClick={handleFrontClick}
      >
        <img
          width={width}
          height={height}
          src={front}
          style={{ borderRadius: "2rem" }}
        ></img>
      </Box>
      <Box
        component="div"
        className={"back face " + (isClicked && showBack ? "rotateBack" : null)}
        onClick={handleBackClick}
      >
        <img
          className="image"
          width={width}
          height={height}
          src={back}
          style={{ borderRadius: "2rem" }}
        ></img>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "0",
            margin: "1rem",
            mt: "2rem",
          }}
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

export default Photocard;
