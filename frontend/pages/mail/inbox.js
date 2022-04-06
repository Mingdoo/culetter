import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";

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
  const [isMail, setIsMail] = useState(true);

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
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
          sx={{ width: 420 }}
        >
          <Grid item xs={3}>
            {isPostBox ? (
              <Box sx={{ m: "1rem" }}></Box>
            ) : (
              <Box sx={{ m: "1rem" }}>
                <BackButton
                  onClick={isMail ? setIsPostBox : setIsMail}
                ></BackButton>
              </Box>
            )}
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                m: "1rem",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontFamily: "Gowun Dodum",
                }}
              >
                받은 편지
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <MenuList></MenuList>

        {loading ? <div>loading...</div> : null}
        {isPostBox ? (
          <PostboxPage
            setIsPostBox={(e) => setIsPostBox(e)}
            setSelectedId={(e) => setSelectedId(e)}
            isPostBox={isPostBox}
          ></PostboxPage>
        ) : (
          <MailPage
            senderId={selectedId}
            isMail={isMail}
            setIsMail={setIsMail}
          ></MailPage>
        )}
      </Box>
      <Footer></Footer>
    </>
  );
}
