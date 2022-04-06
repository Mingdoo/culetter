import React, { useEffect, useState, useRef, useCallback } from "react";
import { Box, Grid } from "@mui/material";
// import mailsRecvAPI from "../../apis/mailbox";
import Postbox from "./Postbox";
import SearchBox from "../../user/SearchBox";
import { getRecvMails } from "../../apis/mailbox";
export default function PostboxPage({
  setIsPostBox,
  isPostBox,
  setSelectedId,
}) {
  // 무한 스크롤 보여주는 데이터 자르는 용도. 한 페이지 당 8개
  const [page, setPage] = useState(1);
  // 통신으로 받은 모든 데이터
  const [data, setData] = useState([]);
  // 보여주는 데이터 (스크롤)
  const [mails, setMails] = useState([]);
  const [searchMemberName, setSearchMemberName] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loader = useRef(null);

  const fetchMails = async () => {
    try {
      const res = await getRecvMails();
      setData(res.data.result);
      setMails(res.data.result.slice(0, 8));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMails();
  }, []);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    },
    [isPostBox]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    setMails(data.slice(0, page * 8));
  }, [page]);

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <SearchBox
          id="searchMemberNameInput"
          label="이름"
          width={225}
          onChange={(e) => setSearchMemberName(e)}
          inbox={true}
        />
      </Box>
      <Box sx={{ minHeight: "87vh", px: 2 }}>
        <Grid container sx={{ width: 1, pt: 5 }}>
          {!searchMemberName
            ? mails.map(({ name, count, sender_id }) => (
                <Grid item xs={6} key={sender_id} sx={{ height: 188 }}>
                  <Postbox
                    name={name}
                    senderId={sender_id}
                    count={count}
                    setSelectedId={(e) => setSelectedId(e)}
                    setIsPostBox={(e) => setIsPostBox(e)}
                  ></Postbox>
                </Grid>
              ))
            : data
                .filter((obj) => {
                  return obj.name.includes(searchMemberName);
                })
                .map(({ name, count, sender_id }) => (
                  <Grid item xs={6} key={sender_id}>
                    <Postbox
                      name={name}
                      senderId={sender_id}
                      count={count}
                      setSelectedId={(e) => setSelectedId(e)}
                      setIsPostBox={(e) => setIsPostBox(e)}
                    ></Postbox>
                  </Grid>
                ))}
        </Grid>
      </Box>
      {searchMemberName === "" ? (
        <Box ref={loader} sx={{ height: 10 }}></Box>
      ) : (
        <Box sx={{ height: 10 }}></Box>
      )}
    </Box>
  );
}
