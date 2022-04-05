import React, { useState, useContext, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LetterContext from "../../contexts/LetterContext";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { getServerSideSitemapIndex } from "next-sitemap";
import MailApi from "../apis/MailApi";

const Content = (props) => {
  const { checkTextValid } = props;
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const [contentLength, setContentLength] = useState(0);
  const [titleLength, setTitleLength] = useState(0);
  const {
    receiver_name,
    receiver_email,
    title,
    mail_type,
    content,
    letterId,
    setMailId,
  } = useContext(LetterContext);

  const { setTitle, setContent } = useContext(LetterContext);
  const { getTempSave } = MailApi;

  const handleTempSave = async () => {
    const body = {
      receiver_name: receiver_name,
      receiver_email: receiver_email,
      title: title,
      mail_type: mail_type,
      content: content,
      music_url: "",
      image: "",
      content_position: "",
      stickers: "",
      font_order: "",
      font_type: "",
      font_color: "",
      background_color: "",
      handwrite_image: "",
    };
    try {
      const response = await getTempSave(body, letterId === "" ? 0 : letterId);
      setMailId();
      console.log(response.data.mail_id);
    } catch (error) {
      console.log(error);
    }
  };

  const checkInput = (event) => {
    const maxTitleLength = 100;
    const maxContentByte = 65535;
    const maxContentLength = 32768;
    const inputText = event.target.value;
    const inputLength = inputText.length;
    switch (event.target.id) {
      case "title":
        setTitleLength(inputLength);
        setTitle(inputText);
        break;
      case "contents":
        setContentLength(inputLength);
        setContent(`${inputText}`);
        break;
    }
    if (
      contentLength > 0 &&
      contentLength < maxContentLength &&
      titleLength > 0 &&
      titleLength < maxTitleLength
    ) {
      checkTextValid(true);
    } else {
      checkTextValid(false);
    }
  };

  useEffect(() => {}, [contentLength]);

  return (
    <Box sx={{ padding: "0.8rem", fontFamily: "Gowun Dodum" }}>
      <Box>
        <TextField
          component="div"
          label="제목"
          id="title"
          size="small"
          variant="standard"
          InputLabelProps={{
            style: { fontFamily: "Gowun Batang" },
          }}
          InputProps={{
            style: { fontFamily: "Gowun Batang" },
          }}
          sx={{ mb: "1.5rem", ml: "1rem" }}
          onChange={checkInput}
        />
      </Box>
      <TextareaAutosize
        component="div"
        aria-label="minimum height"
        id="contents"
        minRows={3}
        maxRows={10}
        placeholder="편지 내용을 입력해주세요"
        style={{
          fontSize: "1rem",
          fontFamily: "Gowun Batang",
          width: 380,
          height: 550,
          backgroundColor: "#E2E0A5",
          border: "none",
          resize: "none",
          marginBottom: "-1rem",
          marginLeft: "0.6rem",
          padding: "1rem",
        }}
        onKeyUp={(event) => {
          checkInput(event);
        }}
      />
      <Box
        sx={{
          width: 380,
          height: 40,
          backgroundColor: "#E2E0A5",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 1.5rem 0 1.5rem",
          marginLeft: "0.6rem",
        }}
      >
        <Box sx={{}}>
          <Button
            sx={{ color: "#000000", fontFamily: "Gowun Dodum" }}
            onClick={handleTempSave}
          >
            <SaveIcon />
            임시저장
          </Button>
        </Box>
        {contentLength}자
      </Box>
    </Box>
  );
};
export default Content;
