import { React } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import MailIcon from "@mui/icons-material/Mail";
import StarIcon from "@mui/icons-material/Star";
import { requestFriend, requestCancelFriend } from "../../components/apis/user";

export default function UserCard(props) {
  const HandleFriendRequestClick = (e, obj) => {
    requestFriend(obj.member_id)
      .then((res) => {
        if (res.status === 200) {
          const updatedMember = {
            member_id: obj.member_id,
            email: obj.email,
            name: obj.name,
            favorite: obj.favorite,
            friend_status: 1,
          };
          props.setSearchedMembers((searchedMembers) =>
            searchedMembers.map((member) =>
              member.member_id === obj.member_id ? updatedMember : member,
            ),
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const HandleFriendCancelClick = (e, obj) => {
    requestCancelFriend(obj.member_id).then((res) => {
      if (res.status === 200) {
        const updatedMember = {
          member_id: obj.member_id,
          email: obj.email,
          name: obj.name,
          favorite: obj.favorite,
          friend_status: 0,
        };
        props.setSearchedMembers((searchedMembers) =>
          searchedMembers.map((member) =>
            member.member_id === obj.member_id ? updatedMember : member,
          ),
        );
      }
    });
  };
  const responsiveButton = (user) => {
    switch (user.friend_status) {
      case 0:
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "end",
              mx: "auto",
              width: 140,
            }}
          >
            <Button
              sx={{
                fontSize: 10,
                borderRadius: 3,
                height: 25,
                mr: "0.5rem",
                fontFamily: "Gowun Batang",
              }}
              variant="contained"
              color="error"
              size="small"
              startIcon={<PersonIcon />}
              onClick={(e) => HandleFriendRequestClick(e, props.obj)}
            >
              친구 요청
            </Button>
          </Box>
        );

      case 1:
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "end",
              mx: "auto",
              width: 140,
            }}
          >
            <Button
              sx={{
                fontSize: 10,
                borderRadius: 3,
                height: 25,
                mr: "0.5rem",
                fontFamily: "Gowun Batang",
              }}
              variant="outlined"
              color="error"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={(e) => HandleFriendCancelClick(e, props.obj)}
            >
              요청 취소
            </Button>
          </Box>
        );
        break;
      case 2:
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              mx: "auto",
            }}
          >
            <Button
              sx={{
                fontSize: 10,
                borderRadius: 3,
                height: 25,
                mr: "0.5rem",
                fontFamily: "Gowun Batang",
              }}
              variant="contained"
              color="error"
              size="small"
              startIcon={<PersonIcon />}
              onClick={(e) => HandleFriendAcceptClick(e, props.obj)}
            >
              수락
            </Button>
            <Button
              sx={{
                fontSize: 10,
                borderRadius: 3,
                height: 25,
                fontFamily: "Gowun Batang",
              }}
              variant="outlined"
              color="error"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={(e) => HandleFriendRejectClick(e, props.obj)}
            >
              거절
            </Button>
          </Box>
        );
        break;
      case 3:
        return (
          <Box
            sx={{
              ml: "1rem",
              display: "flex",
              flexDirection: "row",
              alignContent: "start",
            }}
          >
            <IconButton size="" onClick={(e) => handleMailClick(e, props.obj)}>
              <MailIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              size=""
              onClick={(e) => handleFriendFavoriteClick(e, props.obj)}
              color={props.obj.favorite ? "warning" : "default"}
            >
              <StarIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              size=""
              onClick={(e) => handleFriendDeleteClick(e, props.obj)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Box>
        );
        break;
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: "1rem",
        }}
      >
        <AccountCircleIcon
          sx={{ mx: "1rem", alignSelf: "center", fontSize: 35 }}
        />
        <Box
          sx={{
            width: 170,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontFamily: "Gowun Batang" }}>
            {props.obj.name}
          </Typography>
          <Typography
            sx={{
              fontSize: 12,
              textDecoration: "underline",
              fontFamily: "Gowun Batang",
            }}
          >
            {props.obj.email}
          </Typography>
        </Box>
        {responsiveButton(props.obj)}
      </Box>
    </>
  );
}
const HandleFriendAcceptClick = (e, obj) => {
  e.preventDefault();
  // 그거
};

const HandleFriendRejectClick = (e, obj) => {
  e.preventDefault();
  // 그으거
};

const handleMailClick = (e, obj) => {
  e.preventDefault();
  // 메일 보내기 로직 들어가는 부분
  console.log(obj.memberId);
};

const handleFriendFavoriteClick = (e, obj) => {
  e.preventDefault();
  // 그거 부분
  console.log(obj.memberId);
};

const handleFriendDeleteClick = (e, obj) => {
  e.preventDefault();
  // 그거그거 부분
  console.log(obj.memberId);
};
