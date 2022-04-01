import axios from "axios";
import { BASE_URL } from "./config";

export const mailboxesApi = axios.create({
  baseURL: `${BASE_URL}/mailboxes`,
});

mailboxesApi.interceptors.request.use(
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

export const getRecvMails = async () => {
  return await mailboxesApi.get(`/recv`);
};

export const getRecvMailsBySender = async (senderId) => {
  return await mailboxesApi.get(`/recv/${senderId}`);
};

export const getUndoneMail = async () => {
  return await mailboxesApi.get(`/undone`);
};

export const getSendMail = async () => {
  return await mailboxesApi.get(`/send`);
};

export const deleteRecvMail = async (mailId) => {
  return await mailboxesApi.delete(`/recv`, { mail_id: mailId });
};

export const deleteUndoneMail = async (mailId) => {
  return await mailboxesApi.delete(`/undone`, { mail_id: mailId });
};

export const deleteSendMail = async (mailId) => {
  return await mailboxesApi.delete(`/send`, { mail_id: mailId });
};
