import { RemixiconComponentType, RiMoneyDollarCircleLine } from "@remixicon/react"

export interface DashboardSidebarMenuInterface {
    name: string,
    icon: RemixiconComponentType,
    url?: string,
    subMenu?: {
        name: string,
        url: string,
    }[],
}

const sidebarMenuItems: DashboardSidebarMenuInterface[] = [
    {
        name: "Payment & History",
        icon: RiMoneyDollarCircleLine,
        subMenu: [
            {
                name: "Payment history",
                url: "/dashboard/payments/history",
            },
        ]
    }
]

export default sidebarMenuItems;
