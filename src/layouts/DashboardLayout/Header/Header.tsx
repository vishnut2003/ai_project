import { RiSidebarUnfoldLine } from "@remixicon/react"
import { Dispatch, SetStateAction } from "react"

const Header = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean,
  setSidebarOpen: Dispatch<SetStateAction<boolean>>,
}) => {
  return (
    <div
      className="p-5"
    >
      <div>
        {
          !sidebarOpen &&
          <button
            onClick={() => setSidebarOpen(prev => !prev)}
          >
            <RiSidebarUnfoldLine
              size={25}
            />
          </button>
        }
      </div>
    </div>
  )
}

export default Header