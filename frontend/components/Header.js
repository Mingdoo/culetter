import React from "react";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Header({ handlePrevClick, title, handleNextClick }) {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={3}>
          <Box sx={{ m: "1rem" }}>
            <IconButton onClick={(e) => handlePrevClick(e)}>
              <ArrowBackIosNewIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              m: "1rem",
            }}
          >
            <Typography
              className="Dodum"
              sx={{ textAlign: "center", fontSize: "1.5rem" }}
            >
              {title}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          {handleNextClick ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
                mr: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <Typography className="Batang">다음</Typography>
                <IconButton onClick={(e) => handleNextClick(e)}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
            </Box>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
