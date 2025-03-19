import { isDeviceMobile } from "@/utils/client/common"
import { RiChatAiLine, RiCloseCircleFill, RiLoader4Line, RiLogoutCircleLine, RiSidebarFoldLine } from "@remixicon/react"
import { NoUserInfo, UserInfo } from "@workos-inc/authkit-nextjs/dist/esm/interfaces"
import Image from "next/image"
import Link from "next/link"
import { Dispatch, SetStateAction, useActionState, useEffect, useState } from "react"
import sidebarMenuItems from "./menuItems"
import MenuItemTemplate from "./MenuItemTemplate"
import { clientSignout } from "@/components/Header/AuthComponents/MobileSidebarComponents/clientSignout"
import { validateUserSubscription, ValidUserSubscription } from "@/utils/client/subscriptionsHelper"

const Sidebar = ({
    sidebarOpen,
    setSidebarOpen,
    currentUser,
}: {
    sidebarOpen: boolean,
    setSidebarOpen: Dispatch<SetStateAction<boolean>>,
    currentUser: UserInfo | NoUserInfo | null,
}) => {

    const [signoutState, signoutAction] = useActionState(clientSignout, null);
    const [userSubscription, setUserSubscription] = useState<ValidUserSubscription | null | "loading">("loading");

    useEffect(() => {
        const isMobile = isDeviceMobile();
        if (!isMobile) {
            setSidebarOpen(true);
        }

        validateUserSubscription()
            .then((subscription) => {
                setUserSubscription(subscription);
            })
    }, [setSidebarOpen]);

    return (
        <div className={`${sidebarOpen ? 'min-w-[270px]' : 'min-w-0 px-0'} fixed md:static z-20 h-full transition-all overflow-hidden w-0 bg-secodary-color p-5 flex flex-col justify-between gap-3`}>

            {/* Sidebar Header */}
            <div
                className="flex justify-between w-full items-center"
            >
                <h2
                    className="text-2xl font-semibold"
                >LegallYours</h2>
                <button
                    onClick={() => setSidebarOpen(prev => !prev)}
                >
                    <RiSidebarFoldLine
                        size={25}
                    />
                </button>
            </div>

            <div className="flex flex-col gap-2 h-full overflow-auto min-h-0">
                <div
                    className="h-max"
                >
                    {/* Profile */}
                    <div
                        className="space-y-5"
                    >
                        <h3
                            className="text-lg opacity-70"
                        >Profile</h3>
                        <div
                            className="w-full flex flex-col gap-3 items-center"
                        >
                            <div
                                className="w-[100px] h-[100px] border border-white/30 rounded-full flex justify-center items-center overflow-hidden"
                            >
                                {
                                    !currentUser?.user ?
                                        <RiLoader4Line
                                            size={25}
                                            className="animate-spin"
                                        />
                                        : <Image
                                            src={currentUser.user.profilePictureUrl || "/users/avatar-placeholder.png"}
                                            alt="User Profile Image"
                                            width={500}
                                            height={500}
                                            style={{
                                                width: "100%"
                                            }}
                                        />
                                }
                            </div>
                            <div
                                className="w-full flex justify-center"
                            >
                                {
                                    currentUser?.user ?
                                        <p
                                            className="text-xl font-semibold whitespace-nowrap m-0"
                                        >Hello, {currentUser.user.firstName} <span role="img" aria-label="check">👋</span></p>
                                        : <p
                                            className="bg-white/15 p-[10px] w-1/2 rounded-md animate-pulse"
                                        ></p>
                                }
                            </div>

                            {/* Logout button */}
                            <form action={signoutAction} className="">
                                <button type="submit" className="flex gap-2 items-center">
                                    {!signoutState && <RiLogoutCircleLine size={20} />}
                                    <p className="text-sm font-light m-0 whitespace-nowrap">Sign out</p>
                                </button>
                            </form>
                        </div>

                        <h3
                            className="text-lg opacity-70 whitespace-nowrap"
                        >Your Plan</h3>

                        <div
                            className="flex justify-start items-center gap-3 w-full"
                        >
                            {
                                !userSubscription ?
                                    <>
                                        <div>
                                            <RiCloseCircleFill
                                                size={23}
                                                className="text-red-500"
                                            />
                                        </div>
                                        <p
                                            className="whitespace-nowrap m-0"
                                        >No Active Plans</p>
                                    </>
                                    : userSubscription === "loading" ?
                                        <p
                                            className="bg-white/15 p-[10px] w-full rounded-md animate-pulse"
                                        ></p>
                                        : userSubscription ?
                                        <div
                                            className="w-full bg-white/5 py-2 px-4 rounded-md font-medium flex flex-col gap-3"
                                        >
                                            <p
                                                className="m-0"
                                            >
                                                <b
                                                    className="opacity-70 flex text-sm font-light"
                                                >Days left</b>
                                                {userSubscription.daysLeft}</p>
                                            <p
                                                className="m-0"
                                            >
                                                <b
                                                    className="opacity-70 flex text-sm font-light"
                                                >Valid till</b>
                                                {userSubscription.validTill.toISOString().split('T')[0].split('-').join('/')}</p>
                                        </div>
                                        : ""
                            }

                        </div>

                        <Link
                            className="bg-white flex w-max whitespace-nowrap text-secodary-color py-2 px-4 font-semibold text-sm rounded-md"
                            href={'/dashboard/pricing'}
                        >{userSubscription && userSubscription !== "loading" ? "Extend Validity" : "View Pricing"}</Link>

                        <h3
                            className="text-lg opacity-70"
                        >Settings</h3>

                        <div>

                            {/* Menu Items */}
                            <div
                                className="rounded-lg overflow-hidden"
                            >
                                {
                                    sidebarMenuItems.map((menuItem, index) => (
                                        <MenuItemTemplate
                                            key={index}
                                            menuItem={menuItem}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Footer */}
            <div className="h-max min-h-max overflow-hidden pt-5 border-t border-white/10">
                <Link
                    className="flex gap-2 items-center hover:bg-white/5 w-full px-4 py-3 rounded-md"
                    href={'/ai'}
                >
                    <RiChatAiLine
                        size={25}
                    />
                    <p
                        className="text-lg m-0"
                    >New Chat</p>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar