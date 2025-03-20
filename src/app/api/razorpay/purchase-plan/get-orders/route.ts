import { PaymentHistoryFilterRequestDataInterface } from "@/app/dashboard/payments/history/page";
import { getPurchaseOrders } from "@/utils/server/purchasePlanHelper";
import { getSession } from "@workos-inc/authkit-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as PaymentHistoryFilterRequestDataInterface;

        const session = await getSession();
        if (
            !session ||
            !session.user?.id
        ) {
            console.log(session)
            console.log(session?.user)
            throw new Error("User not authenticated!");
        }

        const finalResponse = await getPurchaseOrders({
            filters: body,
            userId: session.user.id,
        })

        return NextResponse.json(finalResponse);

    } catch (err) {
        console.log(err);
        return NextResponse.json({
            error: err
        }, { status: 500 });
    }
}