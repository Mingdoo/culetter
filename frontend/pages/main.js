import React, { useState } from "react";
import MenuList from "../components/menu/MenuList";
import { Box, Typography } from "@mui/material";
import Letter from "../components/main/Letter";
import MenuButton from "../components/menu/MenuButton";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <>
      <Box>
        <Box sx={{ width: 420, mx: "auto" }}>
          <Box
            sx={{
              bgcolor: "#FCFAEF",
              pt: "3vh",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <MenuList></MenuList>
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
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  );
}
