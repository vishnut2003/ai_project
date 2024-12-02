import { getAllCustomPrompt } from "@/utils/server/customPromptHelper";
import { getSession } from "@workos-inc/authkit-nextjs";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const userInfo = await getSession();

        // return if no user found
        if (!userInfo || !userInfo.user) {
            return NextResponse.json({ error: 'No user found!' }, { status: 400 });
        }

        const userPrompts = await getAllCustomPrompt({ userId: userInfo.user.id });
        return NextResponse.json({ prompts: userPrompts });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}