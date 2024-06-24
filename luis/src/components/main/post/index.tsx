import React, { useEffect, useState } from "react";
import { PostType } from "../../../types/list/list.type";
import { luisAxios } from "../../../libs/axios/customAxios";
import { AxiosError } from "axios";
import Vector from "../../../assets/Vector.png";
import * as S from "./style";
import luisToast from "../../../utils/toast/swal";
import useSidebar from "../../../hooks/common/sidebar/useSidebar";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const { isLoading, error, filteredData, posts } = useSidebar();
  if (error) {
    return <p>Error Loading data: {error.message}</p>;
  }

  return (
    <S.PostContainer>
      {posts.map((post) => (
        <S.PostWrap key={post.idx} onClick={() => navigate(`/posts/${post.idx}`)}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.author}</p>
          <p>
            <img src={Vector} alt="Vector Icon" /> {post.likes}
          </p>
        </S.PostWrap>
      ))}
      {isLoading && <p>Loading...</p>}
    </S.PostContainer>
  );
};

export default Post;
