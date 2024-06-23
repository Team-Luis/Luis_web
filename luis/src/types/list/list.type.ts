import { Response } from "../../types/utils/response.type";

export interface PostType extends Response {
    idx: number,
    title: string,
    content: string,
    author: string,
    likes: number,
    category: string,
    createdDateTime: string,
    modifiedDateTime: string
}
