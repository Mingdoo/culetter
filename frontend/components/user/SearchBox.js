import React from "react";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/core/styles";

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
          onChange={(e) => props.onChange(e.target.value)}
          InputLabelProps={{
            style: { fontFamily: "Gowun Batang" },
            classes: labelClasses,
          }}
          InputProps={{
            style: { fontFamily: "Gowun Batang" },
            classes: classes,
          }}
        />
      </Box>
    </Box>
  );
}

export default SearchBox;
