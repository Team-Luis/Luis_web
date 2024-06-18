import { AxiosRequestConfig } from "axios";
import token from "../token/token";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, REQUEST_TOKEN_KEY } from "../../constants/token.constant";

const requestHandler = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (token.getToken(REFRESH_TOKEN_KEY) === undefined) {
    alert("세션 만료");
    window.location.href = "/login";
    return config;
  }

  config.headers = {
    ...config.headers,
    "Content-Type": "application/json",
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  };

  return config;
};

export default requestHandler;
