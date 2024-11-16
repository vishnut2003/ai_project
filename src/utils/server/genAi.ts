import { GoogleGenerativeAI } from "@google/generative-ai"

const GENAI_API_KEY: string = 'AIzaSyBv0FS6bz3SJrUWwyfP4FOUoT1lxUR336Q';
const GENAI_MODEL_NAME: string = 'gemini-pro';
const GENAI_ERROR: string = 'GENAI_ERROR';

// GenAi text response functions
export function generateTextResponse(prompt: string) {
    return new Promise(async (resolve, reject) => {

        try {
            // Generate response 
            const genAI = new GoogleGenerativeAI(GENAI_API_KEY);
            const model = genAI.getGenerativeModel({ model: GENAI_MODEL_NAME });
            const result = await model.generateContent(prompt)

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