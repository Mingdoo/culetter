import { React, useState, useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";

import { landingBoxStyle } from "./index";
import MenuList from "../components/menu/MenuList";
import SearchBox from "../components/user/SearchBox";
import UserCard from "../components/user/UserCard";

function friends() {
  const [searchId, setSearchId] = useState("");
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
  ];

  const incomingFriends = [
    {
      memberId: "1",
      email: "honggildong@gildong.com",
      name: "홍길동",
    },
    {
      memberId: "2",
      email: "gogildong@gildong.com",
      name: "고길동",
    },
    {
      memberId: "2",
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
        }}
      >
        <MenuList />
        <Typography
          sx={{ mx: "2rem", my: "2rem" }}
          className="Dodum"
          variant="h5"
        >
          친구 목록
        </Typography>
        <Divider />
        <SearchBox id="SearchIdInput" onChange={(e) => setSearchId(e)} />
        <br />
        <Box sx={{ display: "flex", flexDirection: "column", mx: "1rem" }}>
          <Typography variant="span" className="Dodum">
            들어온 친구 요청
          </Typography>

          {incomingFriends
            .filter((obj) => {
              return (
                obj.name.includes(searchId) || obj.email.includes(searchId)
              );
            })
            .map((obj, idx) => (
              <UserCard obj={obj} idx={idx} />
            ))}
          <Divider sx={{ mt: "1rem", width: 370 }} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mx: "1rem" }}>
          {userFriends
            .filter((obj) => {
              return (
                obj.name.includes(searchId) || obj.email.includes(searchId)
              );
            })
            .map((obj, idx) => (
              <UserCard obj={obj} idx={idx} />
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default friends;
