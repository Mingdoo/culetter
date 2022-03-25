import React from "react";
import { Box, IconButton } from "@mui/material";

import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
function Alignment({ isAlignmentOpen, setAlignment }) {
  return (
    <Box
      sx={{
        mx: "auto",
        borderRadius: 2,
        backgroundColor: "#bbbbbb",
        visibility: isAlignmentOpen ? "visible" : "hidden",
        display: isAlignmentOpen ? "inline-block" : "none",

        mb: "1rem",
      }}
    >
      <IconButton onClick={(e) => setAlignment("justify")}>
        <FormatAlignJustifyIcon />
      </IconButton>
      <IconButton onClick={(e) => setAlignment("center")}>
        <FormatAlignCenterIcon />
      </IconButton>
      <IconButton onClick={(e) => setAlignment("left")}>
        <FormatAlignLeftIcon />
      </IconButton>
      <IconButton onClick={(e) => setAlignment("right")}>
        <FormatAlignRightIcon />
      </IconButton>
    </Box>
  );
}

export default Alignment;
