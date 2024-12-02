import mongoose from "mongoose";

export interface CustomPromptInterface extends mongoose.Document {
    userId: string,
    prompts: string[]
}

const customPromptSchema = new mongoose.Schema<CustomPromptInterface>({
    userId: String,
    prompts: [String]
})


export default mongoose.models.CustomPrompts || mongoose.model<CustomPromptInterface>('CustomPrompts', customPromptSchema);
// export default mongoose.model<CustomPromptInterface>('CustomPrompts', customPromptSchema);