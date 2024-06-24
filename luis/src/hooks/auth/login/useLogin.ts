import { useCallback, useState } from "react";
import { LoginResposne, LoginType } from "../../../types/auth/login/login.type";
import CONFIG from "../../../config/config.json";
import luisToast from "../../../utils/toast/swal";
import cookie from "../../../libs/cookie/cookie";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../../constants/token.constant";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginType>({
    email: "",
    password: "",
  });

  const handleLoginData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLoginData((prev) => ({ ...prev, [name]: value }));
    },
    [setLoginData],
  );

  const onLogin = async () => {
    const { email, password } = loginData;

    if (email.length === 0) {
      luisToast.infoToast("이메일을 입력해주세요.");
      return;
    }

    if (password.length === 0) {
      luisToast.infoToast("비밀번호를 입력해주세요");
      return;
    }

    try {
      const res = await axios.post<LoginResposne>(`${CONFIG.serverUrl}/auth/sign-in`, {
        email: email,
        password: password,
      });

      if (res.status === 200) {
        cookie.setCookie(ACCESS_TOKEN_KEY, res.data.accessToken);
        cookie.setCookie(REFRESH_TOKEN_KEY, res.data.refreshToken);
        navigate("/posts");
      } else {
        luisToast.errorToast("로그인 실패. 다시 시도해주세요.");
      }
    } catch (error) {
      luisToast.errorToast("로그인 중 오류가 발생했습니다.");
      console.error("Login error:", error);
    }
  };

  return {
    loginData,
    handleLoginData,
    onLogin,
  };
};

export default useLogin;
