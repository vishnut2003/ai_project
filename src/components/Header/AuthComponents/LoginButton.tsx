import { getSignInUrl } from "@workos-inc/authkit-nextjs"
import Link from "next/link";

const LoginButton = async () => {

    const signInUrl = await getSignInUrl();

    return (
        <Link href={signInUrl}>
            <button className="py-3 px-8 bg-gradient-to-br from-white to-slate-300 hover:from-white hover:to-white transition-all text-secodary-color font-semibold text-sm rounded-md">Sign  In</button>
        </Link>
    )
}

export default LoginButton