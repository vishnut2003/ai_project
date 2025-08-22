import { clientSignout } from "@/components/Header/AuthComponents/MobileSidebarComponents/clientSignout"
import { authVerify } from "@/utils/client/authHelper";
import { RiLogoutBoxRLine, RiUser6Line } from "@remixicon/react"
import Link from "next/link";
import { useActionState, useEffect, useState } from "react"

const SidebarFooter = () => {

    const [signoutState, signoutAction] = useActionState(clientSignout, null);
    const [isLoggedin, setIsLoggedin] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const session = await authVerify();

            if (session.user) {
                setIsLoggedin(true);
            }
        })()
    }, [])

    return (
        <div className="min-h-max">
            {/* footer actions */}
            <div className="flex flex-col gap-5 h-full min-h-0">

                {/* Upgrade to pro plan */}
                <Link
                    className="flex justify-start items-center gap-3 min-h-0 h-full"
                    href={'/dashboard/pricing'}
                >
                    <RiUser6Line size={20} />
                    <p className="text-sm font-light w-full flex justify-between items-center m-0 whitespace-nowrap">
                        Upgrade to plus
                        <span className="py-1 px-4 bg-yellow-200 text-black rounded-lg text-xs font-semibold">New</span>
                    </p>
                </Link>

                {/* Judgements Button */}
                {/* <Link href={'#'} className="flex justify-start gap-3 min-h-0 h-full">
                    <RiAuctionLine size={20} />
                    <p className="text-sm font-light m-0 whitespace-nowrap">Judgements</p>
                </Link> */}

                {/* Acts and Laws Button */}
                {/* <Link href={'#'} className="flex justify-start gap-3 min-h-0 h-full">
                    <RiScales3Line size={20} />
                    <p className="text-sm font-light m-0 whitespace-nowrap">Acts and Laws</p>
                </Link> */}

                {/* Logout button */

                    isLoggedin &&
                    <form action={signoutAction} className="flex justify-start gap-3 min-h-0 h-full">
                        <button type="submit" className="flex justify-start gap-3 min-h-0">
                            {!signoutState && <RiLogoutBoxRLine size={20} />}
                            <p className="text-sm font-light m-0 whitespace-nowrap">Sign out</p>
                        </button>
                    </form>
                }
            </div>
        </div>
    )
}

export default SidebarFooter