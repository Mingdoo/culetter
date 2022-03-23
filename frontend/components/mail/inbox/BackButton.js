import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import Link from "next/Link";

export default function BackButton({ href }) {
  return (
    <Link href={href}>
      <IconButton
        aria-label="go back"
        sx={{ position: "absolute", left: "2vh", top: "3vh" }}
      >
        <ArrowBackIosRoundedIcon></ArrowBackIosRoundedIcon>
      </IconButton>
    </Link>
  );
}
