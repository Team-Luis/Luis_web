import { useState } from "react";
import { luisAxios } from "../../../libs/axios/customAxios";
import { Profiletype } from "../../../types/common/header/profile.type";
import luisToast from "../../../utils/toast/swal";
import token from "../../../libs/token/token";
import { useNavigate } from "react-router-dom";

const useHeader = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profiletype>({
    idx: 0,
    userId: "",
    email: "",
    password: "",
    userRole: "",
  });
  const getProfile = async () => {
    try {
      await luisAxios.get("/user").then((res) => setProfile(res.data));
    } catch (error) {}
  };

  const logout = () => {
    token.clearToken();
    navigate("/login");
  };

  const withDrawalMember = async () => {
    try {
      await luisAxios.delete("/user").then(() => {
        token.clearToken();
        luisToast.successToast("회원탈퇴 성공");
        navigate("/login");
      });
    } catch (error) {}
  };

  return {
    profile,
    getProfile,
    withDrawalMember,
    logout,
  };
};

export default useHeader;
