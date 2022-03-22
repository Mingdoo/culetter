import React, { useContext } from "react";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentsContext from "../../contexts/ContentsContext";
import { ToastContainer, toast } from "react-toastify";

const nextPage = (props) => {
  const { href } = props;
  const { textValid } = useContext(ContentsContext);
  return (
    <Box
      component="div"
      sx={{
        pt: "2rem",
        mb: "1rem",
        mr: "1rem",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      {textValid ? (
        <Link href={`/${href}`}>
          <Typography
            variant="p"
            component="span"
            className="Gowun Batang"
            sx={{ mr: "0.5rem", color: "#000000" }}
          >
            다음
          </Typography>
        </Link>
      ) : (
        <Typography
          variant="p"
          component="span"
          className="Gowun Batang"
          sx={{ mr: "0.5rem", color: "#C6C6C6" }}
          onClick={() => {
            toast.error(
              <div style={{ width: "330px" }}>
                <div>제목 또는 내용을 확인해주세요</div>
              </div>,
              {
                position: toast.POSITION.TOP_CENTER,
                role: "alert",
              }
            );
          }}
        >
          다음
        </Typography>
      )}
      <ArrowForwardIosIcon />
      <ToastContainer />
    </Box>
  );
};

export default nextPage;
