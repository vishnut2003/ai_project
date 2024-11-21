import { RiLogoutBoxRLine, RiUser6Line } from "@remixicon/react";
import {motion} from "framer-motion"

const MyAccountPopup = ({ isMyAccountPopup }: Readonly<{
    isMyAccountPopup: boolean
}>) => {

    if (isMyAccountPopup) {
        return (
            <motion.div 
            initial={{
                scale: 0.95
            }}
            animate={{
                scale: 1
            }}
            className="absolute overflow-hidden right-0 top-12 bg-secodary-color rounded-md shadow-md p-5 flex flex-col gap-4">
                <div className="flex flex-nowrap gap-2 justify-center items-center">
                    <RiUser6Line size={20} className="rounded-full bg-[#ffffff10] text-white w-8 h-8 p-2" />
                    <div>
                        <p className="text-sm m-0">Vishnu</p>
                        <p className="text-xs font-thin m-0">vishnu@webspidersolutions.com</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-nowrap justify-start items-center gap-2 hover:bg-[#ffffff10] py-2 px-3 rounded-md cursor-pointer">
                        <RiLogoutBoxRLine size={15} />
                        <p className="text-sm whitespace-nowrap m-0">Log out</p>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default MyAccountPopup