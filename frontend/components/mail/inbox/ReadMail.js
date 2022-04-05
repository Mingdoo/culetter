import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getMail, getMailByCode } from "../../apis/letter";
import MiniPlayer from "../../letter/preview/MiniPlayer";
import { fonts, colors } from "../../Variables";
import ReadMailPhotoCard from "./ReadMailPhotoCard";
import { useRouter } from "next/router";

export default function ReadMail({ selectedMail, code }) {
  const [data, setData] = useState([]);
  const [mailCode, setMailCode] = useState([]);
  const router = useRouter();

  const fetchMailByCode = async () => {
    setMailCode(router.query.code);
    try {
      const res = await getMailByCode(mailCode);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchMail = async (id) => {
    try {
      const res = await getMail(id);
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code) {
      console.log("yes code");
      // setMailCode(router.query.code);
      fetchMailByCode();
    } else {
      console.log("no code");
      fetchMail(selectedMail);
    }
  }, []);

  // useEffect(() => {
  //   console.log("yes code 22");
  //   fetchMailByCode(mailCode);
  // }, [mailCode]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* 포토카드 */}
        {data.mail_type === "PHOTOCARD" ? (
          <ReadMailPhotoCard
            key="readPhotoCard"
            preview={true}
            data={data}
          ></ReadMailPhotoCard>
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
                  // fontWeight: data.is_font_bold ? "bold" : "normal",
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
                src="/test.png"
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
      </Box>
      <Box sx={{ mt: "2rem" }}>
        <MiniPlayer musicUrl={data.music_url}></MiniPlayer>
      </Box>
    </>
  );
}
