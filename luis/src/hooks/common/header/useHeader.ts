import { useState } from "react";
import { ProfileType } from "../../../types/common/header/header.type";
import { luisAxios } from "../../../libs/axios/customAxios";
import token from "../../../libs/token/token";
import { useNavigate } from "react-router-dom";

const useHeader = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileType>();

  const getPfofile = async () => {
    await luisAxios.get("/user").then((res) => setProfile(res.data));
  };

  const logout = async () => {
    await luisAxios.delete("user").then(() => {
      token.clearToken();
      navigate("/login");
    });
  };

  return {
    profile,
    getPfofile,
    logout,
  }
};

export default useHeader;
