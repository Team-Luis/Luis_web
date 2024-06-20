import React from "react";
import * as S from "../login/style";
import TextField from "../../common/textField";
import Button from "../../common/button";
import useSignup from "../../../hooks/auth/signup/useSignup";

const Signup = () => {
  const { ...signup } = useSignup();

  return (
    <S.Main>
      <S.LoginWrap>
        <h1>Luissasa</h1>
        <span>Luissasa에 오신것을 환영합니다.</span>
        <S.InputWrap style={{ height: "385px" }}>
          <TextField
            id="email"
            name="email"
            onchange={signup.handleSignupData}
            type="email"
            value={signup.signupData.email}
            functions="id"
            placeholder="이메일을 입력해주세요."
          >
            이메일
          </TextField>
          <TextField
            id="id"
            name="id"
            onchange={signup.handleSignupData}
            type="text"
            value={signup.signupData.id}
            functions="password"
            placeholder="아이디를 입력해주세요."
          >
            아이디
          </TextField>
          <TextField
            id="password"
            name="password"
            onchange={signup.handleSignupData}
            type="password"
            value={signup.signupData.password}
            functions="checkPassword"
            placeholder="비밀번호를 입력해주세요."
          >
            비밀번호
          </TextField>
          <TextField
            id="checkPassword"
            name="checkPassword"
            onchange={signup.handleSignupData}
            type="password"
            value={signup.signupData.checkPassword}
            functions={signup.onSignup}
            placeholder="비밀번호를 입력해주세요."
          >
            비밀번호 확인
          </TextField>
        </S.InputWrap>
        <Button
          text="로그인"
          functions={signup.onSignup}
          style={{ width: "500px", height: "80px", background: "#ff7e73", color: "#fff", fontSize: "24px" }}
        />
      </S.LoginWrap>
    </S.Main>
  );
};

export default Signup;
