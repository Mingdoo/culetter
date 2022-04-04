import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getMail } from "../../apis/letter";
export default function ReadMail({ selectedMail }) {
  const [data, setData] = useState([]);
  const fetchMail = async (id) => {
    try {
      const res = await getMail(id);
      setData(res.data);
      console.log(res.data);
      // background_color: 1
      // content: "이편지는 영국에서 ..."
      // content_position: ""
      // created_date: "2022-04-03T14:20:38.495"
      // font_color: 1
      // font_order: ""
      // font_type: "GUNGSEO"
      // handwrite_image: ""
      // image: "https:/imagelink"
      // mail_type: "NORMAL"
      // music_url: "https://musicurl.music"
      // receiver_email: "mapleapril@naver.com"
      // receiver_name: "멀어지지"
      // sender_email: "kangdooly@doo.ly"
      // sender_name: "강둘리"
      // stickers: ""
      // style_url: "NORMAL05"
      // title: "행운의 편지2"
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMail(selectedMail);
  }, []);
  return (
    <>
      <Box>{data.content}</Box>
    </>
  );
}
