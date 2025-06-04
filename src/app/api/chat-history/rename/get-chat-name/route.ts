import { getChatNameByChatId } from "@/utils/server/historyHelper";
import { getSession } from "@workos-inc/authkit-nextjs";
import { NextRequest, NextResponse } from "next/server";

export interface RenameSectionGetChatNameApiRequestDataInterface {
    chatId: string,
}

export async function POST(request: NextRequest) {
    try {
        const session = await getSession();

        if (!session?.user?.id) {
            throw new Error("Unauthorized User!");
        }

        const { chatId } = await request.json() as RenameSectionGetChatNameApiRequestDataInterface;

        const chatName = await getChatNameByChatId({
            chatId,
            userId: session.user.id,
        });

        return NextResponse.json(chatName);
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json(err.message, { status: 500 });
        } else if (typeof err === "string") {
            return NextResponse.json(err, { status: 500 });
        } else {
            return NextResponse.json("Something went wrong!", { status: 500 });
        }
    }
}