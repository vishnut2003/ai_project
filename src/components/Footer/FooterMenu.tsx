import Link from 'next/link'
import footerMenus from './FooterMenuItems'

const FooterMenu = ({ menu }: Readonly<{ menu: 'widgetMenuOne' | 'widgetMenuTwo' | 'widgetMenuThree' }>) => {
  return (
    <ol className='flex flex-col gap-4'>
        {
            footerMenus[menu].map((menuItem) => (
                <li className='text-sm font-light' key={menuItem.text}>
                  <Link href={menuItem.url}>{menuItem.text}</Link>
                </li>
            ))
        }
    </ol>
  )
}

export default FooterMenu