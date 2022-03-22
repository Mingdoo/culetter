import React, { useContext } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentsContext from "../../contexts/ContentsContext";

const nextPage = (props) => {
  const { href } = props;
  const { textValid } = useContext(ContentsContext);
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
          sx={{ mr: "0.5rem", color: textValid ? "#000000" : "#C6C6C6" }}
        >
          다음
        </Typography>
      </Link>
      <ArrowForwardIosIcon />
    </Box>
  );
};

export default nextPage;
