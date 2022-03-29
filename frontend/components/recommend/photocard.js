import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Photocard = (props) => {
  const { front, back, content } = props;

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

  useEffect(() => {
    console.log(isClicked);
  }, [isClicked]);

  return (
    <Box
      className="card"
      sx={{ width: "250px", height: "400px", mt: "2rem", position: "relative" }}
    >
      <Box
        component="div"
        className={
          "front face " + (isClicked && showFront ? "rotateFront" : null)
        }
        onClick={handleFrontClick}
      >
        <img
          width="250px"
          height="400px"
          src={front}
          style={{ borderRadius: "2rem" }}
        ></img>
      </Box>
      <Box
        component="div"
        className={"back face " + (isClicked && showBack ? "rotateBack" : null)}
      >
        <img
          className="image"
          width="250px"
          height="400px"
          src={back}
          style={{ borderRadius: "2rem" }}
          onClick={handleBackClick}
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

export default Photocard;
