import axios from "axios";
// import { BASE_URL } from "./config";

const BASE_URL = "https://www.culetter.site/api";
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
  console.log("get user");
  return await usersApi.get();
};

export const editUserInfo = async (name, profileImage) => {
  console.log("api", name, profileImage);
  return await axios.put(`https://www.culetter.site/api/members`, {
    info: { name: name },
    profileImage: profileImage,
  });
};

export const changePw = async (password) => {
  return await usersApi.patch(`/password`, {
    password: password,
  });
};

export const deleteUser = async () => {
  return await usersApi.delete();
};
