import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import MenuList from "../../components/menu/MenuList";
import axios from "axios";

const SERVER_URL = "https://j6a201.p.ssafy.io:3000";
const token = "temp";

export default function inbox() {
  const [mails, setMails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMails = async () => {
    try {
      setError(null);
      setMails(null);
      setLoading(true);

      const res = await axios.get(`${SERVER_URL}/recv`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMails(res.data);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };
  // 최초 한 번 시도해본다!
  useEffect(() => {
    fetchMails();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  if (!mails) return null;

  return (
    <>
      <Box
        sx={{
          width: 420,
          mx: "auto",
          bgcolor: "#FCFAEF",
          position: "relative",
        }}
      >
        <MenuList></MenuList>
        <Typography
          variant="h4"
          className="Dodum"
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: "2vh",
            fontSize: 36,
          }}
        >
          받은 편지
        </Typography>
      </Box>
    </>
  );
}
