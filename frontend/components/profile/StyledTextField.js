import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@mui/material";
import Router from "next/router";

const useStyles = makeStyles({
  root: {
    fontFamily: "Gowun Batang",
    color: "#3A1D1D",
    "&.Mui-focused": {
      color: "#3A1D1D",
    },
    "&:before": {
      borderBottomColor: "#3A1D1D",
    },
    "&:hover:not(.Mui-focused):before": {
      borderBottomColor: "#3A1D1D",
    },
    "&:after": {
      borderBottomColor: "#3A1D1D",
    },
  },
});

const useLabelStyles = makeStyles({
  root: {
    fontFamily: "Gowun Batang",
    color: "#3A1D1D",
    "&.Mui-focused": {
      color: "#3A1D1D",
    },
    fontSize: 14,
  },
});

export default function StyledTextField({
  id,
  type,
  label,
  value,
  disabled,
  onChange,
  defaultValue,
}) {
  const classes = useStyles();
  const labelClasses = useLabelStyles();

  const toPwChange = (e) => {
    e.preventDefault();
    Router.push("/password");
  };
  return (
    <TextField
      autoComplete="off"
      variant="standard"
      size="small"
      id={id}
      label={label}
      type={type}
      value={value || ""}
      disabled={disabled}
      defaultValue={defaultValue}
      onChange={onChange ? onChange : null}
      sx={{ width: 1 }}
      InputLabelProps={{ classes: labelClasses }}
      InputProps={{
        classes: classes,
        endAdornment: disabled ? (
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#FCFAEF",
              color: "#3A1D1D",
              fontSize: "10px",
              fontFamily: "Gowun Dodum",
              "&:hover": {
                backgroundColor: "#FCFAEF",
              },
            }}
            onClick={toPwChange}
          >
            변경
          </Button>
        ) : null,
      }}
    ></TextField>
  );
}
