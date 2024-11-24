import ConversationInterface from "@/interfaces/conversation";
import ChatHistoryModel from "@/models/ChatHistoryModel";
import {v4 as v4uuid} from 'uuid'

export async function processNewChatHistory({userId, chatId, userPrompt, modelPrompt}: {
    userId: string,
    chatId: string,
    userPrompt: ConversationInterface,
    modelPrompt: ConversationInterface
}) {
    return new Promise <string> ( async (resolve, reject) => {
        try {
            const userHistory = await ChatHistoryModel.findOne({userId});
            const chatRecord = await ChatHistoryModel.findOne({"history.chatId": chatId});

            if (!userHistory) {
                const chatId = await createNewUserChatHistory({userId, userPrompt, modelPrompt});
                return resolve(chatId);
            } else if (!chatRecord){
                const chatId = await generateNewChatHistory({userId, userPrompt, modelPrompt});
                return resolve(chatId);
            } else {
                const updatedChatId = await updateChatRecord({chatId, userId, userPrompt, modelPrompt});
                return resolve(updatedChatId);
            }
        } catch (err) {
            return reject(err);
        }
    })
}

export async function createNewUserChatHistory({userId, userPrompt, modelPrompt}: {
    userId: string,
    userPrompt: ConversationInterface,
    modelPrompt: ConversationInterface
}) {
    return new Promise<string>( async (resolve, reject) => {
        try {
            const chatName = generateChatNameFromModelPrompt(modelPrompt.message!);
            const chatId: string = v4uuid();
            
            const newUserChatHistory = await ChatHistoryModel.create({
                userId,
                history: [{
                   chatName,
                   chatId,
                   chatRecords: [{...userPrompt}, {...modelPrompt}]
                }]
            })

            return resolve(newUserChatHistory.history[0].chatId);
        } catch (err) {
            return reject(err);
        }
    }) 
}

export function generateChatNameFromModelPrompt (modelPrompt: string) {
    const dividedPrompt = modelPrompt.split('.');
    const chatName = dividedPrompt[0];
    return chatName;
}

export async function generateNewChatHistory ({userId, userPrompt, modelPrompt}: {
    userId: string,
    userPrompt: ConversationInterface,
    modelPrompt: ConversationInterface
}) {
    return new Promise <string> ( async (resolve, reject) => {
        const chatName: string = generateChatNameFromModelPrompt(modelPrompt.message!);
        const chatId: string = v4uuid();
        try {
            await ChatHistoryModel.findOneAndUpdate({userId}, {
                $push: {
                    history: {
                        chatName: chatName,
                        chatId: chatId,
                        chatRecords: [{...userPrompt}, {...modelPrompt}]
                    }
                }
            })
            resolve(chatId)
        } catch (err) {
            return reject(err);
        }
    })
}

async function updateChatRecord({userId, chatId, userPrompt, modelPrompt}: {
    userId: string,
    chatId: string,
    userPrompt: ConversationInterface,
    modelPrompt: ConversationInterface
}) {
    return new Promise <string> ( async (resolve, reject) => {
        try {
            await ChatHistoryModel.findOneAndUpdate({userId}, {
                $push: {
                    "history.$[chat].chatRecords": {
                        $each: [{...userPrompt}, {...modelPrompt}]
                    }
                }
            }, {
                arrayFilters: [{"chat.chatId": chatId}]
            })

            return resolve(chatId);
        } catch (err) {
            return reject(err);
        }
    })
}