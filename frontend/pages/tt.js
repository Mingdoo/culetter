import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Box } from "@mui/material";

function tt() {
  const [flipped, setFlipped] = useState(false);
  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <Box onClick={(e) => setFlipped((prev) => !prev)} sx={{ bgcolor: "red" }}>
        Front
      </Box>
      <Box
        onClick={(e) => setFlipped((prev) => !prev)}
        sx={{ bgcolor: "#aaaaaa" }}
      >
        Back
      </Box>
    </ReactCardFlip>
  );
}

export default tt;
