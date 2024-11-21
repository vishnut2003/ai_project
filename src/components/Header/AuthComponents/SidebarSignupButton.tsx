'use client';

import { authSignupUrl } from "@/utils/client/authHelper";
import Link from "next/link"
import { useEffect, useState } from "react";

const SidebarSignupButton = () => {
    const [signupUrl, setSignupUrl] = useState<string>('');
    
    useEffect(() => {
        authSignupUrl()
        .then((url) => {
            setSignupUrl(url);
        })
    }, [setSignupUrl])

    return (
        <Link href={signupUrl} className="w-full">
            <button className='py-2 w-full border-2 border-white rounded-md'>SignUp</button>
        </Link>
    )
}

export default SidebarSignupButton