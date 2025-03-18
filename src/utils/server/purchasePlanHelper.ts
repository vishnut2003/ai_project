import { dbConnect } from "@/database/ConnectDB";
import PurchaseOrdersModel from "@/models/PurchaseOrdersModel";
import Razorpay from "razorpay";

export async function DBCreateNewOrder(entry: {
    orderId: string,
    userId: string,
    plan: string,
    amount: number | string,
    paid: number | string,
    currency: string,
    method: string,
    status: "created" | "attempted" | "paid",
}) {
    return new Promise<void>(async (resolve, reject) => {
        try {
            // connect to db
            await dbConnect();

            await PurchaseOrdersModel.create(entry);
            return resolve();

        } catch (err) {
            return reject(err);
        }
    })
}

export async function DBUpdatePaymentOrderSuccess({ orderId, userId }: {
    orderId?: string,
    userId?: string,
}) {
    return new Promise<void>(async (resolve, reject) => {
        try {

            const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
            const key_secret = process.env.RAZORPAY_SECRET_KEY;

            if (!key_id || !key_secret) {
                return reject("API key required!");
            } else if (!orderId) {
                return reject("Order id required!");
            } else if (!userId) {
                return reject("Unautherized!");
            }

            const razorpay = new Razorpay({
                key_id,
                key_secret,
            });

            const order = await razorpay.orders.fetch(orderId)

            if (order.status === "paid") {
                await dbConnect();
                await PurchaseOrdersModel.findOneAndUpdate({
                    orderId,
                    userId,
                }, {
                    paid: order.amount_paid,
                    method: order.method,
                    status: order.status,
                });
            } else {
                return reject("Payment not completed!");
            }

            return resolve();

        } catch (err) {
            return reject(err);
        }
    })
}