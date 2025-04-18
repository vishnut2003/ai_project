import { RiBarChartHorizontalLine, RiEdit2Line } from "@remixicon/react"
import { Dispatch, SetStateAction } from "react"
import ChatHistory from "./ChatHistory/ChatHistory"
import SidebarFooter from "./SidebarFooter/SidebarFooter"
import Link from "next/link"

const Sidebar = ({ sidebarOpen, setSidebarOpen }: Readonly<{ sidebarOpen: boolean, setSidebarOpen: Dispatch<SetStateAction<boolean>> }>) => {
  return (
    <div className={`${sidebarOpen ? 'min-w-[270px]' : 'min-w-0 px-0'} fixed md:static z-20 h-full transition-all overflow-hidden w-0 bg-secodary-color p-5 flex flex-col justify-between gap-3`}>
      <div className="flex flex-col gap-2 h-full min-h-0">
        <div className="flex justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:bg-[#ffffff07] p-2 rounded-md">
            <RiBarChartHorizontalLine size={25} />
          </button>
          <button className="hover:bg-[#ffffff07] bg-[#ffffff] text-secodary-color hover:text-white transition-all p-2 rounded-md">
            <Link href={'/ai'}>
              <RiEdit2Line size={24} />
            </Link>
          </button>
        </div>
        <ChatHistory />
      </div>

      {/* Sidebar Footer */}
      <div className="h-max min-h-max overflow-hidden pt-5 border-t border-white/10">
        <SidebarFooter />
      </div>
    </div>
  )
}

export default Sidebar