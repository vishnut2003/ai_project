import { ComponentType } from "react"
import Resources from "./SubmenuItems/Resources"

export interface HeaderMenuItemsInterface {
    text: string,
    url: string,
    submenu?: ComponentType,
}

const HeaderMenuItems: HeaderMenuItemsInterface[] = [
    {
        text: 'Home',
        url: '/'
    },
    {
        text: 'AI',
        url: '/ai'
    },
    {
        text: 'Blogs',
        url: '/blogs'
    },
    {
        text: 'Contact Us',
        url: '/contact'
    },
    {
        text: "Resources",
        url: "#",
        submenu: Resources,
    }
]

export default HeaderMenuItems