import { Box, Typography } from "@mui/material";
import newmailbox from "../../../assests/newmailbox.png";

export default function Photocard({ senderName, createdDate }) {
  return (
    <Box
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
        {/* 포토카드 이미지 */}
        <Box sx={{ width: 1 }}>
          <Box
            component="img"
            src={newmailbox.src}
            sx={{
              objectFit: "cover",
              width: 1,
              height: "160px",
              px: 1,
              py: 1,
            }}
          ></Box>
        </Box>
        <Typography
          className="Dodum"
          sx={{ display: "flex", justifyContent: "end", px: 1 }}
        >
          포토카드, {createdDate.slice(0, 4)}년 {createdDate.slice(4, 6)}월{" "}
          {createdDate.slice(6)}일
        </Typography>
      </Box>
    </Box>
  );
}
