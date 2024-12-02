import axios from "axios";

export function createCustomePrompt ({customPrompt}: {customPrompt: string}) {
    return new Promise<void>( async (resolve, reject) => {
        try {
            await axios.post('/api/custom-prompt/create', {customPrompt})
            return resolve()
        } catch (err) {
            console.log(err);
        }
    })
}