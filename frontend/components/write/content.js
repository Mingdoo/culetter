import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
  const [textLength, setTextLength] = useState(0);

  const handleClick = (event) => {};
  const handleInput = (event) => {
    setTitle(event.target.value);
  };
  const checkByte = (event) => {
    const maxByte = 65535;
    const inputText = event.target.value;
    const inputLength = inputText.length;
    setTextLength(inputLength);
    console.log(event.target.value);
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
          onChange={handleInput}
        />
      </Box>
      <TextareaAutosize
        component="div"
        aria-label="minimum height"
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
          checkByte(event);
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
            onclick={handleClick}
          >
            <SaveIcon />
            임시저장
          </Button>
        </Box>
        {textLength}자
      </Box>
    </Box>
  );
};
export default content;
