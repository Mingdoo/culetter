import React, { useState } from "react";
import LoginForm from "../login/LoginForm";
import LoginBtn from "../login/LoginBtn";
import RegisterBtn from "../Register/RegisterBtn";
import RegisterForm from "../Register/RegisterForm";

import { Button, Grid, Box, Icon, SvgIcon, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const PostBox = (props) => {
  const { title } = props;
  return (
    <Box
      component="div"
      sx={{
        textAlign: "center",
        backgroundColor: "#FCFAEF",
        width: 420,
        height: "100vh",
        mx: "auto",
      }}
    >
      <Box
        component="div"
        sx={{
          mt: 12,
          width: 330,
          height: 330,
          backgroundColor: "#d3504a",
          borderRadius: "50%",
          textAlign: "center",
          display: "inline-block",
        }}
      >
        <Box
          component="div"
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "#d3504a",
            borderRadius: "50%",
            border: 2,
            display: "inline-block",
            mt: 1,
            borderColor: "#A63636",
          }}
        >
          <Typography
            variant="h4"
            color="#FFFFFF"
            align="center"
            sx={{ mt: 10, mb: 10, fontWeight: "100" }}
          >
            {title}
          </Typography>
        </Box>
        <Box component="div" sx={{ position: "absolute", top: 250 }}>
          <Box
            component="div"
            sx={{
              width: 330,
              height: 450,
              backgroundColor: "#d3504a",
            }}
          >
            <Box
              component="div"
              sx={{
                width: 300,
                height: 450,
                backgroundColor: "#d3504a",
                border: 2,
                borderColor: "#A63636",
                display: "inline-block",
              }}
            >
              <Box
                component="div"
                sx={{
                  width: 290,
                  height: 180,
                  backgroundColor: "#d3504a",
                  display: "inline-block",
                }}
              >
                {title === "LOGIN" ? (
                  <LoginForm></LoginForm>
                ) : (
                  <RegisterForm></RegisterForm>
                )}
              </Box>
              <Box>
                {title === "LOGIN" ? (
                  <LoginBtn></LoginBtn>
                ) : (
                  <RegisterBtn></RegisterBtn>
                )}
              </Box>
              {/* 우체통 디자인 */}
              <Box
                component="div"
                border={2}
                sx={{
                  height: 134,
                  width: 240,
                  display: "inline-block",
                  mt: 4.3,
                  borderColor: "#A63636",
                }}
              >
                <Box
                  component="div"
                  borderTop={2}
                  sx={{
                    height: 80,
                    width: 236,
                    display: "inline-block",
                    mt: 2,
                    borderBlockColor: "#A63636",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      height: 18,
                      width: 18,
                      display: "inline-block",
                      mt: 2,
                      backgroundColor: "#737373",
                      borderRadius: 50,
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        height: 25,
                        width: 7,
                        display: "inline-block",
                        mt: 2,
                        backgroundColor: "#737373",
                        borderRadius: 50,
                      }}
                    ></Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* 우체통 다리 */}
          <Box
            component="div"
            sx={{
              width: 70,
              display: "inline-block",
              backgroundColor: "#d3504a",
              borderLeft: 70,
              borderBottom: 60,
              borderBottomColor: "#d3504a",
              borderRight: 0,
              borderLeftColor: "#FCFAEF",
            }}
          ></Box>
          <Box
            component="div"
            border={2}
            sx={{
              height: 110,
              width: 100,
              display: "inline-block",
              backgroundColor: "#d3504a",
              borderColor: "#A63636",
            }}
          ></Box>
          <Box
            component="div"
            sx={{
              width: 70,
              display: "inline-block",
              backgroundColor: "#d3504a",
              borderLeft: 0,
              borderBottom: 60,
              borderBottomColor: "#d3504a",
              borderRight: 70,
              borderRightColor: "#FCFAEF",
            }}
          ></Box>
          {/* 우체통 다리 끝 */}
        </Box>
      </Box>
    </Box>
  );
};

export default PostBox;
