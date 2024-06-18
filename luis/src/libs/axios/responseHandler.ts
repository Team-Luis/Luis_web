import axios, { AxiosError } from "axios";
import token from "../token/token";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, REQUEST_TOKEN_KEY } from "../../constants/token.constant";
import CONFIG from "../../config/config.json";
import { luisAxios } from "./customAxios";

let isRefreshing = false;
let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefeshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};

const errorResponseHandler = async (error: AxiosError) => {
  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;
    const usingAccessToken = token.getToken(ACCESS_TOKEN_KEY);
    const usingRefreshToken = token.getToken(REFRESH_TOKEN_KEY);

    if (usingAccessToken !== undefined && usingRefreshToken !== undefined && status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const data = await axios.post(`${CONFIG.serverUrl}/auth/refresh`, {
            refreshToken: usingRefreshToken,
          });
          const newAccessToken = data.data.accessToken;

          luisAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newAccessToken}`;

          token.setToken(ACCESS_TOKEN_KEY, newAccessToken);
          isRefreshing = false;
          onTokenRefreshed(newAccessToken);
        } catch (error) {
          token.clearToken();
          window.location.href = "/login";
        }
      }

      return new Promise((resolve, reject) => {
        addRefeshSubscriber((accessToken: string) => {
          if (originalRequest) {
            originalRequest.headers![REQUEST_TOKEN_KEY] = `Bearer ${accessToken}`;
            resolve(luisAxios(originalRequest));
          } else {
            reject("originalRequest is Undefined");
          }
        });
      });
    }
  }

  return Promise.reject(error);
};

export default errorResponseHandler;
