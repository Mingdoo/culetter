import React from "react";
import { Box, Typography } from "@mui/material";
import nomailbox from "../../../assests/nomailbox.png";
import newmailbox from "../../../assests/newmailbox.png";

import Avatar from "@mui/material/Avatar";

import Link from "next/Link";

const shapeStyles = {
  bgcolor: "primary.main",
  width: 20,
  height: 20,
  position: "absolute",
  top: "20%",
  borderRadius: "70%",
};
const circle = <Box component="span" sx={{ ...shapeStyles }} />;
export default function MailBox({ hasNew, name, id, mailsNum }) {
  return (
    // 해당 링크 주소로 이동
    <Link href="/mail/[id]" as={`/mail/${id}`}>
      <Box sx={{ position: "relative" }}>
        <Avatar
          sx={{
            bgcolor: "#E2E0A5",
            width: "30px",
            height: "30px",
            position: "absolute",
            right: 20,
            top: -10,
            border: "black 1px solid",
            color: "black",
            fontSize: "18px",
          }}
        >
          {mailsNum}
        </Avatar>
        <Box
          sx={{ width: 200, px: 5 }}
          src={hasNew ? newmailbox.src : nomailbox.src}
          component="img"
        ></Box>
        <Typography
          className="Dodum"
          sx={{ display: "flex", justifyContent: "center", width: 200, px: 5 }}
        >
          {hasNew}
          {name}
        </Typography>
      </Box>
    </Link>
  );
}
