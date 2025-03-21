import { getRemainingAttempts } from "@/utils/server/limitUserPrompt";
import { getSession } from "@workos-inc/authkit-nextjs";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const session = await getSession();
        const remainingPromptCount = await getRemainingAttempts({userId: session?.user?.id});
        return NextResponse.json(remainingPromptCount);
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}