import { getBlogsBySearchText } from "@/utils/server/blogsHelper";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest) {
    try {
        const body = await request.json() as {
            searchText: string,
        }
        const posts = await getBlogsBySearchText(body.searchText);
        return NextResponse.json({posts});
    } catch (err) {
        return NextResponse.json({
            error: err,
        }, {
            status: 500,
        })
    }
}