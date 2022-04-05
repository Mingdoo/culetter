import React, { useState } from "react";
import Postbox from "../components/postbox/Postbox";
import { Box } from "@mui/material";

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
      <Postbox title="SIGN UP" size="10"></Postbox>
    </Box>
  );
};

export default Regist;
