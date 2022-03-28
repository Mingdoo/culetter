import TestProfile from "../components/profile/TestProfile";
import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Divider, InputLabel, Input, Box } from "@mui/material";
import CropEasy from "../components/crop/CropEasy";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Close from "@mui/icons-material/Close";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [imgFile, setImgFile] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleChangeFile = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => setImgFile(reader.result);
    // if (imgFile) {
    handleClickOpen();
    // }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="outlined">
        <InputLabel htmlFor="profileImg">
          <AddAPhotoIcon></AddAPhotoIcon>
        </InputLabel>
      </Button>
      <Input
        id="profileImg"
        sx={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={handleChangeFile}
      ></Input>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
          <IconButton aria-label="Close" onClick={handleClose}>
            <Close></Close>
          </IconButton>
        </DialogTitle>
        <CropEasy photoURL={imgFile}></CropEasy>
      </Dialog>
      <Divider sx={{ mt: 10 }}></Divider>
    </Box>
  );
}
