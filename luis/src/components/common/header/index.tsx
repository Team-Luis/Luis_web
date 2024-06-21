import React from "react";
import * as S from "./style";
import Logo from "../../../assets/luissasalogo.svg";
import Button from "../button";
import { useLocation, useNavigate } from "react-router-dom";
import CONFIG from "../../../config/config.json";
import { useRecoilValue } from "recoil";
import { CategoryData, WriteDataAtom } from "../../../store/write/write.store";
import luisToast from "../../../utils/toast/swal";
import axios from "axios";
import token from "../../../libs/token/token";
import { ACCESS_TOKEN_KEY } from "../../../constants/token.constant";
import { luisAxios } from "../../../libs/axios/customAxios";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { title, content } = useRecoilValue(WriteDataAtom);
  const category = useRecoilValue(CategoryData);
  const onWrite = async () => {
    await luisAxios
      .post("/post", {
        title: title,
        content: content,
        category: category,
      })
      .then(() => luisToast.successToast("글 등록 성공"));
  };

  return (
    <S.HeaderWrap>
      <S.LogoWrap onClick={() => navigate("/")}>
        <img src={Logo} />
        <h1>luissasa</h1>
      </S.LogoWrap>
      <S.ButtonWrap>
        <Button
          text={pathname === "/write" ? "임시저장" : "로그인"}
          style={{ color: "#FF7E73", background: "#fff", border: "1px solid #FF7E73" }}
          functions={pathname === "/write" ? () => false : () => navigate("/login")}
        />
        <Button
          text={pathname === "/write" ? "글쓰기" : "회원가입"}
          style={{ color: "#fff", background: "#ef7e73" }}
          functions={pathname === "/write" ? onWrite : () => navigate("/signup")}
        />
      </S.ButtonWrap>
    </S.HeaderWrap>
  );
};

export default Header;
