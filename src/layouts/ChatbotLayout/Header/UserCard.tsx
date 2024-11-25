import { clientSignout } from "@/components/Header/AuthComponents/MobileSidebarComponents/clientSignout"
import { authVerify } from "@/utils/client/authHelper"
import { RiArrowRightSLine } from "@remixicon/react"
import { NoUserInfo, UserInfo } from "@workos-inc/authkit-nextjs/dist/esm/interfaces"
import Image from "next/image"
import { useActionState, useEffect, useState } from "react"

const UserCard = () => {

    const [userInfo, setUserInfo] = useState<UserInfo | NoUserInfo>({ user: null });
    const [signoutState, signoutAction] = useActionState(clientSignout, null);

    useEffect(() => {
        authVerify()
            .then((userInfo) => {
                setUserInfo(userInfo);
            })
    }, [])

    return (
        <>
            {
                userInfo.user &&
                <div className="flex flex-nowrap gap-2 w-full">

                    <div className="flex flex-col">
                        <p className="m-0 font-semibold text-base whitespace-nowrap">Hello, {userInfo.user?.firstName}</p>

                        <form action={signoutAction} className="flex justify-end">
                            <button className="flex flex-nowrap gap-1 items-center justify-end">
                                <p className="m-0 font-thin text-xs whitespace-nowrap">Log out</p>
                                {!signoutState && <RiArrowRightSLine size={16} />}
                            </button>
                        </form>
                    </div>
                    <div>
                        <Image
                            alt="user avatar"
                            src={userInfo.user?.profilePictureUrl ? userInfo.user.profilePictureUrl : "/users/avatar-placeholder.png"}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </div>

                </div>
            }
        </>
    )
}

export default UserCard