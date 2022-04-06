import { Box, Typography } from "@mui/material";
import React, { useEffect, useState, useRef, useCallback } from "react";
import MenuList from "../../components/menu/MenuList";
import Letter from "../../components/main/Letter";
import Photocard from "../../components/mail/inbox/Photocard";
import { getUndoneMail } from "../../components/apis/mailbox";
import { authentication } from "../../components/apis/auth";
import Router from "next/router";
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

  const routeToWrite = (e, id) => {
    e.preventDefault();
    Router.push("/letter/write");
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
          mails.map(({ title, mailType, createdDate, mail_id }, index) => {
            if (mailType === "PHOTOCARD") {
              return (
                <Box
                  onClick={(e, mail_id) => routeToWrite(e, mail_id)}
                  key={index}
                >
                  <Photocard
                    title={title}
                    createdDate={createdDate}
                  ></Photocard>
                </Box>
              );
            } else if (mailType === "GENERAL") {
              return (
                <Box
                  onClick={(e, mail_id) => routeToWrite(e, mail_id)}
                  key={index}
                >
                  <Letter
                    text={title}
                    index={0}
                    createdDate={createdDate}
                  ></Letter>
                </Box>
              );
            } else {
              return (
                <Box
                  onClick={(e, mail_id) => routeToWrite(e, mail_id)}
                  key={index}
                >
                  <Letter
                    text={title}
                    index={1}
                    createdDate={createdDate}
                  ></Letter>
                </Box>
              );
            }
          })}
      </Box>
    </Box>
  );
}
