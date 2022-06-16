import { appAxios } from "../index";

export const userList = async () => {
    try {
        return await appAxios.get(`users`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export const userCreate = async (user) => {
    try {
        return await appAxios.post(`users`, user).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export const userUpdate = async (id, user) => {
    try {
        return await appAxios.put(`users/${id}`, user).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export const userDelete = async (id) => {
    try {
        return await appAxios.delete(`users/${id}`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export const userListId = async (id) => {
    try {
        return await appAxios.get(`users/${id}`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (user) => {
    try {
        return await appAxios.post(`login`, user).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export default {
    userList,
    userCreate,
    userUpdate,
    userDelete,
    userListId,
    loginUser
}
