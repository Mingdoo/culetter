import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { Box, Slider } from "@mui/material";
export default function Crop() {
  const [imageSrc, setImageSrc] = useState(
    "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
  );
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [aspect, setAspect] = useState(1);

  // state = {
  //   crop: { x: 0, y: 0 },
  //   zoom: 1,
  //   aspect: 1,
  // };

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedAreaPixels.width / croppedAreaPixels.height);
  };

  const onZoomChange = (zoom) => {
    console.log(zoom);
    setZoom(zoom);
  };

  return (
    <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: "80px",
        }}
      >
        <Cropper
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          cropShape="round"
          showGrid={false}
          onCropChange={onCropChange}
          onCropComplete={onCropComplete}
          onZoomChange={onZoomChange}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          transform: "translateX(-50%)",
          left: "50%",
          width: "50%",
          bottom: 0,
          height: "80px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Slider
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e, zoom) => onZoomChange(zoom)}
          classes={{ container: "slider" }}
          sx={{ padding: "22px 0px" }}
        />
      </Box>
    </Box>
  );
}
