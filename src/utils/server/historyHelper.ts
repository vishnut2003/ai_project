import { dbConnect } from "@/database/ConnectDB";
import ConversationInterface from "@/interfaces/conversation";
import ChatHistoryModel, { ChatHistoryInterface } from "@/models/ChatHistoryModel";
import { v4 as v4uuid } from 'uuid'

export async function processNewChatHistory({ userId, chatId, userPrompt, modelPrompt }: {
    userId: string,
    chatId: string,
    userPrompt: ConversationInterface,
    modelPrompt: ConversationInterface
}) {
    return new Promise<string>(async (resolve, reject) => {
        try {
            const userHistory = await ChatHistoryModel.findOne({ userId });
            const chatRecord = await ChatHistoryModel.findOne({ "history.chatId": chatId });

            if (!userHistory) {
                const chatId = await createNewUserChatHistory({ userId, userPrompt, modelPrompt });
                return resolve(chatId);
            } else if (!chatRecord) {
                const chatId = await generateNewChatHistory({ userId, userPrompt, modelPrompt });
                return resolve(chatId);
            } else {
                const updatedChatId = await updateChatRecord({ chatId, userId, userPrompt, modelPrompt });
                return resolve(updatedChatId);
            }
        } catch (err) {
            return reject(err);
        }
    })
}

export async function createNewUserChatHistory({ userId, userPrompt, modelPrompt }: {
    userId: string,
    userPrompt: ConversationInterface,
    modelPrompt: ConversationInterface
}) {
    return new Promise<string>(async (resolve, reject) => {
        try {
            const chatName = generateChatNameFromModelPrompt(modelPrompt.message!);
            const chatId: string = v4uuid();

            const newUserChatHistory = await ChatHistoryModel.create({
                userId,
                history: [{
                    chatName,
                    chatId,
                    chatRecords: [{ ...userPrompt }, { ...modelPrompt }]
                }]
            })

            return resolve(newUserChatHistory.history[0].chatId);
        } catch (err) {
            return reject(err);
        }
    })
}

export function generateChatNameFromModelPrompt(modelPrompt: string) {
    const dividedPrompt = modelPrompt.split('.');
    const chatName = dividedPrompt[0];
    return chatName;
}

export async function generateNewChatHistory({ userId, userPrompt, modelPrompt }: {
    userId: string,
    userPrompt: ConversationInterface,
    modelPrompt: ConversationInterface
}) {
    return new Promise<string>(async (resolve, reject) => {
        const chatName: string = generateChatNameFromModelPrompt(modelPrompt.message!);
        const chatId: string = v4uuid();
        try {
            await ChatHistoryModel.findOneAndUpdate({ userId }, {
                $push: {
                    history: {
                        chatName: chatName,
                        chatId: chatId,
                        chatRecords: [{ ...userPrompt }, { ...modelPrompt }]
                    }
                }
            })
            resolve(chatId)
        } catch (err) {
            return reject(err);
        }
    })
}

async function updateChatRecord({ userId, chatId, userPrompt, modelPrompt }: {
    userId: string,
    chatId: string,
    userPrompt: ConversationInterface,
    modelPrompt: ConversationInterface
}) {
    return new Promise<string>(async (resolve, reject) => {
        try {
            await ChatHistoryModel.findOneAndUpdate({ userId }, {
                $push: {
                    "history.$[chat].chatRecords": {
                        $each: [{ ...userPrompt }, { ...modelPrompt }]
                    }
                }
            }, {
                arrayFilters: [{ "chat.chatId": chatId }]
            })

            return resolve(chatId);
        } catch (err) {
            return reject(err);
        }
    })
}

// get chat record by chatid
export async function getChatRecordByChatId({ chatId, userId }: {
    chatId: string,
    userId: string
}) {
    return new Promise<ConversationInterface[]>(async (resolve, reject) => {
        try {
            // Initialize batabase connection
            await dbConnect()

            // Fetch chat record using chatId
            const userHistory: ChatHistoryInterface | null = await ChatHistoryModel.findOne({ userId }, 'history');

            // if no user chat history
            if (!userHistory) throw new Error("No User History found!");

            // find chatRecord from user History
            const chatRecord: ConversationInterface[] = await findChatRecordFromHistory({ userHistory, chatId })

            return resolve(chatRecord);


        } catch (err) {
            return reject(err);
        }
    })
}

// Find chat record from user history
async function findChatRecordFromHistory({ userHistory, chatId }: {
    userHistory: ChatHistoryInterface | null,
    chatId: string
}) {
    return new Promise<ConversationInterface[]>(async (resolve) => {
        let chatRecord: ConversationInterface[];
        if (userHistory) {
            const searchFullHistory = userHistory.history.map((chat) => {
                if (chat.chatId === chatId) {
                    chatRecord = chat.chatRecords;
                }
            })
            await Promise.all(searchFullHistory);
            return resolve(chatRecord!);
        }
    })
}