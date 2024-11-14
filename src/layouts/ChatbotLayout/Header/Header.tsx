import { RiArrowDownSFill, RiArrowDropLeftLine } from "@remixicon/react"
import Link from "next/link"

const Header = () => {
  return (
    <div className="py-4 px-5 flex flex-nowrap justify-between items-center absolute top-0 left-0 w-full">
      <div>
        <Link href={'/'} className="flex items-center justify-start gap-1">
          <RiArrowDropLeftLine size={23} />
          <p>Home</p>
        </Link>
      </div>
      <div>
        <div>
          <button className="flex flex-nowrap gap-1 items-center hover:bg-[#ffffff15] py-2 px-4 rounded-lg">My Account <RiArrowDownSFill size={18}/></button>
        </div>
      </div>
    </div>
  )
}

export default Header