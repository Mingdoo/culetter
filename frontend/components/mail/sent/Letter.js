import { Box, Typography } from "@mui/material";

import stamp from "../../../public/img/stamp.PNG";

export default function Letter({ type, date, name, title }) {
  return (
    <>
      <Box component="div" sx={{ width: "100%", position: "relative" }}>
        <Box
          component="div"
          sx={{
            width: 150,
            height: 100,
            backgroundColor: "white",
            textAlign: "center",
            border: "1.5px solid black",
            mx: "auto",
          }}
        >
          <Box
            component="div"
            sx={{
              width: 146,
              height: 96,
              backgroundColor: "white",
              border: "1.5px solid black",
              mx: "auto",
              mt: ".5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              px: "3px",
              py: "2px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* <Box
                component="img"
                src={stamp.src}
                sx={{ width: 60, right: 0, top: 0 }}
              ></Box> */}
              <Typography
                sx={{
                  fontSize: 14,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  display: "block",
                  width: 1,
                  display: "flex",
                  justifyContent: "flex-start",
                }}
                className="Dodum"
              >
                {title}
              </Typography>
              <Typography sx={{ fontSize: 10 }} className="Dodum">
                {type === "POSTCARD"
                  ? "엽서"
                  : type === "PHOTOCARD"
                  ? "포토카드"
                  : "일반"}
                {/* <Box component="span" sx={{ fontSize: 12 }}>
                  에게
                </Box> */}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Typography sx={{ fontSize: 11 }} className="Dodum">
                {name}
              </Typography>
              <Typography sx={{ fontSize: 11 }} className="Dodum">
                {date.slice(0, 4)}년 {date.slice(4, 6)}월 {date.slice(6)}일
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
