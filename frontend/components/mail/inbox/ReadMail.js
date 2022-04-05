import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getMail } from "../../apis/letter";
import MiniPlayer from "../../letter/preview/MiniPlayer";
import Photocard from "../../letter/preview/Photocard";
import General from "../../letter/preview/General";
import PostCard from "../../letter/preview/Postcard";
import { fonts, colors } from "../../Variables";
import { getMailByCode } from "../../apis/letter";
import Test from "./Test";
import { useRouter } from "next/router";

export default function ReadMail({ selectedMail, code }) {
  const [data, setData] = useState([]);
  const [mailCode, setMailCode] = useState([]);
  const router = useRouter();
  const getMail = async (code) => {
    try {
      const res = await getMailByCode(code);
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
      // background_color: null
      // content: "이편지는 영국에서 ..."
      // content_position: ""
      // created_date: "2022-04-04T16:18:41.748"
      // font_color: 1
      // font_order: ""
      // font_type: "GUNGSEO"
      // handwrite_image: ""
      // image: "https:/imagelink"
      // mail_type: "PHOTOCARD"
      // music_url: "https://musicurl.music"
      // receiver_email: "godooly@doo.ly"
      // receiver_name: "고둘리"
      // sender_email: "mapleapril@naver.com"
      // sender_name: "이름바꿈"
      // stickers: ""
      // style_url: "NORMAL05"
      // title: "행운의 편지2"
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (code) {
      setMailCode(router.query.code);
    } else {
      fetchMail(selectedMail);
    }
  }, []);

  useEffect(() => {
    getMail(code);
  }, [code]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* 포토카드 */}
        {data.mail_type === "PHOTOCARD" ? (
          <Test
            key="previewLetter"
            front="/img/photocard_front1.jpg"
            back="/img/photocard_back.png"
            preview={true}
            data={data}
          ></Test>
        ) : (
          <></>
        )}
        {/* <General data={data} />  */}
        {data.mail_type === "NORMAL" ? (
          <Box
            sx={{
              position: "relative",
              width: 420,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img src="/test.png" width={420} style={{ position: "absolute" }} />
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
                  fontFamily: fonts[1].fontfamily,
                  color: colors[1],
                  textAlign: data.font_order,
                  fontSize: data.font_size,
                  maxHeight: 560,
                  minHeight: 560,
                  overflowY: "auto",
                  whiteSpace: "pre-line",
                  // fontWeight: isFontBold ? "bold" : "normal",
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
                    fontFamily: fonts[1].fontfamily,
                    color: colors[0],
                    textAlign: data.font_order,
                    fontSize: data.font_size,
                    maxHeight: 280,
                    minHeight: 280,
                    minWidth: "100%",
                    px: "2rem",
                    py: "1rem",
                    overflowY: "auto",
                    whiteSpace: "pre-line",
                    textDecoration: `${colors[2]} underline`,
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
