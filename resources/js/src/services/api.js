import axios from "axios";
import { getToken } from "./auth";

const END_POINT = "v1/";

const api = axios.create({
    baseURL: `http://e-sismatricula.io/api/${END_POINT}`,
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
