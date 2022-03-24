import React, { useContext } from "react";
import ContentsContext from "../../contexts/ContentsContext";
import Header from "../../components/write/header";
import Photocard from "../../components/recommend/photocard";
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
  const { type } = useContext(ContentsContext);

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
      {type==="postcard" ? (<Photocard></Photocard>) : (type==="normal" ? () : () )}
    </Box>
  );
};
export default Recommended;
