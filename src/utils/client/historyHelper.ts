import ConversationInterface from "@/interfaces/conversation";
import { ChatHistoryInterface } from "@/models/ChatHistoryModel";
import axios from "axios"

export function getHistoryChat () {
    return new Promise<ChatHistoryInterface>((resolve) => {
        axios.get('/api/chat-history/get-all')
            .then((res) => {
                const userChatHistory: ChatHistoryInterface = res.data;
                return resolve(userChatHistory);
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

export function udateHistoryChat ({chatId, userPrompt, modelPrompt}: {
    chatId: string,
    userPrompt: ConversationInterface,
    modelPrompt: ConversationInterface
}) {
    return new Promise <string> ((resolve) => {
        axios.post('/api/chat-history/add', {chatId, userPrompt, modelPrompt})
            .then((res) => {
                const data: {chatId: string} = res.data;
                resolve(data.chatId);
            })
            .catch((err) => console.log(err))
    })
}