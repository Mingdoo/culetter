import axios from "axios";
import { BASE_URL } from "./config";

export const usersApi = axios.create({
  baseURL: `${BASE_URL}/members`,
});

usersApi.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export const pwValidation = async (password) => {
  return await usersApi.post(`/pwcheck`, {
    password: password,
  });
};

export const getUserInfo = async () => {
  return await usersApi.get();
};

export const editUserInfo = async (body) => {
  return await axios.put('https://www.culetter.site/api/members',body, {
    headers: {
      "Content-Type": 'multipart/form-data',
      "Authorization": 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMiIsImF1dGgiOiJST0xFXzEiLCJleHAiOjE2NDkxNjY1NjZ9.47GLkHNoZUVNYb504TNiOkcePgOsMB4CyyCcO5byGsNNrHyX2X67oiG7jjxtQSC2bnwSUn0EHba8Mmh8p3z-ZA'
    }
  })
};

export const changePw = async (password) => {
  return await usersApi.patch(`/password`, {
    password: password,
  });
};

export const deleteUser = async () => {
  return await usersApi.delete();
};
