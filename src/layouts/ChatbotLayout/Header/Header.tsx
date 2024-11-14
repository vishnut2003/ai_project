import { RiArrowDownSFill, RiArrowDropLeftLine, RiBarChartHorizontalLine } from "@remixicon/react"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react"

const Header = ({ sidebarOpen, setSidebarOpen }: Readonly<{
  sidebarOpen: boolean,
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}>) => {
  return (
    <div className="py-4 px-5 flex flex-nowrap justify-between items-center absolute top-0 left-0 w-full">
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
      <div className="flex flex-nowrap gap-3">
        <Link href={'/'} className="flex items-center justify-start gap-1 bg-white px-4 rounded-md text-secodary-color text-sm font-semibold">Home</Link>
        <div>
          <button className="flex flex-nowrap gap-1 items-center hover:bg-[#ffffff15] py-2 px-4 rounded-lg">My Account <RiArrowDownSFill size={18} /></button>
        </div>
      </div>
    </div>
  )
}

export default Header