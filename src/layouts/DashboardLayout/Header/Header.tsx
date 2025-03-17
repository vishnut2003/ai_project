import { RiSidebarUnfoldLine } from "@remixicon/react"
import { Dispatch, SetStateAction } from "react"

const Header = ({
  sidebarOpen,
  setSidebarOpen,
  pageTitle,
}: {
  sidebarOpen: boolean,
  setSidebarOpen: Dispatch<SetStateAction<boolean>>,
  pageTitle?: string
}) => {
  return (
    <div
      className="p-5"
    >
      <div
        className="flex items-center gap-3"
      >
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

        <h2
          className="text-xl font-semibold"
        >{pageTitle}</h2>
      </div>
    </div>
  )
}

export default Header