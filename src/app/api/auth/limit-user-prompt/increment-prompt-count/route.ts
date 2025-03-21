import { incrementPromptsCount } from "@/utils/server/limitUserPrompt";
import { getSession } from "@workos-inc/authkit-nextjs";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const session = await getSession();
        await incrementPromptsCount(session?.user?.id);
        return NextResponse.json({success: true});
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: err }, { status: 500 });
    }
}