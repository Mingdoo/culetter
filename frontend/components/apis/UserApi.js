import axios from "axios";
import { BASE_URL } from "./config";

export const userApi = axios.create({
  baseURL: `${BASE_URL}`,
});

const API_URL = "http://j6a201.p.ssafy.io:8080/api";

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

const getAuthCode = async (body) => {
  const result = await userApi.post(`${API_URL}/members/email`, body);
  return result;
};

const UserApi = {
  getAuthCode,
};

export default UserApi;
