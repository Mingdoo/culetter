import {
  Box,
  Button,
  Icon,
  IconButton,
  Input,
  InputLabel,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import nomailbox from "../../public/img/nomailbox.PNG";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useState, useRef, useCallback, useEffect } from "react";
import { styled } from "@mui/material/styles";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import PropTypes from "prop-types";

export default function ImageCrop() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const res = {
    email: "ssafy@ssafy.com",
    name: "ssafy",
    // profileImage: { lpImg1 },
  };

  const [imgFile, setImgFile] = useState(null);

  const handleChangeFile = (event) => {
    // lastModified, name, size, type, webkitrelativepath
    // console.log(event.target.files[0]);
    // setImgFile(event.target.files[0]);
    // 1. 파일이 있다면 확인 & 파일 크기 확인하고 너무 크면 거절!

    // 2. 파일 크기 적당하면 크롭~
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      setImgFile(reader.result);
      // console.log(reader.result);
      // reader.result에 data:image/png;base64,~~ 형태로 담김
      // setImgFile(event.target.files[0]);
    };
  };

  const [croppedImageUrl, setCroppedImgUrl] = useState();
  const [imageRef, setImageRef] = useState(null);
  const [crop, setCrop] = useState({
    unit: "%",
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });

  const onCropChange = (crop, percentCrop) => setCrop(percentCrop);

  const onCropComplete = (crop) => makeClientCrop(crop);
  const onImageLoaded = (image) => setImageRef(image);
  const onImageLoad = (event) => {
    const { width, height } = event.currentTarget;

    const crop = centerCrop(
      makeAspectCrop(
        {
          // You don't need to pass a complete crop into
          // makeAspectCrop or centerCrop.
          unit: "%",
          width: 90,
        },
        16 / 9,
        width,
        height
      ),
      width,
      height
    );

    setCrop(crop);
  };
  const makeClientCrop = useCallback(async (crop) => {
    if (imageRef && crop.width && crop.height) {
      const croppedImg = await getCroppedImg(imageRef, crop, "newFile.jpeg");
      setCroppedImgUrl(croppedImg);
    }
  });

  const getCroppedImg = function (image, crop, fileName) {
    // const canvasRef = useRef(null);
    // const [canvasTag, setCanvasTag] = useState([]);

    // useEffect(() => {
    //   const canvas1 = canvasRef.current;
    //   canvas1.width = crop.width;
    //   canvas1.height = crop.height;

    //   setCanvasTag(canvas1);
    // }, []);

    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalWidth / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      // 원본 이미지 영역
      image, // 원본 이미지
      crop.x * scaleX, // 크롭한 이미지 x 좌표
      crop.y * scaleY, // 크롭한 이미지 y 좌표
      crop.width * scaleX, // 크롭한 이미지 가로 길이
      crop.height * scaleY, // 크롭한 이미지 세로 길이
      // 캔버스 영역
      0, // 캔버스에서 이미지 시작 x 좌표
      0, // 캔버스에서 이미지 시작 y 좌표
      crop.width, // 캔버스에서 이미지 가로 길이
      crop.height //  캔버스에서 이미지 세로 길이
    );
    return new Promise((resolve) => resolve(canvas.toDataURL()));
  };

  return (
    <Box>
      {/* 
      트위터: 업로드-400x400, 보이는 건 200 
      페북: 160
      인스타: 110
      */}
      <Box
        component="img"
        src={nomailbox.src}
        sx={{ width: 110, height: 110 }}
      ></Box>
      <IconButton>
        <InputLabel htmlFor="profileImg">
          <AddAPhotoIcon></AddAPhotoIcon>
        </InputLabel>
      </IconButton>
      {/* <Label for="profileImg">
          <AddAPhotoIcon></AddAPhotoIcon>
        </Label> */}
      <Input
        id="profileImg"
        sx={{ display: "none" }}
        // component="input"
        type="file"
        accept="image/*"
        onChange={handleChangeFile}
      ></Input>
      {/* <Box component="img" src={imgFile}></Box> */}
      {imgFile && (
        <ReactCrop
          src={imgFile}
          crop={crop}
          onImageLoaded={onImageLoaded}
          onComplete={onCropComplete}
          onChange={onCropChange}
          aspect={16 / 9}
        ></ReactCrop>
      )}
      <Box component="img" src={croppedImageUrl}></Box>
      <Box>test1</Box>
      <ReactCrop crop={crop} aspect={16 / 9}>
        <img src={imgFile} onLoad={onImageLoad}></img>
      </ReactCrop>
      <Box component="img" src={croppedImageUrl}></Box>
    </Box>
  );
}
