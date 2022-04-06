import { Box, Typography } from "@mui/material";
// import newmailbox from "../../../assests/newmailbox.PNG";

<<<<<<< HEAD
export const Photocard = ({ senderName, createdDate, src, switchPage }) => {
=======
export default function Photocard({
  senderName,
  createdDate,
  src,
  switchPage,
  mailId,
}) {
  console.log(mailId);
>>>>>>> cde8036fd7b0aad394b36d35dbb6ee9a36abc362
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        fontSize: 26,
        height: "204px",
      }}
<<<<<<< HEAD
      onClick={switchPage}
      // onClick={() => {
      //   console.log("here");
      // }}
=======
      onClick={(e) => switchPage(mailId)}
>>>>>>> cde8036fd7b0aad394b36d35dbb6ee9a36abc362
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
            onClick={() => {
              console.log("here");
            }}
          ></Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
          <Typography sx={{ fontFamily: "Gowun Dodum" }}>
            {senderName}
          </Typography>
          {createdDate ? (
            <Typography sx={{ fontFamily: "Gowun Dodum" }}>
              포토카드, {createdDate.slice(0, 4)}년 {createdDate.slice(5, 7)}월{" "}
              {createdDate.slice(8, 10)}일
            </Typography>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};
