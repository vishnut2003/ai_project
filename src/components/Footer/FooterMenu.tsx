import Link from 'next/link'
import footerMenus from './FooterMenuItems'

const FooterMenu = ({ menu }: Readonly<{ menu: 'widgetMenuOne' | 'widgetMenuTwo' | 'widgetMenuThree' }>) => {
  return (
    <ol className='flex flex-col gap-4 list-none p-0'>
        {
            footerMenus[menu].map((menuItem) => (
                <li className='text-sm font-light m-0' key={menuItem.text}>
                  <p><Link href={menuItem.url}>{menuItem.text}</Link></p>
                </li>
            ))
        }
    </ol>
  )
}

export default FooterMenu