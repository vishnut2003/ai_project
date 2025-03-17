'use client';

import { ReactNode, useEffect, useState } from "react"
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Header/Header"
import { NoUserInfo, UserInfo } from "@workos-inc/authkit-nextjs/dist/esm/interfaces";
import { authVerify } from "@/utils/client/authHelper";

const DashboardLayout = ({
    children,
    pageTitle,
}: {
    children?: ReactNode,
    pageTitle?: string,
}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<UserInfo | NoUserInfo>({ user: null });

    useEffect(() => {
        authVerify()
            .then((session) => {
                if (session && session.user) {
                    setCurrentUser(session);
                    console.log()
                }
            })
    }, []);

    return (
        <div className="bg-[#ffffff07]">
            <div className="flex max-w-[100vw] h-dvh">
                <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    currentUser={currentUser}
                />
                <div className="max-h-[100vh] w-full flex flex-col justify-between">
                    <Header
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                        pageTitle={pageTitle}
                    />
                    <div className="flex flex-col h-full overflow-hidden p-5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout