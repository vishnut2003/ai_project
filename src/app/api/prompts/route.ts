import prebuildPrompts from "@/components/AiPage/PromptTextarea/PrebuildPrompts/PromptItems";
import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = [
    "https://wordpress.ailawgpt.com",
    "https://ailawgpt.com",
];

export async function OPTIONS(request: NextRequest) {
    const origin = request.headers.get('origin') || '';
    const isAllowed = allowedOrigins.includes(origin);

    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': isAllowed ? origin : '',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Vary': 'Origin',
        },
    });
}

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