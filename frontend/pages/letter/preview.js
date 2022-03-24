import { Box, Button, Typography, Grid } from "@mui/material";

import Header from "../../components/write/header";
import MiniPlayer from "../../components/letter/preview/miniPlayer";
export default function Preview() {
  return (
    <Box
      component="div"
      sx={{
        width: 420,
        height: "100vh",
        mx: "auto",
        bgcolor: "#FCFAEF",
      }}
    >
      <Header title="미리보기"></Header>
      <Box>미리보기 편지 형식으로 제공</Box>
      <Box></Box>
      <MiniPlayer></MiniPlayer>
      <Button>편지 전송</Button>
    </Box>
  );
}
