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

export const SearchWrap = styled.div`
  width: 970px;
  height: 50px;

  border-radius: 5px;
  border: 1px solid #d9d9d9;

  display: flex;
  align-items: center;

  img {
    cursor: pointer;

    padding: 10px;
  }

  input {
    width: 880px;
    height: 90%;

    font-family: Pretendard;
    font-size: 18px;
    font-weight: 400;

    &::placeholder {
      color: #7a7a7a;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const ButtonWrap = styled.div`
  width: 300px;
  height: 60px;

  display: flex;
  gap: 30px;
`;
