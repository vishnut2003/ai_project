import axios from "axios";

export function createCustomePrompt ({customPrompt}: {customPrompt: string}) {
    return new Promise<void>( async (resolve) => {
        try {
            await axios.post('/api/custom-prompt/create', {customPrompt})
            return resolve()
        } catch (err) {
            console.log(err);
        }
    })
}

export function getAllCustomPrompt () {
    return new Promise<string[] | undefined>( async (resolve) => {
        try {
            const response = await axios.get('/api/custom-prompt/get-all');
            const prompts: string[] | undefined = response.data.prompts;
            resolve(prompts);
        } catch (err) {
            console.log(err);
        }
    })
}