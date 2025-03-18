import mongoose from "mongoose";

export interface PurchaseOrdersModelInterface extends mongoose.Document {
    orderId: string,
    userId: string,
    plan: string,
    amount: number | string,
    paid: number | string,
    currency: string,
    method?: string,
    status: "created" | "attempted" | "paid",
}

const PurchaseOrderSchema = new mongoose.Schema<PurchaseOrdersModelInterface>({
    orderId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    plan: {
        type: String,
        required: true,
    },
    amount: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    paid: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    method: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

export default mongoose.models.PurchaseOrder || mongoose.model<PurchaseOrdersModelInterface>('PurchaseOrder', PurchaseOrderSchema);
