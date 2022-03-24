import React, { useContext } from "react";
import Link from "next/Link";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentsContext from "../../contexts/ContentsContext";
import { ToastContainer, toast } from "react-toastify";

const nextPage = (props) => {
  const { href, title } = props;
  const { textValid, musicSelected } = useContext(ContentsContext);
  return (
    <Box
      component="div"
      sx={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      {title === "편지쓰기" ? (
        !textValid ? (
          <Typography
            variant="p"
            component="span"
            className="Gowun Batang"
            sx={{ mr: "0.5rem", color: "#C6C6C6" }}
            onClick={() => {
              toast.error(
                <div style={{ width: "100%", fontSize: "1rem" }}>
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
        ) : (
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
        )
      ) : title === "편지와 어울리는 노래" ? (
        musicSelected ? (
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
                <div style={{ width: "100%", fontSize: "1rem" }}>
                  <div>음악을 선택해주세요</div>
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
        )
      ) : null}
      <ArrowForwardIosIcon />
      <ToastContainer />
    </Box>
  );
};

export default nextPage;
