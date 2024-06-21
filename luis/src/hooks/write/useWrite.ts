import React, { TextareaHTMLAttributes, useCallback, useState } from "react";
import { WriteType } from "../../types/write/wrtie.type";
import luisToast from "../../utils/toast/swal";
import { luisAxios } from "../../libs/axios/customAxios";
import { useRecoilState } from "recoil";
import { CategoryData, WriteDataAtom } from "../../store/write/write.store";

const useWrite = () => {
  const [writeData, setWriteData] = useRecoilState(WriteDataAtom);
  const [category, setCategory] = useRecoilState(CategoryData);

  const handleWriteData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setWriteData((prev) => ({ ...prev, [name]: value }));
    },
    [setWriteData],
  );

  const handleCatgory = (category: string) => {
    setCategory(category);

    const { title, content } = writeData;
    console.log(title, content);
  };

  const onWrite = async () => {
    const { title, content } = writeData;
    if (title.length < 0) {
      luisToast.infoToast("제목을 입력해주세요");
    }
    if (content.length < 0) {
      luisToast.infoToast("내용을 입력해주세요");
    }

    try {
      await luisAxios
        .post("/post", {
          title: title,
          content: content,
          category: category,
        })
        .then(() => luisToast.successToast("글쓰기 성공"));
    } catch (error) {}
  };

  return {
    writeData,
    handleCatgory,
    handleWriteData,
    onWrite,
  };
};

export default useWrite;
