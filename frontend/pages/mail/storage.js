import { Box, Typography } from "@mui/material";
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useContext,
} from "react";
import { useRouter } from "next/router";
import MenuList from "../../components/menu/MenuList";
import Letter from "../../components/main/Letter";
import Photocard from "../../components/mail/inbox/Photocard";
import { getUndoneMail } from "../../components/apis/mailbox";
import { authentication } from "../../components/apis/auth";
import LetterContext from "../../contexts/LetterContext";
export default function Storage() {
  const [loading, setLoading] = useState(false);
  const [mails, setMails] = useState([]);
  const { setTempMailId } = useContext(LetterContext);
  const router = useRouter();

  const fetch = async () => {
    try {
      const response = await getUndoneMail();
      console.log(response.data.result);
      setMails(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePage = (id) => {
    setTempMailId(id);
    router.push(
      {
        pathname: "/letter/write",
        query: { tempId: id },
      },
      "/letter/write"
    );
    console.log(id);
  };

  useEffect(() => {
    authentication();
    fetch();
  }, []);

  return (
    <Box>
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
          sx={{
            display: "flex",
            justifyContent: "center",
            py: "3.5vh",
            fontSize: 28,
            fontFamily: "Gowun Dodum",
          }}
        >
          작성 중인 편지
        </Typography>
        {/* 받는 사람: sender_name
          created_date: 
          title: 
           */}
        {loading && <Typography>loading</Typography>}
        {mails &&
          mails.map(({ title, mail_Type, created_date, mail_id }, index) => {
            if (mail_Type === "PHOTOCARD") {
              return (
                <Photocard
                  title={title}
                  createdDate={created_date}
                  key={index}
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  handlePage={handlePage}
                  mailId={mail_id}
                ></Photocard>
              );
            } else if (mail_Type === "GENERAL") {
              return (
                <Letter
                  text={title}
                  index={0}
                  createdDate={created_date}
                  key={index}
                  handlePage={handlePage}
                  mailId={mail_id}
                ></Letter>
              );
            } else {
              return (
                <Letter
                  text={title}
                  index={1}
                  createdDate={created_date}
                  key={index}
                  handlePage={handlePage}
                  mailId={mail_id}
                ></Letter>
              );
            }
          })}
      </Box>
    </Box>
  );
}
