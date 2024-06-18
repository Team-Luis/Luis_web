import styled, { css, keyframes } from "styled-components";
import BackGround from "../../../assets/background.png";

export const Main = styled.div`
  width: 100vw;
  height: calc(100vh - 120px);
  background-image: url(${BackGround});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30%;

  display: flex;
`;

export const Text1 = keyframes`
  0% {
    top:100% ;
  } 100% {
    top: 35%;
  }
`;

export const TextAnimation1 = css`
  animation: ${Text1} 1s linear;
`;

export const T1 = styled.h1`
  position: absolute;
  left: 20%;
  top: 30%;

  width: 670px;
  height: 120px;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 80px;
  color: #fff;
  -webkit-text-stroke: 1px black;

  ${TextAnimation1}
`;

export const Text2 = keyframes`
  0% {
    animation-play-state: paused;
    top: 100%;
  } 25% {
    animation-play-state: running;
  } 100% {
    top: 45%;
  }
`;

export const TextAnimation2 = css`
  animation: ${Text2} 1s 1s linear;
  animation-fill-mode: backwards;
`;

export const T2 = styled.h1`
  position: absolute;
  left: 40%;
  top: 45%;

  width: 670px;
  height: 120px;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 80px;
  color: #ff7e73;

  ${TextAnimation2}
`;

export const Text3 = keyframes`
  0% {
    animation-play-state: paused;
    top: 100%;
  } 50% {
    animation-play-state: running;
  } 100% {
    top: 60%;
  }
`;

export const TextAnimation3 = css`
  animation: ${Text3} 1s 2s linear;
  animation-fill-mode: backwards;
`;

export const T3 = styled.h1`
  position: absolute;
  left: 20%;
  top: 60%;

  width: 670px;
  height: 120px;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 80px;
  color: #ff7e73;

  ${TextAnimation3}
`;

export const Text4 = keyframes`
  0% {
    animation-play-state: paused;
    top: 100%;
  } 75% {
    animation-play-state: running;
  } 100% {
    top: 75%;
  }
`;

export const TextAnimation4 = css`
  animation: ${Text4} 1s 3s linear;
  animation-fill-mode: backwards;
`;

export const T4 = styled.h1`
  position: absolute;
  left: 30%;
  top: 75%;

  width: 730px;
  height: 120px;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 40px;
  color: #ff7e73;

  ${TextAnimation4}
`;
