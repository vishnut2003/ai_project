import axiosConfig from "@/configs/axiosConfig"
import axios, { type AxiosResponse, type AxiosError } from "axios"

// Function for handle prompt submit - (Chatbot pages)
export function handlePromptSubmit (prompt?: FormDataEntryValue | null) {
    return new Promise<string>( async (resolve, reject) => {
        axios.post('/api/aimodel/gentext', {prompt}, axiosConfig)
            .then((response: AxiosResponse) => {
                return resolve(response.data);
            })
            .catch((err: AxiosError) => {
                return reject(err.response?.data);
            })
    })
}