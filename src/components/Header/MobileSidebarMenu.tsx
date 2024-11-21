'use client';

import Link from 'next/link';
import menuItems from './MenuItems';
import { useEffect, useState } from 'react';
import SidebarSignupButton from './AuthComponents/SidebarSignupButton';
import SignupSigninButton from './AuthComponents/SignupSigninButton';
import { authVerify } from '@/utils/client/authHelper';
import { NoUserInfo, UserInfo } from '@workos-inc/authkit-nextjs/dist/esm/interfaces';
import MobileUserCard from './AuthComponents/MobileUserCard';

const MobileSidebarMenu = () => {
    const [mobileSidebar, setMobileSibar] = useState(false)
    const [userInfo, setUserInfo] = useState<UserInfo | NoUserInfo>({ user: null })

    useEffect(() => {
        authVerify()
            .then((userInfo) => {
                setUserInfo(userInfo);
            })
    }, [setUserInfo])

    return (
        <div>
            <button
                onClick={() => setMobileSibar(!mobileSidebar)}
                className={`md:hidden flex flex-col gap-2 ${mobileSidebar && 'gap-0'}`}>
                <div className={`w-8 h-0.5 bg-white transition-all ${mobileSidebar && 'rotate-45 translate-y-2'}`}></div>
                <div className={`w-8 h-0.5 bg-white transition-all ${mobileSidebar && 'hidden'}`}></div>
                <div className={`w-8 h-0.5 bg-white transition-all ${mobileSidebar && '-rotate-45 -translate-y-2'}`}></div>
            </button>

            {/* Mobile sidebar */}
            <div className={`fixed top-0 left-0 p-10 bg-secodary-color h-full shadow-lg shadow-black flex flex-col justify-between overflow-hidden transition-all z-10 ${!mobileSidebar ? 'w-0 px-0' : 'w-3/4'}`}>
                <div className='flex flex-col gap-10'>
                    <div className='z-10'>
                        <h2 className="text-3xl font-bold">LOGO</h2>
                    </div>
                    <ol className='flex flex-col gap-5 z-10'>
                        {menuItems.map((menuItem) => (
                            <li key={menuItem.text} className='text-xl font-thin hover:text-slate-300 hover:scale-105 transition-all whitespace-nowrap'><Link href={menuItem.url}>{menuItem.text}</Link></li>
                        ))}
                    </ol>
                </div>

                {/* Mobile sidebar signin signup button or user card for signin user */}
                <div className='flex flex-nowrap justify-center items-center gap-2 z-10'>
                    {
                        !userInfo.user ?
                        <>
                            <SignupSigninButton />
                            <SidebarSignupButton />
                        </>:
                        <MobileUserCard userInfo={userInfo}/>
                    }
                </div>

                {/* Sidebar overlay bg */}
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secodary-color to-primary-color opacity-10 z-0'></div>
            </div>
        </div>
    )
}

export default MobileSidebarMenu