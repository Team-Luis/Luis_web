import styled from "styled-components";

export const SidebarWrap = styled.div`
  width: 260px;
  height: calc(100vh - 90px);

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;

  border-right: 1px solid #d9d9d9;

  span {
    font-family: Pretendard;
    font-size: 30px;

    cursor: pointer;
  }
`;