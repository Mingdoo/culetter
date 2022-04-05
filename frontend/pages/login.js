import React, { useState } from "react";
import LoginForm from "../components/login/LoginForm";
import LoginBtn from "../components/login/LoginBtn";
import Postbox from "../components/postbox/Postbox";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
const Login = () => {
  return (
    <>
      <Postbox title="LOGIN"></Postbox>;
      <ToastContainer />
    </>
  );
};

export default Login;
