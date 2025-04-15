import Link from 'next/link'
import footerMenus from './FooterMenuItems'

const FooterMenu = ({ menu }: Readonly<{ menu: 'widgetMenuOne' | 'widgetMenuTwo' | 'widgetMenuThree' }>) => {
  return (
    <ol className='flex flex-col gap-4 list-none p-0'>
        {
            footerMenus[menu].map((menuItem) => (
                <li className='text-sm font-light m-0 flex items-center gap-2' key={menuItem.text}>
                  {
                    menuItem.icon &&
                    <menuItem.icon
                      size={20}
                    />
                  }
                  <p className='m-0'><Link href={menuItem.url} className='text-white'>{menuItem.text}</Link></p>
                </li>
            ))
        }
    </ol>
  )
}

export default FooterMenu