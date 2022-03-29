import IconButton from "@mui/material/IconButton";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import Link from "next/link";

export default function BackButton({ setIsPostBox }) {
  return (
    <IconButton
      aria-label="go back"
      sx={{ position: "absolute", left: "2vh", top: "3vh" }}
      onClick={() => setIsPostBox(true)}
    >
      <ArrowBackIosRoundedIcon></ArrowBackIosRoundedIcon>
    </IconButton>
  );
}
