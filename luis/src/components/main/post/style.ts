import styled from 'styled-components';

export const PostContainer = styled.div`
    width: 100%;
    height: 800px; /* 원하는 높이로 설정 */
    overflow-y: auto; /* 내부에서 스크롤 가능하도록 설정 */
    border: 1px solid #ccc; /* 선택 사항: 컨테이너를 구분하기 위해 테두리 추가 */
`;

export const PostWrap = styled.div`
    padding: 16px;
    border-bottom: 1px solid #ddd;
    height: 140px;
    &:last-child {
        border-bottom: none;
    }
`;
