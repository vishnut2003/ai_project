import { generateTextResponse } from "@/utils/server/genAi";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const requestBody: {prompt: string} = await request.json();
    
    try {
        const promptText = await generateTextResponse(requestBody.prompt)
        return NextResponse.json(promptText, {status: 200});
    } catch (err) {
        return NextResponse.json(err, {status: 500});
    }
}