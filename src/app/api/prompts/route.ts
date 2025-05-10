import prebuildPrompts from "@/components/AiPage/PromptTextarea/PrebuildPrompts/PromptItems";
import { NextRequest, NextResponse } from "next/server";

const allowedOrigin = "*";

export async function OPTIONS() {
    const response = new NextResponse(null, { status: 204 });

    response.headers.set('Access-Control-Allow-Origin', allowedOrigin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
}

export async function GET() {
    try {
        let response: NextResponse | null;
        if (prebuildPrompts) {
            response = NextResponse.json(prebuildPrompts);
        } else {
            response = NextResponse.json([]);
        }

        response.headers.set('Access-Control-Allow-Origin', allowedOrigin);
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

        return response;
    } catch (err) {
        return NextResponse.json(err, { status: 500 });
    }
}