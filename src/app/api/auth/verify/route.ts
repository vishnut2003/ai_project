import { getSession } from "@workos-inc/authkit-nextjs";
import { NextResponse } from "next/server";

export async function GET () {
    const userInfo = await getSession()
    return NextResponse.json(userInfo)
}