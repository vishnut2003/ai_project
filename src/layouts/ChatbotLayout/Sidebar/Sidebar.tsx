import { RiBarChartHorizontalLine, RiEdit2Line } from "@remixicon/react"
import { Dispatch, SetStateAction } from "react"

const Sidebar = ({sidebarOpen, setSidebarOpen}: Readonly<{sidebarOpen: boolean, setSidebarOpen: Dispatch<SetStateAction<boolean>>}>) => {
  return (
    <div className={`${sidebarOpen ? 'min-w-[270px]' : 'min-w-0 px-0'} fixed md:static z-20 h-full transition-all overflow-hidden w-0 bg-secodary-color p-5`}>
      <div className="flex justify-between">
        <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="hover:bg-[#ffffff07] p-2 rounded-md">
          <RiBarChartHorizontalLine size={25} />
        </button>
        <button className="hover:bg-[#ffffff07] bg-[#ffffff] text-secodary-color hover:text-white transition-all p-2 rounded-md">
          <RiEdit2Line size={24}/>
        </button>
      </div>
    </div>
  )
}

export default Sidebar