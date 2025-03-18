import mongoose from "mongoose";

export interface SubscriptionsModelInterface extends mongoose.Document {
    userId: string,
    validTill: Date,
}

const subscriptionSchema = new mongoose.Schema<SubscriptionsModelInterface>({
    userId: {
        type: String,
        required: true,
    },
    validTill: {
        type: Date,
        required: true,
    },
}, { timestamps: true, })

export default mongoose.models.Subscriptions || mongoose.model<SubscriptionsModelInterface>('Subscriptions', subscriptionSchema);