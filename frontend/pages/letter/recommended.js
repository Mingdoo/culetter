import React, { useContext, useState } from "react";
import ContentsContext from "../../contexts/ContentsContext";
import Header from "../../components/write/Header";
import Photocard from "../../components/recommend/Photocard";
import Postcard from "../../components/recommend/postcard";
import Normal from "../../components/recommend/Normal";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  ListItemIcon,
  Checkbox,
  Divider,
  Grid,
} from "@mui/material";
const Recommended = () => {
  //   const { type } = useContext(ContentsContext);
  const [type, setType] = useState("photocard");
  return (
    <Box
      component="div"
      sx={{
        width: 420,
        height: "100vh",
        mx: "auto",
        bgcolor: "#FCFAEF",
      }}
    >
      <Header title="" detail2="카드를 탭하면 카드가 뒤집힙니다" />
      {type === "photocard" ? (
        <Photocard></Photocard>
      ) : type === "normal" ? (
        <Normal></Normal>
      ) : (
        <Postcard></Postcard>
      )}
    </Box>
  );
};
export default Recommended;
