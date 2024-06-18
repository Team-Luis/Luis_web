import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);

  background: #f5f5f5;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrap = styled.div`
  width: 655px;
  height: 800px;

  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    width: 270px;
    height: 90px;

    font-family: Pretendard;
    font-size: 60px;
    font-weight: 600;
    color: #ff7f74;
  }

  span {
    font-family: Pretendard;
    font-size: 24px;
  }
`;

export const InputWrap = styled.div`
  width: 540px;
  height: 240px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;

  gap: 30px;
`;

export const AuthUtilWrap = styled.div`
  width: 300px;
  height: 30px;

  display: flex;
  align-self: flex-end;
  justify-content: flex-start;

  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  color: #000;

  span {
    font-size: 18px;
    color: #ff7e73;
    cursor: pointer;
  }
`;
