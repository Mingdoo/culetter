import axios from "axios";
import { BASE_URL } from "./config";

export const api = axios.create({
  baseURL: `${BASE_URL}`,
});

axios.interceptors.request.use(
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

const getTempSave = async (body) => {
  const result = await api.post(`/tempsave/id:${mailId}`, body);
  return result;
};
