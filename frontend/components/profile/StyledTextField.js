import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@mui/material";

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
}) {
  const classes = useStyles();
  const labelClasses = useLabelStyles();

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
      onChange={onChange ? onChange : null}
      sx={{ width: 1 }}
      InputLabelProps={{ classes: labelClasses }}
      InputProps={{ classes: classes }}
    ></TextField>
  );
}
