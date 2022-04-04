import { Box, Typography, Grid } from "@mui/material";
import { React, useEffect, useState } from "react";

import MenuList from "../../components/menu/MenuList";
import Footer from "../../components/Footer";
import SearchBox from "../../components/user/SearchBox";
import Letter from "../../components/mail/sent/Letter";
import ReadMail from "../../components/mail/inbox/ReadMail";
import { getSendMail } from "../../components/apis/mailbox";
import BackButton from "../../components/mail/inbox/BackButton";

const tempData = [];

export default function mailSent() {
  const [searchName, setSearchName] = useState("");
  const [mails, setMails] = useState([]);
  const [isRead, setIsRead] = useState(true);
  const [selectedMail, setSelectedMail] = useState(null);

  const fetch = async () => {
    try {
      const res = await getSendMail();
      console.log(res.data.result);
      setMails(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const readMail = function (id) {
    setIsRead(false);
    setSelectedMail(id);
  };

  useEffect(() => {
    fetch();
  }, []);

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
        {isRead ? null : (
          <BackButton sx={{ pt: 1 }} onClick={setIsRead}></BackButton>
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
          보낸 편지
        </Typography>
        {isRead ? (
          <Box>
            <SearchBox
              id="searchNameInput"
              label="수신인 이름"
              width={320}
              onChange={(e) => setSearchName(e)}
            ></SearchBox>
            <Grid container sx={{ width: 1, pt: 1, px: 2 }}>
              {!searchName
                ? mails.map(
                    (
                      {
                        created_date,
                        mail_id,
                        mail_type,
                        receiver_email,
                        receiver_name,
                        style_url,
                        title,
                      },
                      index
                    ) => (
                      <Grid item xs={6} key={index} sx={{ width: 1, pt: 4 }}>
                        <Letter
                          type={mail_type}
                          name={receiver_name}
                          title={title}
                          date={created_date}
                          width={150}
                          readMail={readMail}
                          mailId={mail_id}
                        ></Letter>
                      </Grid>
                    )
                  )
                : mails
                    .filter((obj) => {
                      return obj.receiver_name.includes(searchName);
                    })
                    .map(
                      (
                        {
                          created_date,
                          mail_id,
                          mail_type,
                          receiver_email,
                          receiver_name,
                          style_url,
                          title,
                        },
                        index
                      ) => (
                        <Grid item xs={6} key={index} sx={{ width: 1, pt: 4 }}>
                          <Letter
                            type={mail_type}
                            name={receiver_name}
                            title={title}
                            date={created_date}
                            width={150}
                            readMail={readMail}
                            mailId={mail_id}
                          ></Letter>
                        </Grid>
                      )
                    )}
            </Grid>
          </Box>
        ) : (
          <ReadMail selectedMail={selectedMail}></ReadMail>
        )}
      </Box>
      <Footer></Footer>
    </Box>
  );
}
