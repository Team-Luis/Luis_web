import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;

  background: #d9d9d9;
`;

export const WriteWrap = styled.div`
  width: 40%;
  height: 90%;

  background: #fff;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  border: 1px solid #7a7a7a;

  input {
    width: 610px;
    height: 15%;
    border: none;

    border-bottom: 1px solid #000;
    font-family: Pretendard;
    font-size: 40px;

    &::placeholder {
      color: #d1d1d1;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    width: 610px;
    height: 78%;

    padding-top: 2%;

    border: none;
    font-family: Pretendard;
    font-size: 20px;

    resize: none;

    &::placeholder {
      color: #d1d1d1;
    }

    &:focus {
      outline: none;
    }
  }

  div {
    height: 16%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    select {
      width: 100px;
      height: 30px;

      border: 2px solid #ff7e73;
      border-radius: 5px;

      &:focus {
        outline: none;
      }
    }
  }
`;
