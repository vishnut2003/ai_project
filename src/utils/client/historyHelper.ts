import { RenameSectionGetChatNameApiRequestDataInterface } from "@/app/api/chat-history/rename/get-chat-name/route";
import { RenameChatRecordApiRequestDataInterface } from "@/app/api/chat-history/rename/update-chat-name/route";
import axiosConfig from "@/configs/axiosConfig";
import ConversationInterface from "@/interfaces/conversation";
import { ChatHistoryInterface } from "@/models/ChatHistoryModel";
import axios, { AxiosError } from "axios";

export function getHistoryChat () {
    return new Promise<ChatHistoryInterface>((resolve, reject) => {
        axios.get('/api/chat-history/get-all')
            .then((res) => {
                const userChatHistory: ChatHistoryInterface = res.data;
                return resolve(userChatHistory);
            })
            .catch((err) => {
                if (err instanceof AxiosError) {
                    return reject(err.status)
                }
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

export function getChatRecordByChatId (chatId: string) {
    return new Promise<ConversationInterface[]>((resolve) => {
        axios.post('/api/chat-history/get-by-chatid', {chatId})
            .then((res) => {
                const response: {chatRecord: ConversationInterface[]} = res.data;
                resolve(response.chatRecord);
            })
            .catch((err) => console.log(err));
    })
}

export function deleteChatRecordByChatId (chatId: string) {
    return new Promise<boolean>( async (resolve) => {
        try {
            const response = await axios.post('/api/chat-history/delete-by-chatid', {chatId}, axiosConfig);
            const data: {success: boolean} = response.data;
            return resolve(data.success);
        } catch (err) {
            console.log(err);
        }
    })
}

export function getChatNameByChatId (chatId: string) {
    return new Promise<string>(async (resolve) => {
        try {
            const requestData: RenameSectionGetChatNameApiRequestDataInterface = {
                chatId,
            }
            const response = await axios.post<string>('/api/chat-history/rename/get-chat-name', requestData);
            return resolve(response.data);
        } catch (err) {
            console.log(err);
        }
    })
} 

export function updateChatNameByChatId ({
    chatId,
    newChatName,
}: {
    chatId: string,
    newChatName: string,
}) {
    return new Promise<void>(async (resolve) => {
        try {
            const requestData: RenameChatRecordApiRequestDataInterface = {
                chatId,
                newChatName,
            }

            const response = await axios.post<boolean>('/api/chat-history/rename/update-chat-name', requestData);
            if (response.data === true) {
                return resolve()
            }
        } catch (err) {
            console.log(err);
        }
    })
}