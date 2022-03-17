import React from "react";
import { Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "start",
        px: "2rem",
        py: "2rem",
        bgcolor: "#535353",
        color: "#ffffff",
      }}
    >
      <Typography variant="h4" gutterBottom className="Arvo">
        CU;LETTER
      </Typography>
      <Typography sx={{ fontSize: 10 }} className="Batang">
        <Typography sx={{ fontSize: 10 }} className="Arvo"></Typography>
        (주) CU;LETTER 주소 : 서울특별시 강남구 역삼동 테헤란로 212 <br />
        이메일 : official.CU;LETTER@gmail.com <br />© CU;LETTER. All rights
        reserved.
      </Typography>
    </Box>
  );
}
