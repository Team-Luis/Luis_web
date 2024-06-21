import React from "react";
import * as S from "./style";
import Logo from "../../../assets/luissasalogo.svg";
import Button from "../button";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "../../../assets/search.svg";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <S.HeaderWrap>
      <S.LogoWrap onClick={() => navigate("/home")}>
        <img src={Logo} />
        <h1>luissasa</h1>
      </S.LogoWrap>
      {pathname !== "/login" && pathname !== "/signup" && pathname !== "/start" && pathname !== "/" && (
        <S.SearchWrap>
          <img src={Search} />
          <input placeholder="검색어를 입력해주세요." />
        </S.SearchWrap>
      )}
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
