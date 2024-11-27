import { AxiosRequestConfig } from "axios";
import http from "http"
import https from "https"

const axiosConfig: AxiosRequestConfig = {
    headers: {
        Authorization: 'bearer testAuthcode',
        "Content-Type": "application/json"
    },
    httpAgent: new http.Agent({
        keepAlive: true,
        timeout: 5000
    }),
    httpsAgent: new https.Agent({
        keepAlive: true,
        timeout: 5000,
    }),
    timeout: 5000
}

export default axiosConfig;