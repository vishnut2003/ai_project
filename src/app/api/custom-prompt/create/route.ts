import { createCustomePrompt } from "@/utils/server/customPromptHelper";
import { getSession } from "@workos-inc/authkit-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as { customPrompt: string }
        const userInfo = await getSession();

        // return if no user
        if (!userInfo || !userInfo.user) {
            return NextResponse.json({error: 'No user found!'}, {status: 400});
        }

        await createCustomePrompt({
            customPrompt: body.customPrompt,
            userId: userInfo.user.id
        });

        return NextResponse.json({ success: true })
    } catch (err) {
        return NextResponse.json({error: err}, {status: 500});
    }
}