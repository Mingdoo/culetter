import MenuListItem from "./MenuListItem";
import { Box } from "@mui/material";
import MenuButton from "./MenuButton";
import { useEffect, useState } from "react";

export default function MenuList() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const HandleMenu = () => (open ? setOpen(false) : setOpen(true));

  useEffect(() => {
    setName(localStorage.getItem("name"));
  });
  return (
    <>
      <MenuButton HandleMenu={HandleMenu} open={open}></MenuButton>
      <Box
        sx={{
          height: 1,
          width: open ? 240 : 0,
          position: "absolute",
          zIndex: 2,
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
            whiteSpace: "nowrap",
            // display: "flex",
            // justifyContent: "center",
            mt: 4,
            pb: 2,
            px: "16px",
            borderBottom: 1,
          }}
        >
          [{name}]
        </Box>
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
    </>
  );
}
