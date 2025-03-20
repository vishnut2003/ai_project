import { RemixiconComponentType, RiCustomerService2Fill, RiMoneyDollarCircleLine, RiPassPendingLine } from "@remixicon/react"

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
        name: "Customer Service",
        icon: RiCustomerService2Fill,
        subMenu: [
            {
                name: "Contact Support",
                url: "#"
            }
        ]
    },
    {
        name: "Personal Info",
        icon: RiPassPendingLine,
        subMenu: [
            {
                name: "View personal data",
                url: "#",
            }
        ]
    },
    {
        name: "Payment & History",
        icon: RiMoneyDollarCircleLine,
        subMenu: [
            {
                name: "Payment method",
                url: "#",
            },
            {
                name: "Payment history",
                url: "/dashboard/payments/history",
            },
        ]
    }
]

export default sidebarMenuItems;
