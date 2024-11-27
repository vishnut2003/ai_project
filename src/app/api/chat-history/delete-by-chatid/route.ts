import { deleteChatRecordByChatId } from "@/utils/server/historyHelper";
import { getSession } from "@workos-inc/authkit-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    const body: {chatId: string} = await request.json();
    const userInfo = await getSession();

    if (!userInfo || !userInfo.user) {
        return NextResponse.json({error: "User not found!"}, {status: 400});
    }

    try {
        await deleteChatRecordByChatId({
            chatId: body.chatId,
            userId: userInfo.user.id
        });
        return NextResponse.json({success: true});
    } catch (err) {
        return NextResponse.json({error: err}, {status: 500});
    }
}