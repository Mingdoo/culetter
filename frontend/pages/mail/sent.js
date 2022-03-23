import { Box, Typography, Grid } from "@mui/material";
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
        <Grid container sx={{ width: 1, pt: 2, px: 2 }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
            (test, index) => (
              <Grid item xs={6} wrap key={index} sx={{ width: 1, pt: 7 }}>
                <Letter width={150}></Letter>
              </Grid>
            )
          )}
        </Grid>
      </Box>
      <Footer></Footer>
    </Box>
  );
}
