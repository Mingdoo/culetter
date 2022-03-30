import axios from "axios";
import { BASE_URL } from "./config";

export const api = axios.create({
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

const getAuthCode = async (body) => {
  const result = await api.post(`/members/email`, body);
  return result;
};

const getConfirmAuthCode = async (body) => {
  const result = await api.post(`/members/email/check`, body);
  return result;
};

const getRegister = async (body) => {
  const result = await api.post(`/members`, body);
  return result;
};

const UserApi = {
  getAuthCode,
  getConfirmAuthCode,
  getRegister,
};

export default UserApi;
