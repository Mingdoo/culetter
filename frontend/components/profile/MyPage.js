import { Box } from "@mui/material";
import lpImg1 from "../../public/img/lpImg1.png";

export default function MyPage() {
  const res = {
    email: "ssafy@ssafy.com",
    name: "ssafy",
    profileImage: "file_dir",
  };

  return (
    <Box>
      <Box component="img" src={res.profileImage}></Box>
    </Box>
  );
}
