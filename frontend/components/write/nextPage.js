import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const nextPage = (props) => {
  const { href } = props;
  return (
    <Box
      component="div"
      sx={{
        pt: "2rem",
        mb: "1rem",
        mr: "1rem",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link href={`/${href}`}>
        <Typography
          variant="p"
          component="span"
          className="Gowun Batang"
          sx={{ mr: "0.5rem" }}
        >
          다음
        </Typography>
      </Link>
      <ArrowForwardIosIcon />
    </Box>
  );
};

export default nextPage;
