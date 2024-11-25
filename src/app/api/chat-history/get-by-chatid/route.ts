import { getChatRecordByChatId } from "@/utils/server/historyHelper";
import { getSession } from "@workos-inc/authkit-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body: {chatId: string} = await request.json();
    
    // Fetch Current User and if no user return error
    const userInfo = await getSession();
    if (!userInfo || !userInfo.user) return NextResponse.json({error: 'No User Found!'}, {status: 400});

    // fetch chat record using chatId
    const chatRecord = await getChatRecordByChatId({
        chatId: body.chatId,
        userId: userInfo.user.id
    })

    return NextResponse.json({chatRecord});
}