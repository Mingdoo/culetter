import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const header = (props) => {
  const { title, detail1, detail2 } = props;

  return (
    <Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box component="div" sx={{ pt: "2rem", mb: "2rem", ml: "1rem" }}>
          <ArrowBackIosIcon />
        </Box>
        <Typography
          variant="h4"
          component="div"
          className="Gowun Batang"
          sx={{ ml: "0rem" }}
        >
          {title}
        </Typography>
        <Box
          component="div"
          sx={{
            pt: "2rem",
            mb: "2rem",
            mr: "1rem",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="p"
            component="span"
            className="Gowun Batang"
            sx={{ mr: "0.5rem" }}
          >
            다음
          </Typography>
          <ArrowForwardIosIcon />
        </Box>
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
