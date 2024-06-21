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
            <option onClick={() => write.handleCatgory("ALL")}>ALL</option>
            <option onClick={() => write.handleCatgory("WEB")}>Web</option>
            <option onClick={() => write.handleCatgory("IOS")}>iOS</option>
            <option onClick={() => write.handleCatgory("ANDROID")}>Android</option>
            <option onClick={() => write.handleCatgory("SERVER")}>Server</option>
          </select>
        </div>
      </S.WriteWrap>
    </S.Main>
  );
};

export default Write;
