import { dbConnect } from "@/database/ConnectDB";
import ChatHistoryModel from "@/models/ChatHistoryModel";
import { getSession } from "@workos-inc/authkit-nextjs";
import { NextResponse } from "next/server";

export async function GET() {
    // get current user
    const userInfo = await getSession();

    // Return if no user fount
    if (!userInfo || !userInfo.user) return NextResponse.json({ error: "No User found" }, { status: 400 })

    // Connect Database
    await dbConnect();

    try {
        const chats = await ChatHistoryModel.findOne({userId: userInfo.user.id});
        return NextResponse.json(chats)
    } catch (err) {
        return NextResponse.json({err}, {status: 500});
    }

}