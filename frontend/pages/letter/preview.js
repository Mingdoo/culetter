import { Box, Button, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";

import ContentsContext from "../../contexts/ContentsContext";
import Header from "../../components/write/header";
import MiniPlayer from "../../components/letter/preview/MiniPlayer";

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
`;
const StyledButton = styled(Button)`
  background-color: none;
  &:hover {
    background-color: #fcfaef;
  }
  && .MuiTouchRipple-child {
    background-color: #e2e0a5;
  }
  && .MuiTouchRipple-rippleVisible {
    opacity: 0.5;
    animation-name: ${enterKeyframe};
    animation-duration: 550ms;
    animation-timing-function: ${({ theme }) =>
      theme.transitions.easing.easeInOut};
  }
`;

export default function Preview() {
  // const { musicSelected } = useContext(ContentsContext);

  return (
    <Box
      component="div"
      sx={{
        width: 420,
        minHeight: "100vh",
        mx: "auto",
        bgcolor: "#FCFAEF",
      }}
    >
      <Header title="미리보기"></Header>
      {/* 내용은 저장하고 가는 게 아니라 다시 받아오는가 */}
      <Box
        className="Batang"
        sx={{
          height: 600,
          width: 400,
          backgroundColor: "white",
          mx: "auto",
          overflow: "auto",
          px: 1,
          py: 2.5,
          position: "relative",
          mb: 4,
        }}
      >
        미리보기 편지 형식으로 제공 미리보기 편지 형식으로 제공 미리보기 편지
        형식으로 제공 미리보기 편지 형식으로 제공 미리보기 편지 형식으로 제공
        미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공 미리보기 편지
        형식으로 제공 미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공
        미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공미리보기 편지
        형식으로 제공미리보기 편지 형식으로 제공미리보기 편지 형식으로
        제공미리보기 편지 형식으로 제공미리보기 편지 형식으로 제공
      </Box>
      <MiniPlayer></MiniPlayer>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <StyledButton color="inherit" className="Batang" sx={{ fontSize: 18 }}>
          편지 전송
        </StyledButton>
      </Box>
    </Box>
  );
}
