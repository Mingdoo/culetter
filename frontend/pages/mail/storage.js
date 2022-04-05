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
      const res = getUndoneMail();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authentication();
    fetch();
  }, []);

  useEffect(() => {
    setMails([
      {
        title: "test1",
        mailType: "PHOTOCARD",
        createdDate: "20220323",
        senderName: "김경협",
      },
      {
        title: "test2",
        mailType: "GENERAL",
        createdDate: "20220323",
        senderName: "김도현",
      },
      {
        title: "test3",
        mailType: "GENERAL",
        createdDate: "20220323",
        senderName: "김은송",
      },
      {
        title: "test4",
        mailType: "POSTCARD",
        createdDate: "20220323",
        senderName: "강민수",
      },
      {
        title: "test5",
        mailType: "PHOTOCARD",
        createdDate: "20220323",
        senderName: "김정연",
      },
      {
        title: "test6",
        mailType: "POSTCARD",
        createdDate: "20220323",
        senderName: "김정환",
      },
    ]);
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
        {/* "{ 
    ""result"":[ 
        { 
            ""mail_id"": ""77"",
            ""sender_name"": ""김경협"",
            ""sender_email"": ""ssafy@ssafy.com"",
            ""created_date"": """", 
            ""title"": """", 
            ""mail_type"": ""PHOTOCARD"", 
            ""mail_style"": """" 
        }, {}, {} ,,,
    ] 
}" */}
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
        {mails.map(({ title, mailType, createdDate }, index) => {
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
