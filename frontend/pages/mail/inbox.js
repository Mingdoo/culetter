import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import MenuList from "../../components/menu/MenuList";
import Footer from "../../components/Footer";
import BackButton from "../../components/mail/inbox/BackButton";
import MailPage from "../../components/mail/inbox/MailPage";
import PostboxPage from "../../components/mail/inbox/PostboxPage";
import { authentication } from "../../components/apis/auth";

export default function inbox() {
  useEffect(() => {
    authentication();
  }, []);
  const [isPostBox, setIsPostBox] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

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
        {/* 뒤로가기 링크 수정 필요 */}
        {isPostBox ? null : (
          <BackButton
            sx={{ pt: 1 }}
            setIsPostBox={(e) => setIsPostBox(e)}
          ></BackButton>
        )}
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
        {isPostBox ? (
          <PostboxPage
            setIsPostBox={(e) => setIsPostBox(e)}
            setSelectedId={(e) => setSelectedId(e)}
            isPostBox={isPostBox}
          ></PostboxPage>
        ) : (
          <MailPage senderId={selectedId}></MailPage>
        )}
        <Footer></Footer>
      </Box>
    </>
  );
}
