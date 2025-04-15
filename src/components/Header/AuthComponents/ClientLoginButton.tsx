import { authSigninUrl } from "@/utils/client/authHelper";
import { useEffect, useState } from "react";

const ClientLoginButton = () => {

    const [signinUrl, setsigninUrl] = useState<string | null>(null);

    useEffect(() => {
        authSigninUrl()
            .then((url) => setsigninUrl(url))
    }, [])

    if (signinUrl) {
        return (
            <a
                href={signinUrl}
                rel="noopener noreferrer nofollow"
            >
                <button className="py-3 px-8 bg-gradient-to-br from-white to-slate-300 hover:from-white hover:to-white transition-all text-secodary-color font-semibold text-sm rounded-md">Sign  In</button>
            </a>
        )
    } else {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
}

export default ClientLoginButton;