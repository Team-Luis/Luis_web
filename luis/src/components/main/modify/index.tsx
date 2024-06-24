import React from "react";
import * as S from "../detail/style";
import useModify from "../../../hooks/post/useModify";

const Modify = () => {
  const { ...modify } = useModify();
  return (
    <S.DetailWrap>
      <input value={modify.title} onChange={(e) => modify.handleTitle(e.target.value)} />
      <input value={modify.content} onChange={(e) => modify.handleContent(e.target.value)} />
      <p>-{modify.author}-</p>
      <button onClick={modify.modifyPost}>수정하기</button>
    </S.DetailWrap>
  );
};

export default Modify;
