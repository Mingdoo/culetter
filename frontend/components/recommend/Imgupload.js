import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Input, Typography, Button } from "@mui/material";
const Postcard = () => {
  const imgInputhandler = () => {};

  const imgInput = useRef();

  const [imgBase64, setImgBase64] = useState([]);
  const [imgFile, setImgFile] = useState(null);

  const [loaded, setLoaded] = useState(false);

  const handleClick = (event) => {
    console.log(imgInput.current);
    imgInput.current.click();

    const fileReader = new FileReader();

    console.log(event.target.files[0]);
    // if (event.target.files[0]) {
    //   setLoaded(true);
    //   fileReader.readAsDataURL(event.target.files[0]);
    // }

    // fileReader.onload = () => {
    //   setImgFile(event.target.files[0]);
    //   setLoaded(true);
    // };
  };

  useEffect(() => {
    console.log(imgFile);
  }, [imgFile]);

  return (
    <Box>
      <Button onClick={handleClick}> 이미지 업로드</Button>
      <Input
        inputRef={imgInput}
        type="file"
        id="input-img"
        accept="image/png, image/jpeg"
        // onChange={handleClick}
        style={{ display: "none" }}
      ></Input>
    </Box>
  );
};

export default Postcard;
