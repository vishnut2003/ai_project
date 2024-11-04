import Link from 'next/link';
import menuItems from './MenuItems';
import MobileSidebarMenu from './MobileSidebarMenu';

const Menu = () => {
  return (
    <>
      <ol className='gap-10 hidden md:flex'>
        {menuItems.map((menuItem) => (
          <li key={menuItem.text} className='text-sm font-medium hover:text-slate-300 hover:scale-105 transition-all'><Link href={menuItem.url}>{menuItem.text}</Link></li>
        ))}
      </ol>

      <MobileSidebarMenu/>
    </>
  )
}

export default Menu