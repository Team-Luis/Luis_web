import styled from "styled-components";

export const DetailWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: Pretendard;

  gap: 20px;

  h1 {
    font-size: 36px;
    color: #000;
  }

  p {
    font-size: 20px;

    &:nth-child(2) {
      font-size: 18px;
    }
  }

  button {
    border: 3px solid #ff7e73;

    width: 100px;
    height: 40px;

    background: transparent;

    border-radius: 15px;
  }

  input {
    font-size: 36;
    border: none;

    &:nth-child(2) {
        font-size: 20px;
        border: none;
    }
  }
`;
