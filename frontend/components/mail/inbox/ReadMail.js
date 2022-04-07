import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getMail } from "../../apis/letter";
import Player from "../../letter/preview/Player";
import { fonts, colors } from "../../Variables";
import ReadMailPhotoCard from "./ReadMailPhotoCard";
import Spinner from "../../Spinner";
import { motion, AnimateSharedLayout } from "framer-motion";

export default function ReadMail({ selectedMail }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMail = async () => {
    setLoading(true);
    try {
      const res = await getMail(selectedMail);
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMail();
  }, []);

  if (loading) {
    return <Spinner mt="30vh"></Spinner>;
  }
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
            delay: 0.1,
          },
        },
      }}
      layoutId="underline"
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* 포토카드 */}

        {data.mail_type === "PHOTOCARD" ? (
          <ReadMailPhotoCard data={data}></ReadMailPhotoCard>
        ) : (
          <></>
        )}
        {/* <General data={data} />  */}
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
                <Typography
                  sx={{
                    mb: "0.1rem",
                    fontFamily: "Gowun Batang",
                    fontWeight: "Bolder",
                  }}
                >
                  <Typography sx={{ mb: "0.5rem", fontFamily: "Gowun Batang" }}>
                    {data.title}
                  </Typography>
                </Typography>
                {data.content}
              </Typography>
            </Box>
          </Box>
        ) : (
          <></>
        )}
        {/* <PostCard />  */}
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
                    fontWeight: data.is_font_bold ? "bold" : "normal",
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
      </Box>
      <Box sx={{ py: "2rem" }}>
        <Player
          music={data.music_url}
          inboxMusicName={data.music_title}
        ></Player>
      </Box>
    </motion.div>
  );
}
