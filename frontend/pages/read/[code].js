import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import ReadMail from "../../components/mail/inbox/ReadMailByCode";
import Header from "../../components/Header";
export default function ReadCodeMail() {
  const [code, setCode] = useState();
  const router = useRouter();
  useEffect(() => {
    setCode(router.query.code);
    console.log(router.query.code);
  });
  return (
    <Box
      sx={{
        width: 420,
        mx: "auto",
        bgcolor: "#FCFAEF",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <Header title="편지가 왔어요"></Header>
      <ReadMail code={code}></ReadMail>
    </Box>
  );
}
