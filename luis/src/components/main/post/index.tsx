import React, { useEffect, useState } from "react";
import { PostType } from "../../../types/list/list.type";
import { luisAxios } from "../../../libs/axios/customAxios";
import { AxiosError } from "axios";
import Vector from "../../../assets/Vector.png";
import * as S from "./style";

const Post = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [page, setPage] = useState(1);

    const fetchPost = async (page: number) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await luisAxios.get('/post/list', {
                params: { page, size: 10 } // 페이지와 크기를 동적으로 변경
            });
            const data = response.data;
            setPosts(prevPosts => [...prevPosts, ...data]);
            console.log("성공");
        } catch (error) {
            const axiosError = error as AxiosError;
            console.log("실패", axiosError);
            setError(axiosError);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPost(page);
    }, [page]);

    if (error) {
        return <p>Error Loading data: {error.message}</p>;
    }

    return (
        <S.PostContainer>
            {posts.map((post) => (
                <S.PostWrap key={post.idx}>
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
