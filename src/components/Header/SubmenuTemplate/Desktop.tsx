'use client';

import { HeaderMenuItemsInterface } from "../MenuItems"
import { RiArrowDownSLine } from "@remixicon/react";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const DesktopSubmenuTemplate = ({ menuItem }: {
    menuItem: HeaderMenuItemsInterface,
}) => {

    if (!menuItem.submenu) {
        return;
    }

    return (
        <div>
            <Popover>
                <PopoverTrigger
                    className="pb-[3px]"
                >
                    <li className='text-sm font-medium hover:text-slate-300 hover:scale-105 transition-all m-0 flex items-center gap-1'>
                        {menuItem.text}
                        <RiArrowDownSLine
                            size={20}
                        />
                    </li>
                </PopoverTrigger>
                <PopoverContent
                    className="w-max backdrop-blur-lg bg-black/70 border-0 relative top-[42px] py-5 px-6 shadow-2xl"
                >
                    <menuItem.submenu />
                </PopoverContent>
            </Popover>

        </div>
    )
}

export default DesktopSubmenuTemplate