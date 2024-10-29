import Link from 'next/link';
import menuItems from './MenuItems';

const Menu = () => {
  return (
    <ol className='flex gap-10'>
        {menuItems.map((menuItem) => (
            <li key={menuItem.text} className='text-sm font-medium hover:text-slate-300 hover:scale-105 transition-all'><Link href={menuItem.url}>{menuItem.text}</Link></li>
        ))}
    </ol>
  )
}

export default Menu