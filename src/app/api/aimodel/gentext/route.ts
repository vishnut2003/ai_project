import { generateTextResponse } from "@/utils/server/genAi";
import { Content } from "@google/generative-ai";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const requestBody: {historyConversation: Content[]} = await request.json();
    
    try {
        const promptText = await generateTextResponse(requestBody.historyConversation)
        return NextResponse.json(promptText, {status: 200});
    } catch (err) {
        return NextResponse.json(err, {status: 500});
    }
}