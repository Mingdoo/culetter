import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { getMailByCode } from "../../../components/apis/letter";
import ReadMail from "../../../components/mail/inbox/ReadMail";
export default function ReadCodeMail() {
  const router = useRouter();
  const mailCode = router.query.code;
  const [mail, setMail] = useState(null);

  const getMail = async () => {
    try {
      const res = await getMailByCode(mailCode);
      setMail(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMail();
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
      <ReadMail code={mailCode}></ReadMail>
    </Box>
  );
}
