import React from "react";
import * as S from "./style";
import TextField from "../../common/textField";
import useLogin from "../../../hooks/auth/login/useLogin";
import Button from "../../common/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { ...login } = useLogin();
  const navigate = useNavigate();
  return (
    <S.Main>
      <S.LoginWrap>
        <h1>Luissasa</h1>
        <S.InputWrap>
          <TextField
            id="email"
            name="email"
            onchange={login.handleLoginData}
            type="email"
            value={login.loginData.email}
            functions="password"
            placeholder="이메일을 입력해주세요."
          >
            이메일
          </TextField>
          <TextField
            id="password"
            name="password"
            onchange={login.handleLoginData}
            type="password"
            value={login.loginData.password}
            functions={login.onLogin}
            placeholder="비밀번호를 입력해주세요."
          >
            비밀번호
          </TextField>
        </S.InputWrap>
        <Button
          text="로그인"
          functions={login.onLogin}
          style={{ width: "500px", height: "80px", background: "#ff7e73", color: "#fff", fontSize: "24px" }}
        />
        <S.AuthUtilWrap>
          계정이 없으신가요? &nbsp;&nbsp;
          <span onClick={() => navigate("/login")}>로그인</span>
        </S.AuthUtilWrap>
      </S.LoginWrap>
    </S.Main>
  );
};

export default Login;
