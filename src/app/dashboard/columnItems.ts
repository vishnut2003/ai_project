import { RemixiconComponentType, RiHistoryLine, RiMoneyDollarCircleLine } from "@remixicon/react"

interface DashboardColumnItemsInterface {
    heading: string,
    items: {
        icon: RemixiconComponentType,
        title: string,
        description: string,
        url: string,
        buttonText: string,
    }[],
}

const dashboardColumnItems: DashboardColumnItemsInterface[] = [
    {
        heading: "Payments & History",
        items: [
            {
                icon: RiMoneyDollarCircleLine,
                title: "Pricing",
                description: "Flexible pricing plans tailored to your needs, with transparent rates and no hidden charges.",
                url: "/dashboard/pricing",
                buttonText: "View Pricing",
            },
            {
                icon: RiHistoryLine,
                title: "Payment History",
                description: "Complete record of all your past transactions, including dates, amounts, and payment methods used.",
                url: "/dashboard/payments/history",
                buttonText: "View Payment History",
            }
        ]
    }
]

export default dashboardColumnItems;