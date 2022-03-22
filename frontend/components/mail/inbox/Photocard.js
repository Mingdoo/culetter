import { Box, Typography } from "@mui/material";
import newmailbox from "../../../assests/newmailbox.png";

export default function Photocard() {
  return (
    <Box
      className="Dodum"
      sx={{
        display: "flex",
        justifyContent: "center",
        fontSize: 26,
        mb: 3,
      }}
    >
      <Box
        sx={{
          border: "1px solid black",
          bgcolor: "white",
          width: "320px",
          height: "204px",
        }}
      >
        <img
          component="img"
          src={`${newmailbox.src}?w=161&fit=crop&auto=format`}
        ></img>
        {/* 포토카드 이미지 */}
      </Box>
    </Box>
  );
}
