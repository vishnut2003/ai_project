import { AxiosRequestConfig } from "axios";
import http from "http"
import https from "https"

const axiosConfig: AxiosRequestConfig = {
    headers: {
        Authorization: 'bearer testAuthcode',
        "Content-Type": "application/json"
    }
}

export default axiosConfig;