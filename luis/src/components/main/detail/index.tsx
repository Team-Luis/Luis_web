import React from "react";
import * as S from "./style";
import usePost from "../../../hooks/post/usePost";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
  const { data, deletePost } = usePost();
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <S.DetailWrap>
      <h1>제목 : {data?.title}</h1>
      <p>{data?.content}</p>
      <p>-{data?.author === "" ? "작자 미상" : data?.author}-</p>
      <button onClick={deletePost}>글 삭제</button>
      <button onClick={() => navigate(`/modify/${id}`)}>수정</button>
    </S.DetailWrap>
  );
};

export default PostDetail;
