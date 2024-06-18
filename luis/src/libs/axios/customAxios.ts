import axios, { AxiosRequestConfig } from "axios";
import token from "../token/token";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "../../constants/token.constant";
import CONFIG from "../../config/config.json";
import requestHandler from "./requestHandler";
import resposneHandler from "./responseHandler";

const createAxiosInstance = (config?: AxiosRequestConfig) => {
  const ACCESS_TOKEN = token.getToken(ACCESS_TOKEN_KEY);
  const baseConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  return axios.create({
    ...baseConfig,
    ...config,
  });
};

export const luisAxios = createAxiosInstance({
  baseURL: CONFIG.serverUrl,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

export const luisAxiosSetAccessToken = (newToken: string) => {
  luisAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newToken}`;
};

luisAxios.interceptors.request.use(requestHandler as any, (respsone) => respsone);
luisAxios.interceptors.response.use((respnose) => respnose, resposneHandler);
