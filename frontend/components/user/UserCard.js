import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import MailIcon from "@mui/icons-material/Mail";
import StarIcon from "@mui/icons-material/Star";

export default function UserCard(props) {
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
          <Typography className="Batang">{props.obj.name}</Typography>
          <Typography
            className="Batang"
            sx={{ fontSize: 12, textDecoration: "underline" }}
          >
            {props.obj.email}
          </Typography>
        </Box>
        {!props.obj.hasOwnProperty("favorite") ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mx: "auto",
            }}
          >
            <Button
              className="Batang"
              sx={{ fontSize: 10, borderRadius: 3, height: 25, mr: "0.5rem" }}
              variant="contained"
              color="error"
              size="small"
              startIcon={<PersonIcon />}
              onClick={(e) => HandleFriencAcceptClick(e, obj)}
            >
              수락
            </Button>
            <Button
              className="Batang"
              sx={{ fontSize: 10, borderRadius: 3, height: 25 }}
              variant="outlined"
              color="error"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={(e) => HandleFriencRejectClick(e, obj)}
            >
              거절
            </Button>
          </Box>
        ) : (
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
        )}
      </Box>
    </>
  );
}
const HandleFriencAcceptClick = (e, obj) => {
  e.preventDefault();
  // 그거
};

const HandleFriencRejectClick = (e, obj) => {
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
};

const handleFriendDeleteClick = (e, obj) => {
  e.preventDefault();
  // 그거그거 부분
};
