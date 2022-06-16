import { appAxios } from "../index";

export const storeList = async () => {
    try {
        return await appAxios.get(`store`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export const storeAdd = async (data) => {
    try {
        return await appAxios.post(`store`, data).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

const storeUpdate = async (id, data) => {
    try {
        return await appAxios.put(`store/${id}`, data).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

const storeDelete = async (id) => {
    try {
        return await appAxios.delete(`store/${id}`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export default {
    storeList,
    storeAdd,
    storeUpdate,
    storeDelete
}
