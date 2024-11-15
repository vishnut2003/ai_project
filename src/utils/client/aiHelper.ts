import axiosConfig from "@/configs/axiosConfig"
import axios from "axios"

// Function for handle prompt submit - (Chatbot pages)
export function handlePromptSubmit (prompt: string) {
    return new Promise( async (resolve, reject) => {
        try {
            const response = await axios.post('/api/aimodel/gentext', {prompt}, axiosConfig);
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    })
}