import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBtn = styled(Button)(() => ({
  minWidth: "200px",
  minHeight: "30px",
  backgroundColor: "#E2E0A5",
  color: "#3A1D1D",
  marginTop: "1rem",
  fontFamily: "Gowun Batang",
  "&:hover": {
    backgroundColor: "#f6f4b2",
  },
}));
export default function ConfirmBtn({ onClick }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <StyledBtn variant="contained" size="small" onClick={onClick}>
        확인
      </StyledBtn>
    </Box>
  );
}
