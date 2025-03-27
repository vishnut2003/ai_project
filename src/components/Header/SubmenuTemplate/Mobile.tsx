'use client';

import React, { useState } from 'react'
import { HeaderMenuItemsInterface } from '../MenuItems'
import Link from 'next/link';
import { motion } from "framer-motion";
import { RiArrowDownSLine } from '@remixicon/react';

const MobileSubmenuItem = ({ menuItem }: {
    menuItem: HeaderMenuItemsInterface,
}) => {

    const [showSubmenu, setShowSubmenu] = useState<boolean>(false);

    if (!menuItem.submenu) {
        return;
    }

    return (
        <li key={menuItem.text} className='text-xl font-thin hover:text-slate-300 transition-all whitespace-nowrap m-0'>
            <button
                onClick={() => setShowSubmenu(prev => !prev)}
                className='flex items-center justify-between w-full'
            >
                {menuItem.text}
                <RiArrowDownSLine
                    size={20}
                />
            </button>
            {
                showSubmenu &&
                <motion.div
                    initial={{
                        scale: 0,
                    }}
                    animate={{
                        scale: 1,
                    }}
                >
                    <menuItem.submenu />
                </motion.div>
            }
        </li>
    )
}

export default MobileSubmenuItem