import React from "react";
import * as S from "./style";
import useWrite from "../../hooks/write/useWrite";

const Write = () => {
  const { ...write } = useWrite();

  return (
    <S.Main>
      <S.WriteWrap>
        <input placeholder="제목" name="title" value={write.writeData.title} onChange={write.handleWriteData} />
        <textarea
          placeholder="내용"
          name="content"
          value={write.writeData.content}
          onChange={write.handleWriteData}
        ></textarea>
        <div>
          <label>카테고리 선택</label>
          <select>
            <option onChange={() => write.setCategory("ALL")}>ALL</option>
            <option onChange={() => write.setCategory("WEB")}>Web</option>
            <option onChange={() => write.setCategory("IOS")}>iOS</option>
            <option onChange={() => write.setCategory("ANDROID")}>Android</option>
            <option onChange={() => write.setCategory("SERVER")}>Server</option>
          </select>
        </div>
        <button onClick={write.onWrite}>글쓰기</button>
      </S.WriteWrap>
    </S.Main>
  );
};

export default Write;
