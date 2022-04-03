import { Box, Typography } from "@mui/material";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { getRecvMailsBySender } from "../../apis/mailbox";
import Letter from "../../main/Letter";
import Photocard from "./Photocard";

export default function MailPage({ senderId }) {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mails, setMails] = useState([]);
  const loader = useRef(null);

  const fetchMails = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getRecvMailsBySender(senderId);
      setData(res.data.result);
      setMails(res.data.result.slice(0, 4));
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  });

  useEffect(() => {
    fetchMails();
    setPage((prev) => prev + 1);
  }, []);
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  // 처음 로딩 돌 떄 작동함.
  useEffect(() => {
    setMails(data.slice(0, page * 4));
  }, [page]);

  return (
    <>
      {/* src 에 style_url 넣음? */}
      {loading && <Typography>loading</Typography>}
      <Box sx={{ minHeight: "90vh" }}>
        {mails.map(
          ({
            title,
            mail_type,
            created_date,
            sender_name,
            style_url,
            mail_id,
            sender_email,
          }) => {
            if (mail_type === "PHOTOCARD") {
              return (
                <Photocard
                  src={style_url}
                  title={title}
                  createdDate={created_date}
                  senderName={sender_name}
                  key={mail_id}
                ></Photocard>
              );
            } else if (mail_type === "GENERAL") {
              return (
                <Letter
                  text={title}
                  index={0}
                  createdDate={created_date}
                  senderName={sender_name}
                  key={mail_id}
                ></Letter>
              );
            } else {
              return (
                <Letter
                  text={title}
                  index={1}
                  createdDate={created_date}
                  key={mail_id}
                  senderName={sender_name}
                ></Letter>
              );
            }
          }
        )}
        <Box sx={{ height: "70px" }} ref={loader}></Box>
      </Box>
    </>
  );
}
