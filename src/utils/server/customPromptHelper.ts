import { dbConnect } from "@/database/ConnectDB"
import CustomPromptsModel, { CustomPromptInterface } from "@/models/CustomPromptModel"

export async function createCustomePrompt ({customPrompt, userId}: {
    customPrompt: string,
    userId: string
}) {
    return new Promise<void>( async (resolve, reject) => {
        try {
            await dbConnect()
            const userPromptsDoc = await CustomPromptsModel.findOne({userId});
            
            if(userPromptsDoc) {
                await CustomPromptsModel.findOneAndUpdate({userId}, {
                    $push: {
                        prompts: customPrompt
                    }
                })
            } else {
                CustomPromptsModel.create({userId, prompts: customPrompt})
            }

            return resolve();
        } catch (err) {
            return reject(err);
        }
    })
}