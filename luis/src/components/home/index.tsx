import React from "react";
import Sidebar from "../common/sidebar";
import * as S from "./style";
import Button from "../common/button";

const Home = () => {
  return (
    <S.Main>
      <Sidebar />
      <S.HomeWrap>
        <S.InnerHeader>
          <S.TitleInfo>
            <S.Title>
              <span>SASA</span>
              &nbsp; 전체게시판
            </S.Title>
            <S.SubTitle>
              <span>15</span>
              개의 질문
            </S.SubTitle>
          </S.TitleInfo>
          <Button text="글쓰기" style={{ background: "#FF7E73", color: "#fff" }} functions={""} />
        </S.InnerHeader>
        
      </S.HomeWrap>
    </S.Main>
  );
};

export default Home;
