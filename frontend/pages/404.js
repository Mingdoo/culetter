import React from "react";
import { landingBoxStyle } from "./index";
import { Box, Typography } from "@mui/material";
import MenuList from "../components/menu/MenuList";

function Custom404() {
  return (
    <Box sx={{ ...landingBoxStyle, width: 420 }}>
      <MenuList />
      <Typography
        variant="h6"
        component="h1"
        sx={{ fontFamily: "Gowun Dodum" }}
      >
        갈 길을 잃으셨군요.. 메롱😋
      </Typography>
    </Box>
  );
}

export default Custom404;
