import { Box, Grid, IconButton, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState, useContext } from "react";

import LetterContext from "../../../contexts/LetterContext";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import ShareIcon from "@mui/icons-material/Share";
import "react-toastify/dist/ReactToastify.css";

export default function LinkShare() {
  const { mailCode } = useContext(LetterContext);
  const [isMobile, setIsMobile] = useState(true);

  const link = `https://cultter.site/${mailCode}`;

  useEffect(() => {
    setIsMobile(
      window.matchMedia("only screen and (max-width: 760px)").matches
    );
  }, []);

  const shareData = {
    title: "test",
    text: "test",
    url: "document.location.href",
  };

  const shareMobile = async () => {
    if (navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Something went wrong sharing the letter", error);
      }
    } else {
      console.log("cant share");
    }
  };

  const copyData = async () => {
    try {
      await navigator.clipboard.writeText(mailCode);
      console.log("copied!");
      toast("복사성공", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(`copy failed ${error}`);
    }
  };

  return (
    <Box>
      <Grid container sx={{ pl: 2 }}>
        <Grid item xs={10}>
          <TextField
            disabled
            id="linkShare"
            defaultValue={link}
            variant="standard"
            sx={{ color: "black", width: "100%" }}
          />
        </Grid>
        <Grid item xs={1}>
          {isMobile ? (
            <IconButton title="공유" onClick={shareMobile}>
              <ShareIcon />
            </IconButton>
          ) : null}
        </Grid>
        <Grid item xs={1}>
          <IconButton
            title="복사"
            component="span"
            onClick={copyData}
            sx={{ display: "flex" }}
          >
            <ContentCopyRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
      <ToastContainer
        toastStyle={{ backgroundColor: "#12121290", color: "white" }}
      />
    </Box>
  );
}
