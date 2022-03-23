import { React, useState } from "react";
import { Box, Typography, Divider, IconButton, Button } from "@mui/material";

import { landingBoxStyle } from "./index";
import MenuList from "../components/menu/MenuList";
import SearchBox from "../components/user/SearchBox";
import UserCard from "../components/user/UserCard";
import StarIcon from "@mui/icons-material/Star";

function friends() {
  const [searchFriendId, setSearchFriendId] = useState("");
  const [searchMemberId, setSearchMemberId] = useState("");
  const [filterFavorite, setFilterFavorite] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

  const handleAddFriendClick = (e) => {
    e.preventDefault();
    setAddOpen(!addOpen);
  };

  const handleShowFavoriteClick = (e) => {
    e.preventDefault();
    setFilterFavorite(!filterFavorite);
  };

  const handleSearchMemberClick = (e) => {
    e.preventDefault();
    //검색 api
  };

  const userFriends = [
    {
      memberId: "10",
      email: "honggildong@gildong.com",
      name: "홍길동",
      favorite: 0,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
    {
      memberId: "11",
      email: "gogildong@gildong.com",
      name: "고길동",
      favorite: 1,
    },
  ];

  const incomingFriends = [
    {
      memberId: "20",
      email: "honggildong@gildong.com",
      name: "홍길동",
    },
    {
      memberId: "21",
      email: "gogildong@gildong.com",
      name: "고길동",
    },
    {
      memberId: "22",
      email: "gogildong@gildong.com",
      name: "고길동",
    },
  ];

  const searchedMembers = [
    {
      memberId: "20",
      email: "honggildong@gildong.com",
      name: "홍길동",
    },
    {
      memberId: "21",
      email: "gogildong@gildong.com",
      name: "고길동",
    },
    {
      memberId: "22",
      email: "gogildong@gildong.com",
      name: "고길동",
    },
  ];

  return (
    <Box sx={{ width: 420, mx: "auto" }}>
      <Box
        sx={{
          ...landingBoxStyle,
          justifyContent: "start",
          alignItems: "start",
          height: 1,
          minHeight: "100vh",
        }}
      >
        <MenuList />
        <Typography
          sx={{ mx: "2rem", my: "2rem" }}
          className="Dodum"
          variant="h5"
        >
          {addOpen ? "친구 추가" : "친구 목록"}
        </Typography>
        <Divider />
        {addOpen ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              width: 1,
            }}
          >
            <SearchBox
              id="searchMemberIdInput"
              label="아이디"
              width={225}
              onChange={(e) => setSearchMemberId(e)}
            />
            <Button
              sx={{ fontSize: 10, borderRadius: 2, height: 25, mr: "2rem" }}
              variant="contained"
              color="error"
              size="small"
              onClick={handleSearchMemberClick}
            >
              검색
            </Button>
          </Box>
        ) : (
          <SearchBox
            id="searchFriendIdInput"
            label="아이디 또는 이름"
            width={300}
            onChange={(e) => setSearchFriendId(e)}
          />
        )}

        <br />
        <Box sx={{ display: "flex", flexDirection: "column", mx: "1rem" }}>
          <Typography variant="span" className="Dodum">
            {addOpen ? "" : "들어온 친구 요청"}
          </Typography>

          {!addOpen ? (
            <>
              {incomingFriends
                .filter((obj) => {
                  return (
                    obj.name.includes(searchFriendId) ||
                    obj.email.includes(searchFriendId)
                  );
                })
                .map((obj, idx) => (
                  <UserCard obj={obj} idx={idx} key={idx} />
                ))}
              <Divider sx={{ mt: "1rem", width: 370 }} />
            </>
          ) : null}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "content-box",
            mx: "1rem",
            mt: "1rem",
            width: 0.9,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {addOpen ? null : (
              <IconButton
                size="small"
                onClick={(e) => handleShowFavoriteClick(e)}
                color={filterFavorite ? "warning" : "default"}
              >
                <StarIcon fontSize="inherit" />
                <Typography className="Batang"> 즐겨찾기</Typography>
              </IconButton>
            )}
          </Box>
          <IconButton onClick={(e) => handleAddFriendClick(e)}>
            <Typography className="Batang">
              {addOpen ? "친구 목록" : "친구 추가"}
            </Typography>
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mx: "1rem" }}>
          {!addOpen
            ? userFriends
                .filter((obj) => {
                  if (filterFavorite) {
                    return (
                      obj.favorite &&
                      (obj.name.includes(searchFriendId) ||
                        obj.email.includes(searchFriendId))
                    );
                  } else {
                    return (
                      obj.name.includes(searchFriendId) ||
                      obj.email.includes(searchFriendId)
                    );
                  }
                })
                .map((obj, idx) => <UserCard obj={obj} idx={idx} key={idx} />)
            : searchedMembers
                .filter((obj) => {
                  return obj.email.includes(searchMemberId);
                })
                .map((obj, idx) => <UserCard obj={obj} idx={idx} key={idx} />)}

          <Divider sx={{ mt: "2rem" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default friends;
