import React, { useState, useEffect, useContext } from "react";
import LetterContext from "../../../contexts/LetterContext";
import { Box, Typography } from "@mui/material";
import { colors, fonts } from "../../Variables";
import { emojis } from "../photocard/PhotoCard";
const Photocard = (props) => {
  const { front, back, content } = props;
  const { bgcolor, stickersPos, fontsize, fontType, fontColor, isFontBold } =
    useContext(LetterContext);
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
      sx={{
        width: width,
        height: height,
        mt: "2rem",
        position: "relative",
        my: "1rem",
      }}
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
        sx={{
          bgcolor: colors[bgcolor],
          width: 300,
          height: 480,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          borderRadius: "2rem",
          position: "relative",
        }}
      >
        {stickersPos.map((Sticker) =>
          Sticker.type !== "sticker" ? (
            <Typography
              sx={{
                display: "inline",
                position: "absolute",
                transform: `translate(${-1 * Sticker.position.x}px, ${
                  Sticker.position.y
                }px) rotateY(-180deg)`,
                fontSize: fontsize,
                fontFamily: fonts[fontType].fontfamily,
                color: colors[fontColor],
                whiteSpace: "pre-line",
                fontWeight: isFontBold ? "bold" : "normal",
              }}
            >
              {Sticker.content}
            </Typography>
          ) : (
            <Box
              sx={{
                position: "absolute",
              }}
            >
              <Sticker.content.icon
                sx={{
                  color: Sticker.content.color,
                  transform: `translate(${-1 * Sticker.position.x}px, ${
                    Sticker.position.y
                  }px) rotateY(-180deg)`,
                }}
                fontSize="large"
              />
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default Photocard;
