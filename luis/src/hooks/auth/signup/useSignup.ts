import React, { useCallback, useState } from "react";
import { SignupTypes } from "../../../types/auth/signup/signup.type";
import { luisAxios } from "../../../libs/axios/customAxios";
import luisToast from "../../../utils/toast/swal";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState<SignupTypes>({
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
    await luisAxios.post("/auth/signup", signupData).then(() => {
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
