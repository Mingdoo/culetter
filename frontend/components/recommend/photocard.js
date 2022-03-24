import React from "react";

const photocard = () => {
  return (
    <Box sx>
      <Box component="div">
        <img
          width="200px"
          height="300px"
          src={"/img/photocard_front.png"}
          style={{
            borderRadius: "5%",
            animation: "rotate_image 5s linear infinite",
            transformOrigin: " 50% 50%",
          }}
        ></img>
      </Box>
      <Box component="div">
        <img
          width="200px"
          height="300px"
          src={"/img/photocard_front.png"}
          style={{
            borderRadius: "5%",
            animation: "rotate_image 5s linear infinite",
            transformOrigin: " 50% 50%",
          }}
        ></img>
        <Box>
          <Typography></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default photocard;
