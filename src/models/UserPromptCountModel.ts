import mongoose from 'mongoose';

export interface UserPromptCountModelInterface extends mongoose.Document {
    userId: string,
    promptCount: number,
    lastPromptDate: string,
}

const userPromptCountSchema = new mongoose.Schema<UserPromptCountModelInterface>({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    promptCount: {
        type: Number,
        required: true,
        default: 0,
    },
    lastPromptDate: {
        type: String,
        required: true,
    }
})

export default mongoose.models.UserPromptCount || mongoose.model<UserPromptCountModelInterface>('UserPromptCount', userPromptCountSchema);
