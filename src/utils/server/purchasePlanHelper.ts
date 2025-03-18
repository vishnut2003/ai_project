import { dbConnect } from "@/database/ConnectDB";
import PurchaseOrdersModel, { PurchaseOrdersModelInterface } from "@/models/PurchaseOrdersModel";
import SubscriptionsModel, { SubscriptionsModelInterface } from "@/models/SubscriptionsModel";
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
    return new Promise<string>(async (resolve, reject) => {
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
            
            let orderRecord: PurchaseOrdersModelInterface | null = null;

            if (order.status === "paid") {
                await dbConnect();
                orderRecord = await PurchaseOrdersModel.findOneAndUpdate({
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

            return resolve(orderRecord?.plan || "none");

        } catch (err) {
            return reject(err);
        }
    })
}

export async function ExtendPlanExpiry ({
    userId,
    plan,
}: {
    userId: string,
    plan: string,
}) {
    return new Promise<void>(async (resolve, reject) => {
        try {

            const daysToIncrease = plan === "yearly" ? 365 : plan === "monthly" ? 30 : 0;
            await dbConnect();

            const subscription: SubscriptionsModelInterface | null = await SubscriptionsModel.findOne({userId});

            if (subscription) {
                const subscriptionValidity = subscription.validTill;
                subscriptionValidity.setDate(subscriptionValidity.getDate() + daysToIncrease);
                
                await SubscriptionsModel.findOneAndUpdate({userId}, {
                    validTill: subscriptionValidity,
                })

                return resolve();
            }

            const validTill = new Date();
            validTill.setDate(validTill.getDate() + daysToIncrease);

            await SubscriptionsModel.create({
                userId,
                validTill,
            });

            return resolve();

        } catch (err) {
            return reject(err);
        }
    })
}
