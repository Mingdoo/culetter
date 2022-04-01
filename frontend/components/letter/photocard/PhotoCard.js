import React, { useEffect, useState, useContext } from "react";
import Draggable from "react-draggable";
import { Box, Button, Typography } from "@mui/material";
import { landingBoxStyle } from "../../../pages/index";
import Emojipalette from "./EmojiPalette";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CircleIcon from "@mui/icons-material/Circle";
import StarBorderPurple500RoundedIcon from "@mui/icons-material/StarBorderPurple500Rounded";
import LocalFloristRoundedIcon from "@mui/icons-material/LocalFloristRounded";
import FilterVintageRoundedIcon from "@mui/icons-material/FilterVintageRounded";
import Palette from "../Palette";
import { colors } from "../../../components/Variables";
import LetterContext from "../../../contexts/LetterContext";

function PhotoCard({ props }) {
  const { setStickersPos } = useContext(LetterContext);
  const emojis = [
    { icon: StarRoundedIcon, color: "#FFD93D" },
    { icon: FavoriteRoundedIcon, color: "#FD5D5D" },
    { icon: DarkModeRoundedIcon, color: "#FFD93D" },
    { icon: FavoriteBorderIcon, color: "#E4AEC5" },
    { icon: EmojiEmotionsIcon, color: "#C84B31" },
    { icon: QuestionMarkRoundedIcon, color: "#700B97" },
    { icon: SentimentVeryDissatisfiedIcon, color: "#A12568" },
    { icon: CircleIcon, color: "#FF8080" },
    { icon: StarBorderPurple500RoundedIcon, color: "#FFD93D" },
    { icon: LocalFloristRoundedIcon, color: "#4D96FF" },
    { icon: FilterVintageRoundedIcon, color: "#83142C" },
  ];

  const [count, setCount] = useState(0);
  const [stickers, updateStickers] = useState([]);
  const [isfixed, setIsfixed] = useState(false);
  const [text, setText] = useState({});
  const [backgroundColor, setBackgroundColor] = useState(1);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const uploadedText = {
      idx: 999,
      type: "text",
      content: props.text,
      position: { x: 0, y: 0 },
      disabled: false,
    };
    setText(uploadedText);
    updateStickers([uploadedText]);
  }, []);

  useEffect(() => {
    const boolean = stickers.length
      ? !stickers.some((sticker) => {
          return sticker.disabled === false;
        })
      : true;
    setIsMoving(boolean && props.showDots);
  }, [stickers, props.showDots]);

  const trackPosition = (obj, data) => {
    const updatedSticker = {
      idx: obj.idx,
      type: obj.type,
      content: obj.content,
      position: { x: data.x, y: data.y },
      disabled: obj.disabled,
    };
    const updatedStickers = stickers.map((sticker) =>
      sticker.idx === obj.idx ? updatedSticker : sticker,
    );

    updateStickers(updatedStickers);
  };

  const handleClickEmoji = (idx) => {
    updateStickers((old) => [
      ...old,
      {
        idx: count,
        type: "sticker",
        content: emojis[idx],
        position: { x: 0, y: 0 },
        disabled: false,
      },
    ]);
    setCount(count + 1);
  };

  return (
    <Box sx={{ ...landingBoxStyle, width: 420, justifyContent: "start" }}>
      <Box
        sx={{
          position: "relative",
          width: 420,
          display: "flex",
          flexDirection: "column",

          // justifyContent: "start",
          // alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 480,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#ffffff",
            my: "1rem",
            alignSelf: "center",
            borderRadius: 5,
            bgcolor: colors[backgroundColor],
            position: "relative",
          }}
        >
          <Draggable
            axis="both"
            bounds="parent"
            defaultPosition={{ x: 0, y: 0 }}
            onDrag={(e, data) => trackPosition("text", data)}
            disabled={isfixed}
            key={999}
          >
            <Typography
              sx={{
                border: !isfixed ? "1px dashed black" : "1px hidden black",
                whiteSpace: "pre-line",
                fontFamily: props.fontFamily,
                color: props.color,
                textAlign: props.textAlign,
                fontSize: props.fontSize,
                fontWeight: props.bold ? "bold" : "normal",
                "&:hover": {
                  cursor: !isfixed ? "grab" : "auto",
                },
              }}
              id="text"
            >
              {text.content}
            </Typography>
          </Draggable>

          {stickers.map((Sticker, idx) =>
            Sticker.type === "sticker" ? (
              <Draggable
                axis="both"
                bounds="parent"
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                onDrag={(e, data) => trackPosition(Sticker, data)}
                disabled={Sticker.disabled}
                key={idx}
              >
                <Box className="handle">
                  <Sticker.content.icon
                    sx={{
                      color: Sticker.content.color,
                      position: "absolute",
                      border: !Sticker.disabled
                        ? "1px dashed black"
                        : "1px hidden black",
                      "&:hover": {
                        cursor: !Sticker.disabled ? "grab" : "no-drop",
                      },
                    }}
                    fontSize="large"
                  />
                </Box>
              </Draggable>
            ) : null,
          )}
        </Box>
        <Box>
          <Emojipalette
            handleClickEmoji={handleClickEmoji}
            emojis={emojis}
            isColorOpen={isMoving}
          />
          <Palette
            colors={colors}
            isColorOpen={isMoving}
            clickedColor={backgroundColor}
            setClickedColor={setBackgroundColor}
            size="half"
          />
        </Box>

        {!stickers.every((sticker) => {
          return sticker.disabled;
        }) ? (
          <Button
            onClick={(e) => {
              e.preventDefault();
              setIsfixed(true);
              updateStickers((stickers) =>
                stickers.map((sticker) => {
                  return { ...sticker, disabled: true };
                }),
              );
              setStickersPos(stickers);
            }}
            variant="contained"
            sx={{
              alignSelf: "center",
              bgcolor: "#D3504A",
              "&:hover": {
                bgcolor: "#FF8176",
              },
              fontFamily: "Gowun Batang",
            }}
          >
            확인
          </Button>
        ) : null}
      </Box>
    </Box>
  );
}

export default PhotoCard;
