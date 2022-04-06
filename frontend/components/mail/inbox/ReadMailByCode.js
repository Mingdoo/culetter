import { Box, Typography } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { getMailByCode } from "../../apis/letter";
import Player from "../../letter/preview/Player";
import { fonts, colors } from "../../Variables";
import Photocard from "../../letter/preview/Photocard";
import LetterContext from "../../../contexts/LetterContext";
export default function ReadMailByCode({ code }) {
  const {
    content,
    setName,
    setBgcolor,
    setContent,
    setCreatedDate,
    setFontsize,
    setFontColor,
    setFontOrder,
    setFontType,
    setIsFontBold,
    setMailType,
    setMusicUrl,
    setReceiverEmail,
    setReceiverName,
    setSenderEmail,
    setStyleUrl,
    setTitle,
    setStickersPos,
    setUnderlineColor,
  } = useContext(LetterContext);
  const [data, setData] = useState([]);

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

  const fetchMail = async (code) => {
    try {
      const res = await getMailByCode(code);
      // const {
      //   sender_name,
      //   background_color,
      //   content,
      //   created_date,
      //   font_color,
      //   font_order,
      //   font_type,
      //   is_font_bold,
      //   mail_type,
      //   music_url,
      //   receiver_mail,
      //   receiver_name,
      //   sender_email,
      //   stickers,
      //   style_url,
      //   title,
      //   underline_color,
      // } = res.data;
      setData(res.data);
      console.log(res.data);
      // setStickersPos(res.data.stickers);
      // setIsData(true);
      // setMailType(mail_type);
      // setPlayer(music_url);
    } catch (error) {
      console.log(error);
    }
  };

  const test = async () => {
    try {
      const res = await getMailByCode("8Wyl2gZwTwbBx1rK");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMail(code);
    test();
  }, []);

  return (
    <>
      <Box sx={{ mt: "2rem" }}>
        {data.mail_type === "PHOTOCARD" ? (
          <Box
            className="card"
            sx={{
              width: 300,
              height: 400,
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
                width={300}
                height={400}
                src={data.style_url}
                style={{ borderRadius: "2rem" }}
              ></img>
            </Box>
            <Box
              component="div"
              className={
                "back face " + (isClicked && showBack ? "rotateBack" : null)
              }
              onClick={handleBackClick}
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
            ></Box>
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
                  fontWeight: data.is_font_bold ? "bol d" : "normal",
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
      <Box>
        {[
          {
            idx: 999,
            type: "text",
            content: "두둘리",
            position: { x: -64, y: -180 },
            disabled: true,
          },
          {
            idx: 998,
            type: "title",
            content: "둘리둘리",
            position: { x: 0, y: 0 },
            disabled: true,
          },
          {
            idx: 0,
            type: "sticker",
            content: { icon: { type: {}, compare: null }, color: "#FFD93D" },
            position: { x: 24, y: -25 },
            disabled: true,
          },
        ].map((Sticker, idx) =>
          Sticker.type !== "sticker" ? (
            <Typography
              sx={{
                display: "inline",
                position: "absolute",
                transform: `translate(${Sticker.position.x}px, ${Sticker.position.y}px)`,
                fontSize: data.font_size,
                fontFamily: fonts[1].fontfamily,
                color: colors[1],
                whiteSpace: "pre-line",
                fontWeight: "normal",
              }}
            >
              {Sticker.content}
            </Typography>
          ) : (
            <Box sx={{ position: "absolute" }}>
              <Sticker></Sticker>
              {/* <Sticker.content.icon
                sx={{ color: "pink" }}
              ></Sticker.content.icon> */}
            </Box>
          )
        )}
        {[
          { test: 1, testw: 2 },
          { test: 2, testw: 3 },
        ].map((test, idx) => {
          <Box sx={{ bgColor: "red", width: 1, height: "900px" }}>
            {test.test}
          </Box>;
        })}
      </Box>
      <Box sx={{ mt: "2rem" }}>
        <Player musicUrl={data.music_url}></Player>
      </Box>
    </>
  );
}
