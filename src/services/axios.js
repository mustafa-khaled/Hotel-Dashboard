import IAxios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const axios = IAxios.create({
  timeout: 10000,
  baseURL: baseURL,
});

axios.interceptors.request.use((config) => {
  return config;
});
