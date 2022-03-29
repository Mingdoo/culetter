import React, { useState, useContext } from "react";
import { Box, IconButton, Typography, Grid, Divider } from "@mui/material";
import MiniUserCard from "../../components/user/MiniUserCard";
import { landingBoxStyle } from "../index";
import SearchBox from "../../components/user/SearchBox";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ContentsContext from "../../contexts/ContentsContext";
import Router from "next/router";
import ReceiverButton from "../../components/letter/receiverButton";
import Header from "../../components/Header";

export default function select() {
  const { memberId, setMemberId } = useContext(ContentsContext);
  const handleShowFavoriteClick = (e) => {
    e.preventDefault();
    setFilterFavorite(!filterFavorite);
  };

  const handleSubmitMemberId = (e, obj) => {
    e.preventDefault();
    setMemberId(obj.memberId);
    Router.push("/letter/type");
  };

  const handlePrevClick = (e) => {
    e.preventDefault();
    if (receiver) {
      setReceiver("");
    } else {
      Router.push("/main");
    }
  };

  const userFriends = [
    {
      memberId: "1",
      email: "honggildong@gildong.com",
      name: "홍길동",
      favorite: 0,
    },
    {
      memberId: "2",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "3",
      email: "kimgildong@gildong.com",
      name: "김길동",
      favorite: 0,
    },
    {
      memberId: "4",
      email: "parkgildong@gildong.com",
      name: "박길동",
      favorite: 1,
    },
    {
      memberId: "5",
      email: "kanggildong@gildong.com",
      name: "강길동",
      favorite: 1,
    },
    {
      memberId: "6",
      email: "leegildong@gildong.com",
      name: "이길동",
      favorite: 1,
    },
    {
      memberId: "7",
      email: "godooly@dool2.com",
      name: "고둘리",
      favorite: 1,
    },
    {
      memberId: "8",
      email: "hongdooly@dool2.com",
      name: "홍둘리",
      favorite: 1,
    },
    {
      memberId: "9",
      email: "kimdooly@dool2.com",
      name: "김둘리",
      favorite: 1,
    },
    {
      memberId: "10",
      email: "leedooly@dool2.com",
      name: "이둘리",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "parkdooly@dool2.com",
      name: "박둘리",
      favorite: 1,
    },
    {
      memberId: "12",
      email: "godooly@dool2.com",
      name: "강둘리",
      favorite: 1,
    },
    {
      memberId: "13",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "14",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "15",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "16",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "17",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "18",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "19",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "20",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
  ];

  const [searchId, setSearchId] = useState("");
  const [filterFavorite, setFilterFavorite] = useState(false);
  const [receiver, setReceiver] = useState("");

  return (
    <>
      <Box
        sx={{
          width: 420,
          mx: "auto",
          ...landingBoxStyle,
          justifyContent: "start",
          height: 1,
          minHeight: "100vh",
        }}
      >
        <Header handlePrevClick={handlePrevClick} title="수신인 선택" />
        <Divider />

        {receiver !== "" ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                width: 1,
              }}
            >
              <SearchBox
                id="searchMemberIdInput"
                label="아이디"
                width={300}
                onChange={(e) => setSearchId(e)}
              />
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                width: 0.85,
                ml: "2rem",
                mt: "0.5rem",
              }}
            >
              <IconButton
                size="small"
                onClick={(e) => handleShowFavoriteClick(e)}
                color={filterFavorite ? "warning" : "default"}
              >
                <StarRoundedIcon fontSize="inherit" />
                <Typography sx={{ fontFamily: "Gowun Batang" }}>
                  {" "}
                  즐겨찾기
                </Typography>
              </IconButton>
            </Box>
            <>
              {userFriends
                .filter((obj) => {
                  if (filterFavorite) {
                    return (
                      (obj.favorite && obj.name.includes(searchId)) ||
                      (obj.favorite && obj.email.includes(searchId))
                    );
                  } else {
                    return (
                      obj.name.includes(searchId) ||
                      obj.email.includes(searchId)
                    );
                  }
                })
                .map((obj, idx) => (
                  <React.Fragment key={idx}>
                    <Box
                      onClick={(e) => handleSubmitMemberId(e, obj)}
                      sx={{ "&:hover": { cursor: "pointer" } }}
                    >
                      <MiniUserCard obj={obj} idx={idx} />
                    </Box>
                    <Divider sx={{ mt: "0.25rem", width: 300 }} />
                  </React.Fragment>
                ))}
            </>
            <Divider sx={{ mt: "2rem" }} />
          </>
        ) : (
          <>
            <Box sx={{ ml: "3rem", mt: "1rem", mb: "1rem", width: 0.85 }}>
              <Typography sx={{ fontFamily: "Gowun Dodum" }}>
                편지를 누구에게 보낼지 선택해주세요
              </Typography>
            </Box>
            <ReceiverButton
              title="친구에게 보내기"
              description="CU;LETTER에 가입한 친구에게 편지를 보낼 수 있습니다"
              target="member"
              onClick={setReceiver}
            />
            <Divider sx={{ my: "1rem" }} />
            <ReceiverButton
              title="링크 보내기"
              description="CU;LETTER에 가입하지 않은 친구에게 링크 전송을 통해 편지를 보낼 수 있습니다"
              target="anonymous"
              onClick={setReceiver}
            />
          </>
        )}
      </Box>
    </>
  );
}
