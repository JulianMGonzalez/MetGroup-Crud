import { appAxios } from "../index";

export const storeList = async () => {
    try {
        return await appAxios.get(`store`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export default {
    storeList
}
