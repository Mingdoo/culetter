import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { getMailByCode } from "../../../components/apis/letter";
import ReadMail from "../../../components/mail/inbox/ReadMail";
import ReadMailByCode from "../../../components/mail/inbox/ReadMailByCode";
export default function ReadCodeMail() {
  const router = useRouter();
  // const mailCode = router.query.code;
  const [mail, setMail] = useState(null);
  const [code, setCode] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
    setCode(router.query.code);
  }, [router.isReady]);

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
      {code && <ReadMailByCode code={code}></ReadMailByCode>}
    </Box>
  );
}
