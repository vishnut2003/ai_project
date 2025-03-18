import { AfterSuccessRequestData } from "@/app/dashboard/pricing/page";
import { DBUpdatePaymentOrderSuccess } from "@/utils/server/purchasePlanHelper";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {

        const entry = (await request.json()) as AfterSuccessRequestData;
        await DBUpdatePaymentOrderSuccess(entry);

        return NextResponse.json({
            success: true,
        });

    } catch (err) {
        console.log(err);
        if (typeof err === "string") {
            return NextResponse.json({
                error: err,
            }, { status: 500 })
        } else {
            return NextResponse.json({
                error: "Something went wrong!",
            }, { status: 500 });
        }
    }
}