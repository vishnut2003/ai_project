import { updateChatNameByChatId } from "@/utils/server/historyHelper";
import { getSession } from "@workos-inc/authkit-nextjs";
import { NextResponse } from "next/server";

export interface RenameChatRecordApiRequestDataInterface {
    chatId: string,
    newChatName: string,
}

export async function POST(request: NextResponse) {
    try {
        const session = await getSession();
        if (!session?.user?.id) {
            throw new Error("unauthorized user!");
        }

        const {
            chatId, newChatName,
        } = await request.json() as RenameChatRecordApiRequestDataInterface;
        
        await updateChatNameByChatId({
            userId: session.user.id,
            chatId,
            newChatName,
        });

        return NextResponse.json(true);
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