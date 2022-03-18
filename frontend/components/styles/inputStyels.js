import { makeStyles } from "@material-ui/core/styles";

const InputStyle = () => {
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

  return <></>;
};

export default InputStyle;
