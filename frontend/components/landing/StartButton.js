import React from "react";
import { Button } from "@mui/material";
import Link from "next/Link";

export default function StartButton(props) {
  return (
    <Link href="/login" passHref>
      <Button sx={{ ...ButtonStyle, mx: "auto" }} variant="contained">
        {props.description}
      </Button>
    </Link>
  );
}

const ButtonStyle = {
  borderRadius: 2,
  backgroundColor: "#D3504A",
  "&:hover": {
    backgroundColor: "#e4615b",
  },
};
