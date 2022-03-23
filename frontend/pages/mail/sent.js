import { Box, Typography } from "@mui/material";
import MenuList from "../../components/menu/MenuList";
import Footer from "../../components/Footer";
import SearchBox from "../../components/user/SearchBox";
import Letter from "../../components/sent/Letter";
export default function mailSent() {
  return (
    <Box sx={{ width: 420, mx: "auto" }}>
      <Box
        sx={{
          width: 420,
          mx: "auto",
          bgcolor: "#FCFAEF",
          position: "relative",
          pb: 5,
          justifyContent: "start",
          alignItems: "start",
          height: 1,
          minHeight: "100vh",
        }}
      >
        <MenuList></MenuList>
        <Typography
          variant="h4"
          className="Dodum"
          sx={{
            display: "flex",
            justifyContent: "center",
            py: "3.5vh",
            fontSize: 28,
          }}
        >
          보낸 편지
        </Typography>
        <SearchBox width={250}></SearchBox>
        <Box>
          <Letter></Letter>
          <Letter></Letter>
        </Box>
      </Box>
      <Footer></Footer>
    </Box>
  );
}
