import React, { useEffect, useState, useRef, useCallback } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import MenuList from "../../components/menu/MenuList";
import axios from "axios";
import useFetch from "../../hooks/inbox";

const SERVER_URL = "https://j6a201.p.ssafy.io:3000";
const token = "temp";

export default function inbox() {
  // 왜 0으로 시작하는 지는 찾아야 함
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  // 통신으로 받은 데이터
  const [data, setData] = useState([]);
  // 보여주는 데이터 (스크롤!)
  const [mails, setMails] = useState([]);
  // const { loading, error, list } = useFetch(query, page);

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const loader = useRef(null);

  const fetchMails = useCallback(async () => {
    try {
      setError(false);
      setMails(null);
      // setLoading(true);

      const res = await axios.get(`${SERVER_URL}/recv`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(res.data);
    } catch (e) {
      console.log(e);
      // setError(e);
    } finally {
      // setMails([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
      setData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
      // setLoading(false);
    }
  });
  // 최초 한 번 시도해본다!
  useEffect(() => {
    fetchMails();
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
    setMails(data.slice(0, page * 8));
    console.log(mails);
  }, [page]);

  // if (loading) return <div>로딩중...</div>;
  // if (error) return <div>에러가 발생했습니다.</div>;

  // if (!mails) return null;

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
        {data}
        {mails}
        <Grid container sx={{ width: 1, px: 3, pt: 10 }}>
          {mails.map((text, index) => (
            <Grid item xs={6} key={index} wrap>
              <Box
                sx={{
                  width: "200px",
                  height: "200px",
                  bgcolor: "black",
                  m: 1,
                  color: "white",
                }}
              >
                {text}
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* {loading && <h1>Loading...</h1>}
        {error && <p>Error!</p>} */}
        <div ref={loader} />
      </Box>
    </>
  );
}
