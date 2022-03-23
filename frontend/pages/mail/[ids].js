import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import Footer from "../../components/Footer";
import MenuList from "../../components/menu/MenuList";
import BackButton from "../../components/mail/inbox/BackButton";
import Letter from "../../components/main/Letter";
import Photocard from "../../components/mail/inbox/Photocard";
import axios from "axios";
import React, { useEffect, useState, useRef, useCallback } from "react";

// 재호출?
const SERVER_URL = "https://j6a201.p.ssafy.io:3000";
const token = "temp";
export default function Post() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mails, setMails] = useState([]);
  const loader = useRef(null);
  // axios로 받아오기까지 시간 걸리니 loading 필요
  const fetchMails = useCallback(async () => {
    setLoading(true);
    try {
      // const res = await axios.get(`${SERVER_URL}/recv`, {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      const res = [
        {
          hasNew: true,

          img: "temp",
          title: "제목이제목모모모모모모모모모모모모모모모모",
          senderName: "김은송",
          createdDate: "20220315",
          mailType: "GENERAL",
          mailsNum: 2,
        },
        {
          hasNew: true,

          img: "temp",
          title: "제목이제목모모모모모모모모모모모모모모모모",
          senderName: "김은송",
          createdDate: "20220315",
          mailType: "POST",
          mailsNum: 2,
        },
        {
          hasNew: false,
          img: "temp",
          title: "제목이제목모모모모모모모모모모모모모모모모",
          senderName: "김은송",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 2,
        },
        {
          hasNew: true,

          img: "temp",
          title: "제목이제목모모모모모모모모모모모모모모모모",
          senderName: "김은송",
          createdDate: "20220315",
          mailType: "GENERAL",
          mailsNum: 2,
        },
        {
          hasNew: true,

          img: "temp",
          title: "제목이제목모모모모모모모모모모모모모모모모",
          senderName: "김은송",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 2,
        },
        {
          hasNew: false,
          img: "temp",
          title: "제목이제목모모모모모모모모모모모모모모모모",
          senderName: "김은송",
          createdDate: "20220315",
          mailType: "GENERAL",
          mailsNum: 1,
        },
        {
          hasNew: false,
          img: "temp",
          title: "제목이제목모모모모모모모모모모모모모모모모",
          senderName: "김은송",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 2,
        },
        {
          hasNew: false,
          img: "temp",
          title: "제목이제목모모모모모모모모모모모모모모모모",
          senderName: "김은송",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 3,
        },
        {
          hasNew: true,

          img: "temp",
          title: "제목이제목모모모모모모모모모모모모모모모모",
          senderName: "김은송",
          createdDate: "20220315",
          mailType: "POST",
          mailsNum: 4,
        },
        {
          hasNew: true,

          img: "temp",
          title: "제목이제목모모모모모모모모모모모모모모모모",
          senderName: "김은송",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 5,
        },
        {
          hasNew: true,

          img: "temp",
          title: "고길동",
          createdDate: "20220315",
          mailType: "POST",
          mailsNum: 2,
        },
        {
          hasNew: true,

          img: "temp",
          title: "고길동",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 2,
        },
        {
          hasNew: false,
          img: "temp",
          title: "고길동",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 2,
        },
        {
          hasNew: true,

          img: "temp",
          title: "고길동",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 2,
        },
        {
          hasNew: true,
          img: "temp",
          title: "고길동",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 2,
        },
        {
          hasNew: false,
          img: "temp",
          title: "고길동",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 1,
        },
        {
          hasNew: false,
          img: "temp",
          title: "고길동",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 2,
        },
        {
          hasNew: false,
          img: "temp",
          title: "고길동",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 3,
        },
        {
          hasNew: true,

          img: "temp",
          title: "고길동",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 4,
        },
        {
          hasNew: true,

          img: "temp",
          title: "고길동",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 5,
        },
        {
          hasNew: true,

          img: "temp",
          title: "마지막",
          createdDate: "20220315",
          mailType: "PHOTOCARD",
          mailsNum: 5,
        },
      ];
      setData(res);
      // setData(res.data);
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
      <Box sx={{ width: 420, mx: "auto" }}>
        <Box
          sx={{
            width: 420,
            mx: "auto",
            bgcolor: "#FCFAEF",
            position: "relative",
            minHeight: "100vh",
            pb: 5,
          }}
        >
          <BackButton sx={{ pt: 1 }} href="/mail/inbox"></BackButton>
          <MenuList></MenuList>
          <Typography
            variant="h4"
            className="Dodum"
            sx={{
              display: "flex",
              justifyContent: "center",
              py: "3.5vh",
              fontSize: 28,
            }}
          >
            받은 편지
          </Typography>

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
          </Box>
          <Box sx={{ height: "10px" }} ref={loader}></Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
