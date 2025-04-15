import { RemixiconComponentType, RiInstagramLine } from "@remixicon/react"

interface FooterMenuItemsInterface {
    icon?: RemixiconComponentType,
    text: string,
    url: string,
}

const widgetMenuOne: FooterMenuItemsInterface[] = [
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
    }
]

const widgetMenuTwo: FooterMenuItemsInterface[] = [
    {
        text: 'Privacy Policy',
        url: '/support/privacy-policy'
    },
    {
        text: 'Terms & Conditions',
        url: '/support/terms-conditions'
    },
    {
        text: 'Cookies Policy',
        url: '/support/cookies-policy'
    }
]

const widgetMenuThree: FooterMenuItemsInterface[] = [
    {
        text: 'Instagram',
        icon: RiInstagramLine,
        url: 'https://www.instagram.com/_legallyours/'
    },
]

const FooterMenuItems = { widgetMenuOne, widgetMenuTwo, widgetMenuThree }

export default FooterMenuItems