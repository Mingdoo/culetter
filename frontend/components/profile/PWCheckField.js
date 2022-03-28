import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function PWCheckField({
  pwInput,
  setPwInput,
  pwCheck,
  setPwCheck,
  withBtn,
}) {
  const [pwMsg, setPwMsg] = useState(true);

  // 이상함!!!!
  const pwValidationCheck = (e) => {
    setPwInput(e.target.value);
    const pwdPattern =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    if (!pwdPattern.test(pwInput)) {
      setPwCheck(false);
      setPwMsg("8 ~ 20자 영어, 숫자, 특수문자의 조합");
    } else {
      setPwCheck(true);
      setPwMsg("");
    }
  };
  // const useLabelStyles = makeStyles({
  //   root: {
  //     color: "#eeee",
  //     "&.Mui-focused": {
  //       color: "#eeee",
  //     },
  //     fontSize: 14,
  //   },
  // });
  // const labelClasses = useLabelStyles();
  return (
    <Box>
      <Grid container>
        <Grid item xs={1} sx={{ display: "flex", alignItems: "flex-end" }}>
          <LockIcon sx={{ color: "white", mr: 1, my: 0.5 }}></LockIcon>
        </Grid>
        <Grid item xs={11} sx={{ pl: 1 }}>
          <TextField
            InputLabelProps={{
              style: { fontFamily: "Gowun Batang" },
              // classes: labelClasses,
            }}
            sx={{ width: 1 }}
            disabled={withBtn ? true : false}
            id="password"
            type="password"
            label="비밀번호"
            variant="standard"
            defaultValue={pwInput}
            onChange={(e) => pwValidationCheck(e)}
            className="Batang"
            InputProps={{
              endAdornment: withBtn ? (
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#FCFAEF",
                    color: "#3A1D1D",
                    fontSize: "10px",
                    fontFamily: "Gowun Dodum",
                  }}
                >
                  변경
                </Button>
              ) : null,
            }}
          ></TextField>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={10}>
          {/* {console.log(pwCheck)} */}
          {pwCheck ? null : (
            <Typography
              component="p"
              sx={{
                fontSize: 11,
                color: "#E2E0A5",
                fontFamily: "Gowun Batang",
                marginBottom: "3px",
              }}
            >
              {pwMsg}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
