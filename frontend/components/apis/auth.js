import axios from "axios";
import { BASE_URL } from "./config";

export const userApi = axios.create({
  baseURL: `${BASE_URL}`,
});

axios.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = "Bearer " + accessToken;
    }
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export const email = async (userEmail) => {
  return await userApi.post(`/members/email`, {
    email: userEmail,
  });
};
