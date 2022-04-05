import React, { useState } from "react";
import Postbox from "../components/postbox/Postbox";
import { Box, Typography } from "@mui/material";

const Regist = () => {
  return (
    <Box
      sx={{
        width: 420,
        height: "100vh",
        mx: "auto",
        backgroundColor: "#FCFAEF",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ textAlign: "center", fontFamily: "Arvo", pt: 3, pb: 1 }}
      >
        CU;LETTER
      </Typography>
      <Postbox title="SIGN UP" size="10"></Postbox>
    </Box>
  );
};

export default Regist;
