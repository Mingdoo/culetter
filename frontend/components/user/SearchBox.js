import React from "react";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        mx: "2rem",
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
          style={{ width: 300 }}
          id={props.id}
          label="아이디 또는 이름"
          variant="standard"
          onChange={(e) => props.onChange(e.target.value)}
          InputLabelProps={{
            style: { fontFamily: "Gowun Batang" },
          }}
          InputProps={{ style: { fontFamily: "Gowun Batang" } }}
        />
      </Box>
    </Box>
  );
}

export default SearchBox;
