import { Typography } from "@mui/material";
import React from "react";
import { Box, Grid } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import NextPage from "./nextPage";
const Header = (props) => {
  const { title, detail1, detail2 } = props;

  return (
    <Box sx={{ mt: "1rem" }}>
      <Grid
        container
        spacing={3}
        columns={12}
        component="div"
        sx={{ textAlign: "center", display: "flex", alignItems: "center" }}
      >
        <Grid item xs={3}>
          <Box component="div">
            <ArrowBackIosIcon />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="p"
            component="div"
            sx={{
              // ml: title === "편지 형식" ? "7rem" : "0rem",
              fontSize: "22px",
              fontFamily: "Gowun Batang",
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          {title === "편지쓰기" ? (
            <NextPage href={"music"} title={title} />
          ) : title === "편지와 어울리는 노래" ? (
            <NextPage href={"edit"} title={title} />
          ) : null}
        </Grid>
      </Grid>
      <Box component="div" sx={{ ml: "2rem" }}>
        <Typography
          component="p"
          sx={{
            fontSize: "1.3rem",
            mb: "0.2rem",
            mt: "1.5rem",
            fontFamily: "Gowun Dodum",
          }}
        >
          {detail1}
        </Typography>
        <Typography
          component="p"
          sx={{ fontSize: "0.8rem", ml: "1rem", fontFamily: "Gowun Dodum" }}
        >
          {detail2}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
