import axios from "axios";
import { BASE_URL } from "./config";

const mailApi = axios.create({
  baseURL: `${BASE_URL}`,
});

mailApi.interceptors.request.use(
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

const getTempSave = async (body, letterId) => {
  console.log(body);
  const result = await mailApi.post(`/mails/tempsave/${letterId}`, body);
  return result;
};

const MailApi = {
  getTempSave,
};

export default MailApi;
