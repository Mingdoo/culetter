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
  const [textCount, setTextcount] = useState(0);
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
          sx={{ mb: "1.5rem" }}
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
        }}
      >
        <Box sx={{}}>
          <Button className="Dodum" sx={{ color: "#000000" }}>
            <SaveIcon />
            임시저장
          </Button>
        </Box>
        {textCount}자
      </Box>
    </Box>
  );
};
export default content;
