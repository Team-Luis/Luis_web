import styled from "styled-components";

export const PostContainer = styled.div`
    width: 100%;
    height: 800px; /* 원하는 높이로 설정 */
    overflow-y: auto; /* 내부에서 스크롤 가능하도록 설정 */
    border: 1px solid #D9D9D9; /* 선택 사항: 컨테이너를 구분하기 위해 테두리 추가 */
`;

export const PostWrap = styled.div`
    padding: 16px;
    border-bottom: 1px solid #D9D9D9;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    &:last-child {
        border-bottom: none;
    }

    h2 {
        margin: 0;
        font-size: 25px;
        position: absolute;
        top: 16px;
        left: 16px;
        color: #FF7E73;
    }

    p {
        margin: 4px 0;
        &:nth-child(2) {
            position: absolute;
            top: 40px;
            left: 16px;
            right: 16px;
        }
        &:nth-child(3) {
            position: absolute;
            bottom: 16px;
            right: 16px;
            color: #888;
        }
        &:nth-child(4) {
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 16px;
            left: 16px;
            color: #888;
        }
    }

    img {
        margin-right: 4px;
    }
`;
