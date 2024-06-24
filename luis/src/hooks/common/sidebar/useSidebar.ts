import { useState, useEffect } from "react";
import { CategoryTypes } from "../../../types/common/sidebar/sidebar.type";
import { PostType } from "../../../types/list/list.type";
import { luisAxios } from "../../../libs/axios/customAxios";
import { AxiosError } from "axios";
import luisToast from "../../../utils/toast/swal";

const useSidebar = () => {
  const [category, setCategory] = useState<CategoryTypes>("ALL");
  const handleCategory = (item: CategoryTypes) => setCategory(item);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState<PostType[]>([]);

  const fetchPost = async (page: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await luisAxios.get("/post/list", {
        params: { page, size: 10 }, // 페이지와 크기를 동적으로 변경
      });
      const data = response.data;
      setPosts(data);
      console.log(posts.filter((item) => item.category === category));
    } catch (error) {
      const axiosError = error as AxiosError;
      luisToast.errorToast(`실패 : ${(axiosError as AxiosError).message}`);
      setError(axiosError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost(page);
  }, [page]);

  return {
    category,
    posts,
    isLoading,
    error,
    filteredData,
    handleCategory,
  };
};

export default useSidebar;
