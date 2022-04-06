import { Box, Typography } from "@mui/material";
import React, { useEffect, useState, useRef, useCallback } from "react";
import MenuList from "../../components/menu/MenuList";
import Letter from "../../components/main/Letter";
import Photocard from "../../components/mail/inbox/Photocard";
import { getUndoneMail } from "../../components/apis/mailbox";
import { authentication } from "../../components/apis/auth";
export default function Storage() {
  const [loading, setLoading] = useState(false);
  const [mails, setMails] = useState([]);

  const fetch = async () => {
    try {
      const res = await getUndoneMail();
      setMails(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authentication();
    fetch();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          width: 420,
          mx: "auto",
          bgcolor: "#FCFAEF",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <MenuList></MenuList>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            py: "3.5vh",
            fontSize: 28,
            fontFamily: "Gowun Dodum",
          }}
        >
          작성 중인 편지
        </Typography>
        {/* 받는 사람: sender_name
          created_date: 
          title: 
           */}
        {loading && <Typography>loading</Typography>}
        {mails &&
          mails.map(({ title, mailType, createdDate }, index) => {
            if (mailType === "PHOTOCARD") {
              return (
                <Photocard
                  title={title}
                  createdDate={createdDate}
                  key={index}
                ></Photocard>
              );
            } else if (mailType === "GENERAL") {
              return (
                <Letter
                  text={title}
                  index={0}
                  createdDate={createdDate}
                  key={index}
                ></Letter>
              );
            } else {
              return (
                <Letter
                  text={title}
                  index={1}
                  createdDate={createdDate}
                  key={index}
                ></Letter>
              );
            }
          })}
      </Box>
    </Box>
  );
}
