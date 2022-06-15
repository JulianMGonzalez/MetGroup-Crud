import { appAxios } from "../index";

export const articleList = async () => {
    try {
        return await appAxios.get(`article`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export const articleDetail = async (id) => {
    try {
        return await appAxios.get(`article/${id}`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export const articleListId = async (id) => {
    try {
        return await appAxios.get(`store/${id}`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}   

export default {
    articleList,
    articleListId,
    articleDetail
}
