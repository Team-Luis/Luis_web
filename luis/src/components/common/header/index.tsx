import React from "react";
import * as S from "./style";
import Logo from "../../../assets/luissasalogo.svg";
import Button from "../button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.HeaderWrap>
      <S.LogoWrap onClick={() => navigate("/")}>
        <img src={Logo} />
        <h1>luissasa</h1>
      </S.LogoWrap>
      <S.ButtonWrap>
        <Button
          text="로그인"
          style={{ color: "#FF7E73", background: "#fff", border: "1px solid #FF7E73" }}
          functions={() => navigate("/login")}
        />
        <Button
          text="회원가입"
          style={{ color: "#fff", background: "#ef7e73" }}
          functions={() => navigate("/signup")}
        />
      </S.ButtonWrap>
    </S.HeaderWrap>
  );
};

export default Header;
