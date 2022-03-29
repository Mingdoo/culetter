import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const useStyles = makeStyles({
  root: {
    color: "#222222",
    backgroundColor: "",
    "&.Mui-focused": {
      color: "#222222",
    },
    "&:after": {
      // focused
      borderBottomColor: "#222222",
    },
  },
});

const useLabelStyles = makeStyles({
  root: {
    color: "#222222",
    "&.Mui-focused": {
      color: "#222222",
    },
    fontSize: 14,
  },
});

function SearchBox(props) {
  const [inboxSearch, setInboxSearch] = useState("");
  const classes = useStyles();
  const labelClasses = useLabelStyles();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        ml: "2rem",
        alignItems: "start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "start",
          width: "auto",
        }}
      >
        <SearchIcon sx={{ mr: 1, my: 0.5 }} />
        <TextField
          style={{ width: props.width }}
          id={props.id}
          label={props.label}
          variant="standard"
          onChange={
            props.inbox
              ? (e) => setInboxSearch(e.target.value)
              : (e) => props.onChange(e.target.value)
          }
          InputLabelProps={{
            style: { fontFamily: "Gowun Batang" },
            classes: labelClasses,
          }}
          value={props.inbox ? inboxSearch : ""}
          InputProps={{
            style: { fontFamily: "Gowun Batang" },
            classes: classes,
            endAdornment:
              props.inbox && inboxSearch ? (
                <IconButton
                  onClick={() => {
                    setInboxSearch("");
                    props.onChange("");
                  }}
                >
                  <HighlightOffRoundedIcon
                    sx={{ fontSize: "16px", color: "#e0e0e0" }}
                  ></HighlightOffRoundedIcon>
                </IconButton>
              ) : null,
          }}
        />
        {props.inbox ? (
          <Button
            variant="contained"
            size="small"
            className="Dodum"
            sx={{ backgroundColor: "#A63636", ml: 1.5 }}
            color="error"
            onClick={() => props.onChange(inboxSearch)}
          >
            검색
          </Button>
        ) : null}
      </Box>
    </Box>
  );
}

export default SearchBox;
