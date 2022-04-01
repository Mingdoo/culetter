import { useRouter } from "next/router";
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
  // axios로 받아오기까지 시간 걸리니 loading 필요
  const fetchMails = useCallback(async () => {
    console.log(senderId);
    setLoading(true);
    try {
      // const res = await axios.get(`${SERVER_URL}/recv`, {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      const res = getRecvMailsBySender(senderId);
      console.log(res);
      setData([
        { title: "test", mailType: "GENERAL", senderName: "test" },
        { title: "test", mailType: "PHOTOCARD", senderName: "test" },
        { title: "test", mailType: "POSTCARD", senderName: "test" },
      ]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchMails();
    setPage((prev) => prev + 1);
  }, []);
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      console.log("is InterSecting");
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
    console.log(data);
    setMails(data.slice(0, page * 3));
    console.log(mails);
  }, [page]);

  return (
    <>
      {loading && <Typography>loading</Typography>}
      <Box sx={{ minHeight: "90vh" }}>
        {mails.map(
          ({ title, mailType, createdDate, senderName, img }, index) => {
            if (mailType === "PHOTOCARD") {
              return (
                <Photocard
                  src={img}
                  title={title}
                  createdDate={createdDate}
                  senderName={senderName}
                  key={index}
                ></Photocard>
              );
            } else if (mailType === "GENERAL") {
              return (
                <Letter
                  text={title}
                  index={0}
                  createdDate={createdDate}
                  senderName={senderName}
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
                  senderName={senderName}
                ></Letter>
              );
            }
          }
        )}
        <Box sx={{ height: "50px" }} ref={loader}></Box>
      </Box>
    </>
  );
}
