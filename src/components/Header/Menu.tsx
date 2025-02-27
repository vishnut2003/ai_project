import Link from 'next/link';
import menuItems from './MenuItems';
import MobileSidebarMenu from './MobileSidebarMenu';

const Menu = () => {
  return (
    <>
      <ol className='gap-10 hidden md:flex m-0 list-none p-0'>
        {menuItems.map((menuItem) => (
          <li key={menuItem.text} className='text-sm font-medium hover:text-slate-300 hover:scale-105 transition-all m-0'><Link href={menuItem.url} className='text-white'>{menuItem.text}</Link></li>
        ))}
      </ol>

      <MobileSidebarMenu/>
    </>
  )
}

export default Menu