import { Response } from "../../utils/response.type";

export interface LoginType {
  email: string;
  password: string;
}

export interface LoginResposne extends Response {
  accessToken: string;
  refreshToken: string;
}
