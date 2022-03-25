import {
  Box,
  Typography,
  Button,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import PasswordCheck from "../components/profile/PasswordCheck";
import axios from "axios";

export default function Profile() {
  return (
    <Box sx={{ mt: 10, ml: 10 }}>
      <PasswordCheck></PasswordCheck>
    </Box>
  );
}
