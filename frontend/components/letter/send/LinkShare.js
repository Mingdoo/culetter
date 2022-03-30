import { Box, Grid, IconButton, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import ShareIcon from "@mui/icons-material/Share";
import "react-toastify/dist/ReactToastify.css";

export default function LinkShare() {
  const [linkShared, setLinkShared] = useState(
    "http://localhost:3000/letter/send"
  );
  const [isMobile, setIsMobile] = useState(true);

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
        console.log("successfully shared");
      } catch (err) {
        console.error("Something went wrong sharing the blog", error);
      }
    } else {
      console.log("cant share");
    }
  };

  const copyData = async () => {
    try {
      await navigator.clipboard.writeText(linkShared);
      console.log("copied!");
      toast("복사성공", {
        position: "top-right",
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
      <Grid container sx={{ px: 2 }}>
        <Grid item xs={10}>
          <TextField
            disabled
            id="linkShare"
            defaultValue={linkShared}
            variant="standard"
            sx={{ color: "black", width: "100%" }}
          />
        </Grid>
        {isMobile ? (
          <Grid item xs={1}>
            <IconButton title="공유" onClick={shareMobile}>
              <ShareIcon />
            </IconButton>
          </Grid>
        ) : null}
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
