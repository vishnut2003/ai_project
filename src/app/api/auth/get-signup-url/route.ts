import { getSignUpUrl } from "@workos-inc/authkit-nextjs";
import { NextResponse } from "next/server";

export async function GET () {
    const signupUrl = await getSignUpUrl();
    return NextResponse.json(signupUrl);
}