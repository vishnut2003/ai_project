import { clientSignout } from "@/components/Header/AuthComponents/MobileSidebarComponents/clientSignout"
import { RiAuctionLine, RiLogoutBoxRLine, RiScales3Line, RiUser6Line } from "@remixicon/react"
import Link from "next/link"
import { useActionState } from "react"

const SidebarFooter = () => {

    const [signoutState, signoutAction] = useActionState(clientSignout, null);

    return (
        <div>
            {/* footer actions */}
            <div className="flex flex-col gap-5">

                {/* Upgrade to pro plan */}
                <div className="flex justify-start items-center gap-3">
                    <RiUser6Line size={20} />
                    <p className="text-sm font-light w-full flex justify-between items-center m-0 whitespace-nowrap">
                        Upgrade to plus
                        <span className="py-1 px-4 bg-yellow-200 text-black rounded-lg text-xs font-semibold">New</span>
                    </p>
                </div>

                {/* Judgements Button */}
                <Link href={'#'} className="flex justify-start gap-3">
                    <RiAuctionLine size={20} />
                    <p className="text-sm font-light m-0 whitespace-nowrap">Judgements</p>
                </Link>
                
                {/* Acts and Laws Button */}
                <Link href={'#'} className="flex justify-start gap-3">
                    <RiScales3Line size={20} />
                    <p className="text-sm font-light m-0 whitespace-nowrap">Acts and Laws</p>
                </Link>

                {/* Logout button */}
                <form action={signoutAction}>
                    <button type="submit" className="flex justify-start gap-3">
                        { !signoutState && <RiLogoutBoxRLine size={20} />}
                        <p className="text-sm font-light m-0 whitespace-nowrap">Sign out</p>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SidebarFooter