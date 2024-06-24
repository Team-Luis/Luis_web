import React from "react";
import Post from "./post/index";
import * as S from "./style";
import Button from "../common/button";
import Sidebar from "../common/sidebar";

const Home = () => {
  return (
    <S.Main>
      <Sidebar></Sidebar>
      <S.HomeWrap>
        <S.InnerHeader>
          <S.TitleInfo>
            <S.Title>
              <span>SSASSA</span>
              &nbsp; 전체게시판
            </S.Title>
          </S.TitleInfo>
          <Button text="글쓰기" style={{ background: "#FF7E73", color: "#fff" }} functions={""} />
        </S.InnerHeader>
        <Post />
      </S.HomeWrap>
    </S.Main>
  );
};

export default Home;
