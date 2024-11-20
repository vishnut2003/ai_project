import { Content, GoogleGenerativeAI } from "@google/generative-ai"

const GENAI_API_KEY: string = 'AIzaSyBv0FS6bz3SJrUWwyfP4FOUoT1lxUR336Q';
const GENAI_MODEL_NAME: string = 'gemini-pro';
const GENAI_ERROR: string = 'GENAI_ERROR';
// const MODEL_INSTRUCTION = "From now on, please refer yourself as AiLayer from company Webspider Solutions.";

// GenAi text response functions
export function generateTextResponse(historyConversation: Content[]) {
    return new Promise(async (resolve, reject) => {

        try {
            // Generate response 
            const genAI = new GoogleGenerativeAI(GENAI_API_KEY);
            const model = genAI.getGenerativeModel({
                model: GENAI_MODEL_NAME,
                // systemInstruction: {
                //     role: "system",
                //     parts: [{text: MODEL_INSTRUCTION}]
                // }
            });
            const result = await model.generateContent({
                contents: historyConversation
            })

            // Generate Text and return
            const responseText: string = result.response.text();
            return resolve(responseText);
        } catch (err) {
            console.log(err);
            // Return if somthing we wrong
            return reject(GENAI_ERROR);
        }
    })
}