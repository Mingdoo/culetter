import React, { useState } from "react";
import LoginForm from "../components/login/LoginForm";
import LoginBtn from "../components/login/LoginBtn";
import Postbox from "../components/postbox/Postbox";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@mui/material";

const Login = () => {
  return (
    <Box sx={{ width: 420, mx: "auto" }}>
      <Postbox title="LOGIN"></Postbox>;
    </Box>
  );
};

export default Login;
