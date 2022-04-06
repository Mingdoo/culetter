import { Box, Typography } from "@mui/material";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { lazyStartIndex } from "react-slick/lib/utils/innerSliderUtils";
import { getRecvMailsBySender } from "../../apis/mailbox";
import Letter from "../../main/Letter";
import Photocard from "./Photocard";
import ReadMail from "./ReadMail";
export default function MailPage({ senderId, isMail, setIsMail }) {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mails, setMails] = useState([]);
  const [selectedMail, setSelectedMail] = useState(null);
  const loader = useRef(null);
  const noFirstRender1 = useRef(false);
  const noFirstRender2 = useRef(false);

  useEffect(() => {
    console.log(isMail);
    // setIsMail(true);
  }, []);

  const fetchMails = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getRecvMailsBySender(senderId);
      console.log(res.data.result.slice(0, 6));
      setData(res.data.result);
      setMails(res.data.result.slice(0, 6));
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  });

  useEffect(() => {
    fetchMails();
    setPage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (noFirstRender2.current) {
      setIsMail(false);
    } else {
      noFirstRender2.current = true;
    }
  }, [selectedMail]);

  useEffect(() => {
    if (noFirstRender1.current) {
      setSelectedMail(null);
    } else {
      noFirstRender1.current = true;
    }
  }, [isMail]);

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
    setMails(data.slice(0, page * 6));
  }, [page]);

  return (
    <>
      {/* src 에 style_url 넣음? */}
      {loading && <Typography>loading</Typography>}
      {isMail ? (
        <Box sx={{ minHeight: "90vh" }}>
          {mails.map(
            (
              {
                title,
                mail_type,
                created_date,
                sender_name,
                style_url,
                mail_id,
              },
              idx
            ) => {
              if (mail_type === "GENERAL") {
                return (
                  <Box
                    onClick={(e) => {
                      setSelectedMail(mail_id);
                    }}
                    key={idx}
                  >
                    <Letter
                      text={title}
                      index={0}
                      createdDate={created_date}
                      senderName={sender_name}
                      key={idx}
                      mailId={mail_id}
                    ></Letter>
                  </Box>
                );
              } else {
                return (
                  <Box
                    key={idx}
                    onClick={(e) => {
                      setSelectedMail(mail_id);
                    }}
                  >
                    <Letter
                      text={title}
                      index={1}
                      createdDate={created_date}
                      senderName={sender_name}
                      key={idx}
                      mailId={mail_id}
                    ></Letter>
                  </Box>
                );
              }
            }
          )}
          <Box sx={{ height: "70px" }} ref={loader}></Box>
        </Box>
      ) : (
        <ReadMail selectedMail={selectedMail}></ReadMail>
      )}
    </>
  );
}
