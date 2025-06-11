import { RiBarChartHorizontalLine } from "@remixicon/react"
import { Dispatch, SetStateAction } from "react"
import UserCard from "./UserCard"
import Link from "next/link"

const Header = ({ sidebarOpen, setSidebarOpen }: Readonly<{
  sidebarOpen: boolean,
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}>) => {

  return (
    <div className="py-4 px-5 flex flex-nowrap justify-between items-center w-full backdrop-blur-md">
      <div>
        {
          !sidebarOpen &&
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:bg-[#ffffff07] p-2 rounded-md">
            <RiBarChartHorizontalLine size={25} />
          </button>
        }
      </div>
      <div className="flex flex-nowrap gap-5">
        <a
          href={process.env.NEXT_PUBLIC_HOMEPAGE_URL}
          rel="noopener nofollow"
          className="hidden md:flex items-center justify-start gap-1 bg-white px-4 py-2 rounded-md text-secodary-color text-sm font-semibold"
        >
          Home
        </a>
        
        {/* Link to dashboard */}
        <Link
          href={'/dashboard'}
          className="flex items-center justify-start gap-1 bg-transparent px-4 py-2 border-2 border-white rounded-md text-white text-sm font-semibold"
        >
          Dashboard
        </Link>

        <div className="relative">
          <UserCard />
        </div>
      </div>
    </div>
  )
}

export default Header