import { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
    headers: {
        Authorization: 'bearer testAuthcode',
        "Content-Type": "application/json"
    }
}

export default axiosConfig;