'use client';

import { authSigninUrl } from '@/utils/client/authHelper';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const SidebarSigninButton = () => {

    const [signinUrl, setSigninUrl] = useState<string>('')

    useEffect(() => {
        authSigninUrl()
        .then((url) => {
            setSigninUrl(url);
        })
    })

  return (
    <Link href={signinUrl} className='w-full'>
        <button className='py-2 w-full bg-gradient-to-br from-white to-slate-300 text-secodary-color rounded-md'>SignIn</button>
    </Link>
  )
}

export default SidebarSigninButton