import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;

  display: flex;
  border-top: 1px solid #D9D9D9;
`;

export const HomeWrap = styled.div`
  width: calc(100vw - 260px);

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: flex-start;
`;

export const InnerHeader = styled.div`
  width: 100%;
  height: 13%;

  border: 1px solid #000;

  display: flex;

  align-items: center;
  justify-content: space-around;

  padding: 10px;
`;

export const TitleInfo = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: space-around;
`;

export const Title = styled.h1`
  font-family: Pretendard;
  font-size: 36px;
  font-weight: 600;
  span {
    color: #ff7e73;
  }
`;

export const SubTitle = styled.h4`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;

  span {
    color: #ff7e73;
  }
`;
