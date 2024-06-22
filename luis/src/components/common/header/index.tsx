import React, { useEffect } from "react";
import * as S from "./style";
import Logo from "../../../assets/luissasalogo.svg";
import Button from "../button";
import { useLocation, useNavigate } from "react-router-dom";
import useHeader from "../../../hooks/common/header/useHeader";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { ...header } = useHeader();

  useEffect(() => {
    header.getProfile();
  }, []);

  return (
    <S.HeaderWrap>
      <S.LogoWrap onClick={() => navigate("/")}>
        <img src={Logo} />
        <h1>luissasa</h1>
      </S.LogoWrap>
      <S.ButtonWrap>
        <Button
          text={pathname === "/main" ? header.profile.userId : "로그인"}
          style={{ borderColor: "#FF7E73", color: "#FF7E73", background: "#fff" }}
          functions={pathname === "/main" ? () => false : () => navigate("/login")}
        />
        <Button
          text={pathname === "/main" ? "로그아웃" : "회원가입"}
          style={{ color: "#fff", background: "#ef7e73" }}
          functions={pathname === "/main" ? header.logout : () => navigate("/signup")}
        />
      </S.ButtonWrap>
    </S.HeaderWrap>
  );
};

export default Header;
