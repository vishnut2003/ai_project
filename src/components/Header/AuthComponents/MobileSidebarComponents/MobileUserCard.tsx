'use client';

import { RiArrowRightSLine } from "@remixicon/react";
import { NoUserInfo, UserInfo } from "@workos-inc/authkit-nextjs/dist/esm/interfaces";
import Image from "next/image";
import { useActionState } from "react";
import { clientSignout } from "./clientSignout";

const MobileUserCard = ({ userInfo }: Readonly<{
    userInfo: UserInfo | NoUserInfo
}>) => {

    const [signoutState, signoutAction] = useActionState(clientSignout, null);

    return (
        <div className="flex flex-nowrap gap-2 w-full">
            <div>
                <Image
                    alt="user avatar"
                    src={userInfo.user?.profilePictureUrl ? userInfo.user.profilePictureUrl : "/users/avatar-placeholder.png"}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
            </div>

            <div className="flex flex-col">
                <p className="m-0 font-semibold text-base whitespace-nowrap">Hello, {userInfo.user?.firstName}</p>

                <form action={signoutAction}>
                    <button className="flex flex-nowrap gap-1 items-center justify-start">
                        <p className="m-0 font-thin text-xs whitespace-nowrap">Log out</p>
                        {
                            !signoutState && <RiArrowRightSLine size={16} />
                        }
                    </button>
                </form>
            </div>

        </div>
    )
}

export default MobileUserCard