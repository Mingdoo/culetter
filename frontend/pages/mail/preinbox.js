import React, { useEffect, useState, useRef, useCallback } from "react";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import axios from "axios";

import MenuList from "../../components/menu/MenuList";
import MailBox from "../../components/mail/inbox/MailBox";
import SearchBox from "../../components/user/SearchBox";
import Footer from "../../components/Footer";

const SERVER_URL = "https://j6a201.p.ssafy.io:3000";
const token = "temp";

export default function inbox() {
  // 무한 스크롤 보여주는 데이터 자르는 용도. 한 페이지 당 8개
  const [page, setPage] = useState(0);
  // 통신으로 받은 모든 데이터
  const [data, setData] = useState([]);
  // 보여주는 데이터 (스크롤)
  const [mails, setMails] = useState([]);
  const [searchMemberName, setSearchMemberName] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loader = useRef(null);

  const tempData = [
    { hasNew: true, name: "홍길동", mailsNum: 2 },
    { hasNew: true, name: "홍길동", mailsNum: 2 },
    { hasNew: false, name: "홍길동", mailsNum: 2 },
    { hasNew: true, name: "홍길동", mailsNum: 2 },
    { hasNew: true, name: "홍길동", mailsNum: 2 },
    { hasNew: false, name: "홍길동", mailsNum: 1 },
    { hasNew: false, name: "홍길동", mailsNum: 2 },
    { hasNew: false, name: "홍길동", mailsNum: 3 },
    { hasNew: true, name: "홍길동", mailsNum: 4 },
    { hasNew: true, name: "홍길동", mailsNum: 5 },
    { hasNew: true, name: "고길동", mailsNum: 2 },
    { hasNew: true, name: "고길동", mailsNum: 2 },
    { hasNew: false, name: "고길동", mailsNum: 2 },
    { hasNew: true, name: "고길동", mailsNum: 2 },
    { hasNew: true, name: "고길동", mailsNum: 2 },
    { hasNew: false, name: "고길동", mailsNum: 1 },
    { hasNew: false, name: "고길동", mailsNum: 2 },
    { hasNew: false, name: "고길동", mailsNum: 3 },
    { hasNew: true, name: "고길동", mailsNum: 4 },
    { hasNew: true, name: "고길동", mailsNum: 5 },
    { hasNew: true, name: "마지막", mailsNum: 5 },
  ];

  const fetchMails = useCallback(async () => {
    try {
      // setError(false);
      setMails(null);
      setLoading(true);

      // const res = await axios.get(`${SERVER_URL}/recv`, {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      // setData(res.data);
    } catch (e) {
      console.log(e);
      // setError(e);
    } finally {
      setLoading(false);
      setData(tempData);
      setPage((prev) => prev + 1);
    }
  });

  useEffect(() => {
    fetchMails();
    // setData(tempData);
    // setPage((prev) => prev + 1);
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

  // 처음 로딩에도
  useEffect(() => {
    setMails(data.slice(0, page * 8));
  }, [page]);

  return (
    <>
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
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            py: "3.5vh",
            fontSize: 28,
            fontFamily: "Gowun Dodum",
          }}
        >
          받은 편지
        </Typography>

        {loading ? <div>loading...</div> : null}

        <Box sx={{ display: "flex" }}>
          <SearchBox
            id="searchMemberNameInput"
            label="이름"
            width={225}
            onChange={(e) => setSearchMemberName(e)}
            inbox={true}
            searchMemberName={searchMemberName}
          />
        </Box>

        <Grid container sx={{ width: 1, pt: 5, minHeight: "87vh" }}>
          {!searchMemberName
            ? mails.map(({ name, hasNew, mailsNum }, index) => (
                <Grid item xs={6} key={index}>
                  <MailBox
                    hasNew={hasNew}
                    name={name}
                    id={index}
                    mailsNum={mailsNum}
                  ></MailBox>
                </Grid>
              ))
            : data
                .filter((obj) => {
                  return obj.name.includes(searchMemberName);
                })
                .map(({ name, hasNew, mailsNum }, index) => (
                  <Grid item xs={6} key={index}>
                    <MailBox
                      hasNew={hasNew}
                      name={name}
                      id={index}
                      mailsNum={mailsNum}
                    ></MailBox>
                  </Grid>
                ))}
        </Grid>
        {/* {loading && <h1>Loading...</h1>}
        {error && <p>Error!</p>} */}
        {/* {!searchMemberName ? (
          <div ref={loader}>
            <div>
              loader
              {page}
            </div>
          </div>
        ) : null} */}
        {/* {mails.length !== data.length ? <div ref={loader}></div> : <div></div>} */}
        {searchMemberName === "" ? (
          <Box ref={loader} sx={{ height: 10 }}></Box>
        ) : (
          <Box sx={{ height: 10 }}></Box>
        )}
        <Footer></Footer>
      </Box>
    </>
  );
}
