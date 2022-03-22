import React, { useState, useContext, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentsContext from "../../contexts/ContentsContext";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const content = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contentLength, setContentLength] = useState(0);
  const [titleLength, setTitleLength] = useState(0);
  const { setTextValid } = useContext(ContentsContext);

  useEffect(() => {}, [contentLength]);

  const handleSave = (event) => {};

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
        console.log(inputLength);
        break;
      case "contents":
        setContentLength(inputLength);
        setContent(inputText);
        break;
    }
    if (
      contentLength > 0 &&
      contentLength < maxContentLength &&
      titleLength > 0 &&
      titleLength < maxTitleLength
    ) {
      setTextValid(true);
    } else {
      setTextValid(false);
    }
  };

  return (
    <Box className="Dodum" sx={{ padding: "0.8rem" }}>
      <Box>
        <TextField
          component="div"
          label="제목"
          id="title"
          // defaultValue="제목을 입력해주세요"
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
            className="Dodum"
            sx={{ color: "#000000" }}
            onclick={handleSave}
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
export default content;
