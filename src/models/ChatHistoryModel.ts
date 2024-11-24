import ConversationInterface from "@/interfaces/conversation";
import mongoose from "mongoose";

export interface ChatHistoryInterface extends mongoose.Document {
    userId: string,
    history: {
        chatName: string,
        chatId: string,
        chatRecords: ConversationInterface[]
    }[]
}

const chatHistory = new mongoose.Schema<ChatHistoryInterface>({
    userId: {
        type: String,
        required: true
    },
    history: [{
        chatName: String,
        chatId: String,
        chatRecords: [{
            from: {
                type: String,
                required: true
            },
            message: {
                type: String,
                required: true
            },
            error: {
                type: Boolean,
                required: false
            }
        }]
    }]
}, { timestamps: true });



export default mongoose.models.ChatHistory || mongoose.model<ChatHistoryInterface>('ChatHistory', chatHistory);
// export default mongoose.model<ChatHistoryInterface>('ChatHistory', chatHistory);