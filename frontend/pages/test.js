import { Box, IconButton, InputLabel, Input, FormControl } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useEffect, useState } from "react";
import { getUserInfo, editUserInfo } from "../components/apis/profile";
import axios from "axios";
import fetch from "node-fetch";
export default function test() {
  const [profileImage, setProfileImage] = useState();
  const onClickUploadFile = function (e) {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const onClickUpdate = function () {
    const userInfo = {
      name: "이름바꿈",
    };
    const formData = new FormData();
    formData.append(
      "info",
      new Blob([JSON.stringify(userInfo)], { type: "application/json" })
    );
    formData.append("profileImage", profileImage);
    console.log(">>>>>>>>", formData.get("info"));
    axios
      .put("https://www.culetter.site/api/members", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMiIsImF1dGgiOiJST0xFXzEiLCJleHAiOjE2NDkxNjY1NjZ9.47GLkHNoZUVNYb504TNiOkcePgOsMB4CyyCcO5byGsNNrHyX2X67oiG7jjxtQSC2bnwSUn0EHba8Mmh8p3z-ZA",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <input type="text" id="name" name="name" v-model="userName" />
      <input type="file" id="file" name="file" onChange={onClickUploadFile} />
      <button onClick={onClickUpdate}>저장</button>
    </>
  );
}
