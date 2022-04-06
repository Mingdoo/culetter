import axios from "axios";
import { BASE_URL } from "./config";

export const mailsApi = axios.create({
  baseURL: `${BASE_URL}/mails`,
});

mailsApi.interceptors.request.use(
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

export const sendLetter = async (body) => {
  console.log(body);
  return await mailsApi.post(`/write`, body);
};

export const test = async () => {
  return await axios.get(`${BASE_URL}/members`);
};

export const getMail = async (id) => {
  return await mailsApi.get(`/id/${id}`);
};

export const getMailByCode = async (code) => {
  return await mailsApi.get(`/code/${code}`);
};
