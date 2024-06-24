import React, { TextareaHTMLAttributes, useCallback, useState } from "react";
import { WriteType } from "../../types/write/wrtie.type";
import luisToast from "../../utils/toast/swal";
import { luisAxios } from "../../libs/axios/customAxios";
import { useRecoilState } from "recoil";
import { CategoryData, WriteDataAtom } from "../../store/write/write.store";
import axios, { AxiosError } from "axios";
import COFNIG from "../../config/config.json";
import token from "../../libs/token/token";
import { ACCESS_TOKEN_KEY } from "../../constants/token.constant";

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

  const onWrite = async () => {
    const { title, content } = writeData;
    try {
      await axios.post(
        `${COFNIG.serverUrl}/post`,
        {
          title: title,
          content: content,
          category: category,
        },
        {
          headers: {
            Authorization: `Bearer #`,
          },
        },
      );
    } catch (error) {
      console.log((error as AxiosError as AxiosError).message);
    }
  };

  return {
    writeData,
    onWrite,
    category,
    setCategory,
    handleWriteData,
  };
};

export default useWrite;
