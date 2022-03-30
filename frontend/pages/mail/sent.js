import { Box, Typography, Grid } from "@mui/material";
import { React, useEffect, useState } from "react";

import MenuList from "../../components/menu/MenuList";
import Footer from "../../components/Footer";
import SearchBox from "../../components/user/SearchBox";
import Letter from "../../components/mail/sent/Letter";

import { getSendMail } from "../../components/apis/mailbox";

const tempData = [
  { name: "홍길동", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김정연", title: "서시", type: "POSTCARD", date: "20220323" },
  { name: "강민수", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김은송", title: "서시", type: "GENERAL", date: "20220323" },
  { name: "정유환", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김도현", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김경협", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "홍길동", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김정연", title: "서시", type: "POSTCARD", date: "20220323" },
  { name: "강민수", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김은송", title: "서시", type: "GENERAL", date: "20220323" },
  { name: "정유환", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김도현", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김경협", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "홍길동", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김정연", title: "서시", type: "POSTCARD", date: "20220323" },
  { name: "강민수", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김은송", title: "서시", type: "GENERAL", date: "20220323" },
  { name: "정유환", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김도현", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김경협", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "홍길동", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김정연", title: "서시", type: "POSTCARD", date: "20220323" },
  { name: "강민수", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김은송", title: "서시", type: "GENERAL", date: "20220323" },
  { name: "정유환", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김도현", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김경협", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "홍길동", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김정연", title: "서시", type: "POSTCARD", date: "20220323" },
  { name: "강민수", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김은송", title: "서시", type: "GENERAL", date: "20220323" },
  { name: "정유환", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김도현", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김경협", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "홍길동", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김정연", title: "서시", type: "POSTCARD", date: "20220323" },
  { name: "강민수", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김은송", title: "서시", type: "GENERAL", date: "20220323" },
  { name: "정유환", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김도현", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김경협", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "홍길동", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김정연", title: "서시", type: "POSTCARD", date: "20220323" },
  { name: "강민수", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김은송", title: "서시", type: "GENERAL", date: "20220323" },
  { name: "정유환", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김도현", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김경협", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "홍길동", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김정연", title: "서시", type: "POSTCARD", date: "20220323" },
  { name: "강민수", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김은송", title: "서시", type: "GENERAL", date: "20220323" },
  { name: "정유환", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김도현", title: "서시", type: "PHOTOCARD", date: "20220323" },
  { name: "김경협", title: "서시", type: "PHOTOCARD", date: "20220323" },
];

export default function mailSent() {
  const [searchName, setSearchName] = useState("");

  const fetch = async () => {
    try {
      const res = getSendMail();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  });

  return (
    <Box sx={{ width: 420, mx: "auto" }}>
      <Box
        sx={{
          width: 420,
          mx: "auto",
          bgcolor: "#FCFAEF",
          position: "relative",
          pb: 5,
          justifyContent: "start",
          alignItems: "start",
          height: 1,
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
          보낸 편지
        </Typography>
        <SearchBox
          id="searchNameInput"
          label="수신인 이름"
          width={320}
          onChange={(e) => setSearchName(e)}
        ></SearchBox>
        <Grid container sx={{ width: 1, pt: 1, px: 2 }}>
          {tempData
            .filter((obj) => {
              return obj.name.includes(searchName);
            })
            .map(({ type, name, title, date }, index) => (
              <Grid item xs={6} key={index} sx={{ width: 1, pt: 4 }}>
                <Letter
                  type={type}
                  name={name}
                  title={title}
                  date={date}
                  width={150}
                ></Letter>
              </Grid>
            ))}
        </Grid>
      </Box>
      <Footer></Footer>
    </Box>
  );
}
