import prebuildPrompts from "@/components/AiPage/PromptTextarea/PrebuildPrompts/PromptItems";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        if (prebuildPrompts) {
            return NextResponse.json(prebuildPrompts);
        } else {
            return NextResponse.json([]);
        }
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}