import { Box } from "@mui/material";
export default function Letter() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          margin: 5,
        }}
      >
        <Box
          component="span"
          sx={{
            width: 136,
            height: 92,
            backgroundColor: "white",
            textAlign: "center",
            border: "1.5px solid black",
            position: "absolute",
            //   "inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255),0.3em 0.3em 1em rgba(0,0,0,0.3)",
          }}
        ></Box>
        <Box
          component="span"
          sx={{
            top: 2,
            left: 2,
            width: 132,
            height: 88,
            backgroundColor: "white",
            border: "1.5px solid black",
            position: "absolute",
            zIndex: 2,
          }}
        ></Box>
        {[55, 60, 65, 70].map((top) => (
          <Box
            sx={{
              top: { top },
              left: 75,
              width: 50,
              height: 0,
              borderTop: "1.5px solid black",
              position: "absolute",
              zIndex: 2,
            }}
          ></Box>
        ))}
      </Box>
    </>
  );
}
