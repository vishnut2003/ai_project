import axiosConfig from "@/configs/axiosConfig"
import ConversationInterface from "@/interfaces/conversation";
import { Content } from "@google/generative-ai";
import axios, { type AxiosResponse, type AxiosError } from "axios"

// Function for handle prompt submit - (Chatbot pages)
export function handlePromptSubmit(prompt: string | undefined, conversation: ConversationInterface[]) {
    return new Promise<string>(async (resolve, reject) => {

        try {
            const historyConversation = await ConvertToHistoryConversation(prompt, conversation);

            axios.post('/api/aimodel/gentext', { historyConversation }, axiosConfig)
                .then((response: AxiosResponse) => {
                    return resolve(response.data);
                })
                .catch((err: AxiosError) => {
                    return reject(err.response?.data);
                })

        } catch (err) {
            console.log(err);
        }
    })
}

export function ConvertToHistoryConversation(newPrompt: string | undefined, conversation: ConversationInterface[]) {
    return new Promise<Content[]>(async (resolve) => {
        const historyConversation: Content[] = [];
        const processConversation = conversation.map((chat) => {
            const rawChat: Content = {
                role: chat.from === "user" ? "user" : "model",
                parts: [{
                    text: chat.message!
                }]
            }
            historyConversation.push(rawChat);
        })

        // Wait till process all history conversation
        await Promise.all(processConversation);

        // Add the new prompt to history conversation
        historyConversation.push({
            role: "user",
            parts: [{
                text: newPrompt!
            }]
        })

        resolve(historyConversation);
    })
}

// Limit User Prompts for non subscription users

export async function getRemainingPromptCount() {
    return new Promise<number>(async (resolve) => {
        try {
            const { data }: {
                data: number,
            } = await axios.get('/api/auth/limit-user-prompt/get-remaining');

            return resolve(data);
        } catch (err) {
            console.log(err);
        }
    })
}

export async function updatePromptLimitCount() {
    return new Promise<void>(async (resolve) => {
        try {
            await axios.post('/api/auth/limit-user-prompt/increment-prompt-count');
            return resolve()
        } catch (err) {
            console.log(err);
        }
    })
}
