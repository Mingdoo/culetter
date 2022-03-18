import MenuListItem from "./MenuListItem";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";

const icon = [];
const href = [];
export default function MenuList({ open }) {
  return (
    <Box
      sx={{
        height: 1,
        width: open ? 240 : 0,
        position: "absolute",
        "z-index": 1,
        top: 0,
        right: 0,
        bgcolor: "#a63636",
        overflow: "hidden",
        transition: "all 0.5s",
      }}
    >
      <Box
        sx={{
          color: "white",
          "white-space": "nowrap",
          // display: "flex",
          // justifyContent: "center",
          mt: 3,
          mb: 1,
        }}
      >
        [이름]님 안녕하세요
      </Box>
      <Divider></Divider>
      <MenuListItem
        text="홈"
        icon={<HomeRoundedIcon />}
        href="/"
      ></MenuListItem>
      <MenuListItem
        text="정보 수정"
        icon={<PersonIcon />}
        href="/"
      ></MenuListItem>
      <MenuListItem
        text="보낸 편지"
        icon={<MailIcon />}
        href="/write"
      ></MenuListItem>
      <MenuListItem
        text="받은 편지"
        icon={<MarkunreadMailboxOutlinedIcon />}
        href="/inbox"
      ></MenuListItem>
      <MenuListItem
        text="작성중인 편지"
        icon={<BorderColorRoundedIcon />}
        href="/process"
      ></MenuListItem>
      <MenuListItem
        text="친구"
        icon={<PeopleAltRoundedIcon />}
        href="/friends"
      ></MenuListItem>
      <MenuListItem
        text="로그아웃"
        icon={<LogoutIcon />}
        href="/"
      ></MenuListItem>
    </Box>
  );
}
