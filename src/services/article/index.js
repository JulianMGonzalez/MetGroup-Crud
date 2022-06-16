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

export const articleAdd = async (data) => {
    try {
        return await appAxios.post(`article`, data).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export const articleUpdate = async (id, data) => {
    try {
        return await appAxios.put(`article/${id}`, data).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export const articleDelete = async (id) => {
    try {
        return await appAxios.delete(`article/${id}`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export const articleAssign = async (data) => {
    try {
        return await appAxios.post(`article/asign`, data).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export default {
    articleList,
    articleListId,
    articleDetail,
    articleAdd,
    articleUpdate,
    articleDelete,
    articleAssign
}
