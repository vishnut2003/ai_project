import { getSignInUrl } from "@workos-inc/authkit-nextjs";
import { NextResponse } from "next/server";

export async function GET () {
    const signinUrl = await getSignInUrl();
    return NextResponse.json(signinUrl);
}