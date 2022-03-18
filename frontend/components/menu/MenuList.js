import MenuListItem from "./MenuListItem";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";

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
          mt: 5,
          mb: 3,
          px: "16px",
        }}
      >
        [이름]
      </Box>
      <Divider></Divider>
      {[
        "홈",
        "편지 쓰기",
        "보낸 편지",
        "받은 편지",
        "작성중인 편지",
        "친구",
        "정보 수정",
        "로그아웃",
      ].map((text, index) => (
        <MenuListItem text={text} index={index} key={index}></MenuListItem>
      ))}
    </Box>
  );
}
