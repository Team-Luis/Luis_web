import { useState, useEffect } from "react";
import { PostType } from "../../types/list/list.type";
import { luisAxios } from "../../libs/axios/customAxios";
import { useNavigate, useParams } from "react-router-dom";
import luisToast from "../../utils/toast/swal";

const usePost = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();
  const [data, setData] = useState<PostType>();

  const fetchData = async () => {
    await luisAxios.get(`/post?postId=${id}`).then((res) => setData(res.data));
  };

  const deletePost = async () => {
    await luisAxios.delete(`/post?postId=${Number(id)}`).then(() => {
      luisToast.successToast("삭제 성공");
      navigate("/posts");
    });
  };

  const modifyPost = async () => {
    await luisAxios.patch("/post", {
      postId: id,
      title: data?.title,
      content: data?.content,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    deletePost,
  };
};

export default usePost;
