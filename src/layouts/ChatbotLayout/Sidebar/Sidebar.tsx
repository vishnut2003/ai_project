import { RiBarChartHorizontalLine } from "@remixicon/react"

const Sidebar = () => {
  return (
    <div className="min-w-[270px] bg-secodary-color p-5">
      <div>
        <button className="hover:bg-[#ffffff07] p-2 rounded-md">
          <RiBarChartHorizontalLine size={25} />
        </button>
      </div>
    </div>
  )
}

export default Sidebar