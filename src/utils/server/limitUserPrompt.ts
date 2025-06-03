import { dbConnect } from "@/database/ConnectDB";
import UserPromptCountModel, { UserPromptCountModelInterface } from "@/models/UserPromptCountModel";

const MaxPromptCountPerUser = 20;

export async function getRemainingAttempts({ userId }: {
    userId?: string,
}) {
    return new Promise<number>(async (resolve, reject) => {
        try {
            if (!userId) {
                userId = "none"
            }

            await dbConnect();

            const today = new Date().toISOString().split('T')[0];
            const promptCountDetails: UserPromptCountModelInterface | null = await UserPromptCountModel.findOne({ userId })

            if (promptCountDetails) {
                if (promptCountDetails.lastPromptDate === today) {
                    const remainingPromptCount = MaxPromptCountPerUser - promptCountDetails.promptCount;
                    return resolve(remainingPromptCount);
                } else {
                    // if promptCountDetails exist and not todays data, then update the data with today date
                    promptCountDetails.$set({
                        lastPromptDate: today,
                        promptCount: 0,
                    })
                    await promptCountDetails.save();

                    // Return the max value per user
                    return resolve(MaxPromptCountPerUser);
                }
            } else {
                return resolve(MaxPromptCountPerUser);
            }
        } catch (err) {
            return reject(err);
        }
    })
}

export async function incrementPromptsCount(userId?: string) {
    return new Promise<void>(async (resolve, reject) => {
        try {
            if (!userId) {
                throw new Error("UserId required!");
            }

            await dbConnect();

            const promptCountDetails: UserPromptCountModelInterface | null = await UserPromptCountModel.findOne({ userId });

            if (promptCountDetails) {
                promptCountDetails.$inc("promptCount", 1);
                console.log(promptCountDetails);
                await promptCountDetails.save();
            } else {
                const today = new Date().toISOString().split('T')[0];
                await UserPromptCountModel.create({
                    userId,
                    promptCount: 1,
                    lastPromptDate: today,
                })
            }

            return resolve();
        } catch (err) {
            return reject(err);
        }
    })
}