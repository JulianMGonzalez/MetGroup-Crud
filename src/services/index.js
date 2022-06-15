import axios from "axios";

const MET_GROUP_API = process.env.VUE_APP_RUTA_API || ""

export const appAxios = axios.create({
    baseURL: `${MET_GROUP_API}/`,
})
