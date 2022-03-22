import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import NextPage from "./nextPage";
const header = (props) => {
  const { title, detail1, detail2 } = props;

  return (
    <Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: title === "편지 형식" ? null : "space-between",
        }}
      >
        <Box component="div" sx={{ pt: "2rem", mb: "1rem", ml: "1rem" }}>
          <ArrowBackIosIcon />
        </Box>
        <Typography
          variant="p"
          component="div"
          className="Gowun Batang"
          sx={{ ml: title === "편지 형식" ? "7rem" : "0rem", fontSize: "28px" }}
        >
          {title}
        </Typography>
        {title === "편지 형식" ? null : <NextPage href={"music"} />}
      </Box>
      <Box component="div" sx={{ ml: "2rem" }}>
        <Typography
          component="p"
          className="Dodum"
          sx={{ fontSize: "1.3rem", mb: "0.2rem" }}
        >
          {detail1}
        </Typography>
        <Typography
          component="p"
          className="Dodum"
          sx={{ fontSize: "0.8rem", ml: "1rem" }}
        >
          {detail2}
        </Typography>
      </Box>
    </Box>
  );
};

export default header;
