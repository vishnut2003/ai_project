import { RiDeleteBin6Line, RiPencilLine } from "@remixicon/react"

const ChatItemOptions = () => {
  return (
    <div className="py-2 px-4 bg-secodary-color rounded-lg mt-2 flex flex-col gap-2">
        <button className="flex flex-nowrap justify-between items-center gap-3 w-full">
            <p className="m-0 text-xs font-thin">Delete</p>
            <RiDeleteBin6Line size={14} color="red"/>
        </button>
        
        <button className="flex flex-nowrap justify-between items-center gap-3 w-full">
            <p className="m-0 text-xs font-thin">Edit Name</p>
            <RiPencilLine size={14}/>
        </button>
    </div>
  )
}

export default ChatItemOptions