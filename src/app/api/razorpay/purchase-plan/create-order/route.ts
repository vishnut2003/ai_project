import { PurchasePlanEntries } from "@/app/dashboard/pricing/page";
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request: NextRequest) {
    try {
        const {
            plan,
            amount,
        } = (await request.json()) as PurchasePlanEntries;

        const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
        const key_secret = process.env.RAZORPAY_SECRET_KEY;

        if (!key_id || !key_secret) {
            return NextResponse.json({ error: "API Key not found!" }, {
                status: 500,
            })
        }

        const razorpay = new Razorpay({
            key_id,
            key_secret,
        });

        const order = await razorpay.orders.create({
            amount: amount * 100,
            currency: "INR",
            receipt: `order_rcpt_${Date.now()}`,
        })

        return NextResponse.json({ order });

    } catch (err) {
        if (typeof err === "string") {
            return NextResponse.json({
                error: err
            }, { status: 500 });
        } else {
            return NextResponse.json({
                error: "something went wrong!",
            })
        }
    }
}