import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {

    const requestBody: {prompt: string} = await request.json();
    console.log(process.env.GENAI_API_KEY)

    return NextResponse.json({text: 'Test hello'});
}