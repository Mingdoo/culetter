import React from "react";
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

const photocard = () => {
  return (
    <Box classname="card">
      <Box component="div" className="front face">
        <img
          width="200px"
          height="300px"
          src={"/img/photocard_front.png"}
          style={{
            borderRadius: "5%",
            animation: "rotate_image 5s linear infinite",
            transformOrigin: " 50% 50%",
          }}
        ></img>
      </Box>
      <Box component="div" className="back face">
        <img
          width="200px"
          height="300px"
          src={"/img/photocard_back.png"}
          style={{
            borderRadius: "5%",
            animation: "rotate_image 5s linear infinite",
            transformOrigin: " 50% 50%",
          }}
        ></img>
        <Box>
          <Typography></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default photocard;
