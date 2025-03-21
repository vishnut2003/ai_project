import React, { useState } from 'react'
import { DashboardSidebarMenuInterface } from './menuItems'
import { RiArrowDownSLine } from '@remixicon/react'
import Link from 'next/link';

const MenuItemTemplate = ({
    menuItem
}: {
    menuItem: DashboardSidebarMenuInterface,
}) => {

    const [subMenuOpen, setSubMenuOpen] = useState<boolean>(true);

    return (
        <div
            className='bg-white/5 w-full'
        >
            <button
                className='flex justify-between items-center gap-3 py-4 px-5 w-full'
                onClick={() => setSubMenuOpen(prev => !prev)}
            >
                <div
                    className='flex justify-start items-center gap-3'
                >
                    <div>
                        <menuItem.icon
                            size={20}
                        />
                    </div>
                    <p
                        className='m-0 text-sm text-left whitespace-nowrap'
                    >{menuItem.name}</p>
                </div>
                {
                    menuItem.subMenu &&
                    <div>
                        <RiArrowDownSLine
                            size={15}
                            className={`${subMenuOpen && "rotate-180"}`}
                        />
                    </div>
                }
            </button>

            {
                subMenuOpen &&
                <div
                    className='px-4 py-1 border-t border-b border-white/5'
                >
                    <div>
                        {
                            menuItem.subMenu?.map((item, index) => (
                                <Link
                                    href={item.url}
                                    key={index}
                                    className='py-4 px-5 rounded-md hover:bg-white/5 block'
                                >
                                    <p
                                        className='m-0 text-sm whitespace-nowrap'
                                    >{item.name}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default MenuItemTemplate