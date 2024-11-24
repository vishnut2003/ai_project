import ConversationInterface from "@/interfaces/conversation";
import { processNewChatHistory } from "@/utils/server/historyHelper";
import { getSession } from "@workos-inc/authkit-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body: {
        chatId: string, 
        userPrompt: ConversationInterface,
        modelPrompt: ConversationInterface 
    } = await request.json();
    const userInfo = await getSession();

    // Return if no user
    if(!userInfo || !userInfo.user) return NextResponse.json({error: "User not found!"});

    // pass to history helper function
    try {
        const chatId = await processNewChatHistory({
            chatId: body.chatId,
            userId: userInfo.user.id,
            userPrompt: body.userPrompt,
            modelPrompt: body.modelPrompt
        })
        return NextResponse.json({chatId: chatId});
    } catch(err) {
        return NextResponse.json({error: err}, {status: 500});
    }
}