import React, { useCallback, useState } from "react";
import { SignupTypes } from "../../../types/auth/signup/signup.type";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import luisToast from "../../../utils/toast/swal";
import CONFIG from "../../../config/config.json";

const useSignup = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState<SignupTypes>({
    id: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const handleSignupData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
    },
    [setSignupData],
  );

  const onSignup = async () => {
    const { id, email, password } = signupData;
    await axios
      .post(`${CONFIG.serverUrl}/auth/sign-up`, {
        userId: id,
        email: email,
        password: password,
      })
      .then(() => {
        luisToast.successToast("회원가입 성공");
        navigate("/login");
      });
  };

  return {
    signupData,
    handleSignupData,
    onSignup,
  };
};

export default useSignup;
