import { appAxios } from "../index";

export const userList = async () => {
    try {
        return await appAxios.get(`users`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export default {
    userList
}
