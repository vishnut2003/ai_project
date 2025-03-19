import { fetchSubscriptionExpiryDate } from "@/utils/server/purchasePlanHelper";
import { getSession } from "@workos-inc/authkit-nextjs";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        let session = await getSession();

        if (!session) {
            session = {
                user: null,
            }
        }

        const userId = session.user?.id || "none";
        const expiryDate = await fetchSubscriptionExpiryDate({
            userId,
        })
        
        return NextResponse.json({ expiryDate });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 })
    }
}