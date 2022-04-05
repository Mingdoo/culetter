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
  return await mailsApi.post(
    `/write`,
    // body
    {
      receiver_name: "고둘리",
      receiver_email: "godooly@doo.ly",
      title: "행운의 편지2",
      mail_type: "PHOTOCARD",
      style_url: "NORMAL05",
      content: "이편지는 영국에서 ...",
      music_url: "https://musicurl.music",
      image: "https:/imagelink",
      content_position: "",
      stickers: "",
      font_order: "",
      font_type: "GUNGSEO",
      // 숫자로
      font_color: 1,
      handwrite_image: "",
    }
  );
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
