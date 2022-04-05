import React, { useState } from "react";
import LoginForm from "../components/login/LoginForm";
import LoginBtn from "../components/login/LoginBtn";
import Postbox from "../components/postbox/Postbox";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        width: 420,
        height: "100vh",
        mx: "auto",
        backgroundColor: "#FCFAEF",
      }}
    >
      <Postbox title="LOGIN"></Postbox>
    </Box>
  );
};

export default Login;
