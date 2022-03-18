import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { Grid, TextField, FormControl } from "@mui/material";

const useStyles = makeStyles({
  root: {
    color: "#eeee",
    backgroundColor: "",
    "&.Mui-focused": {
      color: "#eeee",
      backgroundColor: "#d3504a",
    },
    "&:before": {
      borderBottomColor: "#eeee",
    },
    "&:hover:not(.Mui-focused):before": {
      borderBottomColor: "#eeee",
    },
    "&:after": {
      // focused
      borderBottomColor: "#eeee",
    },
  },
  input: {
    "&::selection": {
      backgroundColor: "lightgreen",
      color: "#eeee",
    },
  },
});
const useLabelStyles = makeStyles({
  root: {
    color: "#eeee",
    "&.Mui-focused": {
      color: "#eeee",
    },
    fontSize: 12,
  },
});

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {};
  const handleInput = (e) => {
    const { id, value } = e.target;
    setInput({
      ...input,
      [id]: value,
    });

    console.log(e.target.id, e.target.value);
  };

  const classes = useStyles();
  const labelClasses = useLabelStyles();

  return (
    <FormControl
      component="fieldset"
      variant="filled"
      color="#ffff"
      sx={{ mt: 3 }}
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        {/* 이메일 입력 */}
        <Grid item xs={12}>
          <AccountCircleIcon sx={{ position: "absolute", top: 15, left: 15 }} />
          <TextField
            id="email"
            label="이메일"
            type="email"
            autoComplete="off"
            autoFocus
            variant="standard"
            size="small"
            InputProps={{ classes: classes }}
            InputLabelProps={{
              classes: labelClasses,
            }}
            onChange={handleInput}
          />
        </Grid>
        {/* 비밀번호 입력 */}
        <Grid item xs={12}>
          <LockIcon sx={{ position: "absolute", top: 75, left: 15 }} />
          <TextField
            id="password"
            label="비밀번호"
            type="password"
            autoComplete="off"
            variant="standard"
            size="small"
            InputProps={{ classes: classes }}
            InputLabelProps={{
              classes: labelClasses,
            }}
            onChange={handleInput}
          />
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default LoginForm;
