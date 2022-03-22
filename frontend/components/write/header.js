import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const header = (props) => {
  const { title, detail1, detail2 } = props;

  return (
    <Box>
      <Box>
        <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
          <Box component="div" sx={{ pt: "2rem", mb: "2rem", ml: "1rem" }}>
            <ArrowBackIosIcon></ArrowBackIosIcon>
          </Box>
          <Typography
            variant="h4"
            component="div"
            className="Gowun Batang"
            sx={{ ml: "6rem" }}
          >
            {title}
          </Typography>
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
      <Box></Box>
    </Box>
  );
};

export default header;
