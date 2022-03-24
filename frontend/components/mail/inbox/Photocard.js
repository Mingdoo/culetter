import { Box, Typography } from "@mui/material";
// import newmailbox from "../../../assests/newmailbox.PNG";

export default function Photocard({ senderName, createdDate, src }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        fontSize: 26,
        height: "204px",
      }}
    >
      <Box
        sx={{
          border: "1px solid black",
          bgcolor: "white",
          width: "320px",
          height: "186px",
          mt: "9px",
        }}
      >
        {/* 포토카드 이미지 */}
        <Box sx={{ width: 1 }}>
          <Box
            component="img"
            src={src}
            sx={{
              objectFit: "cover",
              width: 1,
              height: "150px",
              px: 0.5,
              pt: 0.5,
              borderRadius: 5,
            }}
          ></Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
          <Typography className="Dodum">{senderName}</Typography>
          <Typography className="Dodum">
            포토카드, {createdDate.slice(0, 4)}년 {createdDate.slice(4, 6)}월{" "}
            {createdDate.slice(6)}일
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
