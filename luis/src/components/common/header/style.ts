import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100vw;
  height: 90px;
  min-height: 90px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  background: white;
`;

export const LogoWrap = styled.div`
  width: 305px;
  height: 100%;

  display: flex;

  align-items: center;
  justify-content: space-evenly;

  cursor: pointer;

  h1 {
    font-family: Pretendard;
    font-size: 2.4rem;
    color: #ff7f74;
  }
`;

export const ButtonWrap = styled.div`
  width: 300px;
  height: 60px;

  display: flex;
  gap: 30px;
`;
