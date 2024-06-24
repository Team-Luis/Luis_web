import { useParams } from "react-router-dom";
import { luisAxios } from "../../libs/axios/customAxios";
import { useState, useEffect } from "react";
import luisToast from "../../utils/toast/swal";

const useModify = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const fetchData = async () => {
    await luisAxios.get(`/post?postId=${id}`).then((res) => {
      const newData = res.data;
      setTitle(newData.title);
      setContent(newData.content);
      setAuthor(newData.author);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTitle = (item: string) => {
    setTitle(item);
  };

  const handleContent = (item: string) => {
    setContent(item);
  };
  const modifyPost = async () => {
    await luisAxios
      .patch("/post", {
        postId: id,
        title: title,
        content: content,
      })
      .then(() => luisToast.successToast("수정 성공!"));
  };

  return {
    modifyPost,
    handleTitle,
    handleContent,
    title,
    content,
    author,
  };
};

export default useModify;
