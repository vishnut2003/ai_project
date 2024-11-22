import { getSession } from "@workos-inc/authkit-nextjs";
import { NextResponse } from "next/server";

export async function GET () {
    let userInfo = await getSession()
    if(!userInfo) userInfo = {user: null}

    return NextResponse.json(userInfo)
}