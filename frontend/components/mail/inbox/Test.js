import React, { useState, useEffect, useContext } from "react";
import LetterContext from "../../../contexts/LetterContext";
import { Box, Typography } from "@mui/material";
import { colors, fonts } from "../../Variables";
import { emojis } from "../../letter/photocard/PhotoCard";
const Photocard = ({ data, preview, front, back }) => {
  const {
    image,
    background_color,
    content,
    created_date,
    stickers,
    fontsize,
    font_type,
    font_color,
    isFontBold,
  } = data;
  // const { bgcolor, stickersPos, fontsize, fontType, fontColor, isFontBold } =
  //   useContext(LetterContext);
  //something changed
  const [isClicked, setIsClicked] = useState(false);
  const [showFront, setShowFront] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const stickersPos = [
    {
      content: "ddddddddddddddd",
      disabled: false,
      idx: 999,
      position: { x: 18, y: -155 },
      type: "text",
    },
    {
      content: "ddddddddddddddd",
      disabled: false,
      idx: 998,
      position: { x: 0, y: 0 },
      type: "title",
    },
  ];
  const handleFrontClick = () => {
    setShowFront(true);
    setShowBack(true);
    setIsClicked(true);
  };

  const handleBackClick = () => {
    setIsClicked(false);
  };

  const width = preview ? 300 : 250;
  const height = preview ? 480 : 400;

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
          bgcolor: colors[0],
          // bgcolor: colors[background_color],
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
                fontSize: 11,
                fontFamily: fonts[1].fontfamily,
                color: colors[1],
                // fontFamily: fonts[font_type].fontfamily,
                // color: colors[font_color],
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
