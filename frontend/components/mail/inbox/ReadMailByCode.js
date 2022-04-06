import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import Router from "next/router";

import { getMailByCode, saveRecvMail } from "../../apis/letter";
import Player from "../../letter/preview/Player";
import { fonts, colors } from "../../Variables";
import { emojis as Emojis } from "../../letter/photocard/PhotoCard";
import Photocard from "../../letter/preview/Photocard";
import { motion } from "framer-motion";

export default function ReadMailByCode({ code }) {
  const [data, setData] = useState([]);
  const [stickersPos, setStickersPos] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);

  const fetchMail = async (code) => {
    try {
      const res = await getMailByCode(code);
      setData(res.data);
      // console.log(JSON.parse(res.data.stickers));
      setStickersPos(JSON.parse(res.data.stickers));
    } catch (error) {
      console.log(error);
    }
  };

  const saveLetter = async () => {
    try {
      const res = await saveRecvMail(code);
      Router.push("/mail/inbox");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(data);
    console.log(data.style_url);
    console.log(data.content);
    console.log(data.style_url);
    console.log(data.music_url);
  }, [data]);

  function renderElement(Sticker) {
    const Emoji = Emojis[Sticker.content.idx];
    return (
      <Emoji.icon
        sx={{
          color: Sticker.content.color,
          transform: `translate(${Sticker.position.x}px, ${Sticker.position.y}px)`,
        }}
        fontSize="large"
      />
    );
  }

  useEffect(() => {
    fetchMail(code);
  }, []);

  // useEffect(() => console.log("stickersPos", stickersPos), [stickersPos]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 1,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 2,
          transition: {
            delay: 0.5,
          },
        },
      }}
      layoutId="underline"
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {data.mail_type === "PHOTOCARD" ? (
          <Box
            sx={{
              width: 300,
              height: 480,
              mt: "2rem",
              position: "relative",
              my: "1rem",
            }}
          >
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <Box
                component="div"
                onClick={(e) => setIsFlipped((prev) => !prev)}
              >
                <img
                  width={300}
                  height={480}
                  src={data.style_url}
                  style={{ borderRadius: "2rem" }}
                ></img>
              </Box>
              <Box
                component="div"
                onClick={(e) => setIsFlipped((prev) => !prev)}
                sx={{
                  bgcolor: colors[data.background_color],
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
                        transform: `translate(${Sticker.position.x}px, ${Sticker.position.y}px)`,
                        fontSize: data.font_size,
                        fontFamily: fonts[parseInt(data.font_type)].fontfamily,
                        color: colors[data.font_color],
                        whiteSpace: "pre-line",
                        fontWeight: data.is_font_bold ? "bold" : "normal",
                      }}
                    >
                      {Sticker.content}
                    </Typography>
                  ) : (
                    <Box sx={{ position: "absolute" }}>
                      {renderElement(Sticker)}
                    </Box>
                  )
                )}
              </Box>
            </ReactCardFlip>
          </Box>
        ) : null}
        {data.mail_type === "POSTCARD" ? (
          <Box
            sx={{
              position: "relative",
              width: 420,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ border: "1px solid" }}>
              <img
                src={data.style_url}
                width={418}
                height={200}
                style={{ display: "block" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Typography
                  className="text-area"
                  component="div"
                  sx={{
                    fontFamily: fonts[parseInt(data.font_type)].fontfamily,
                    color: colors[data.font_color],
                    textAlign: data.font_order,
                    fontSize: data.font_size,
                    maxHeight: 280,
                    minHeight: 280,
                    minWidth: "100%",
                    px: "2rem",
                    py: "1rem",
                    overflowY: "auto",
                    whiteSpace: "pre-line",
                    textDecoration: `${colors[data.underline_color]} underline`,
                    textUnderlineOffset: 4,
                    bgcolor: colors[data.background_color],
                  }}
                >
                  {data.title}
                  <br />
                  {data.content}
                </Typography>
              </Box>
            </Box>
          </Box>
        ) : (
          <></>
        )}
        {data.mail_type === "GENERAL" ? (
          <Box
            sx={{
              position: "relative",
              width: 420,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img
              src={data.style_url}
              width={420}
              style={{ position: "absolute" }}
            />
            <Box
              sx={{
                position: "relative",
                m: "2rem",
                width: "90%",
              }}
            >
              <Typography
                className="text-area"
                component="div"
                sx={{
                  fontFamily: fonts[parseInt(data.font_type)].fontfamily,
                  color: colors[data.font_color],
                  textAlign: data.font_order,
                  fontSize: data.font_size,
                  maxHeight: 560,
                  minHeight: 560,
                  overflowY: "auto",
                  whiteSpace: "pre-line",
                  fontWeight: data.is_font_bold ? "bold" : "normal",
                }}
              >
                {data.title}
                <br />
                {data.content}
              </Typography>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </Box>
      <Box sx={{ mt: "2rem" }}>
        <Player musicUrl={data.music_url}></Player>
      </Box>
      {data.receiver_email ? null : (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "1rem" }}>
          <Button sx={{ ...ButtonStyle }} onClick={saveLetter}>
            편지함에 보관
          </Button>
        </Box>
      )}
    </motion.div>
  );
}

const ButtonStyle = {
  fontFamily: "Gowun Batang",
  fontSize: 18,
  color: "black",
  "&:hover": {
    backgroundColor: "transparent",
  },
};
