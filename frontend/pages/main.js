import React, { useState } from "react";
import MenuList from "../components/main/MenuList";
import { Box, Typography } from "@mui/material";
import Letter from "../components/main/Letter";
import MenuButton from "../components/MenuButton";

export default function Main({ width = 240, children }) {
  const [open, setOpen] = useState(false);
  const HandleMenu = () => (open ? setOpen(false) : setOpen(true));

  return (
    <>
      <Box>
        <Box sx={{ width: 420, mx: "auto" }}>
          <Box
            sx={{
              bgcolor: "#FCFAEF",
              py: "3vh",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: open ? 1 : 0,
                height: 1,
                bgcolor: "rgba(0,0,0,0.2)",
                position: "absolute",
              }}
              onClick={HandleMenu}
            ></Box>
            <MenuButton OpenMenu={HandleMenu} open={open}></MenuButton>
            <Typography
              variant="h4"
              className="Arvo"
              sx={{
                display: "flex",
                justifyContent: "center",
                pb: "2vh",
                fontSize: 36,
              }}
            >
              CU;LETTER
            </Typography>
            <Box>
              {["편지 쓰기", "받은 편지", "보낸 편지", "작성중인 편지"].map(
                (text, index) => (
                  <Letter text={text} index={index} key={index}></Letter>
                )
              )}
            </Box>
            <MenuList open={open}></MenuList>
          </Box>
        </Box>
      </Box>
    </>
  );
}
