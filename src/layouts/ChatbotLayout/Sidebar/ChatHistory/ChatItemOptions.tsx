import { deleteChatRecordByChatId } from "@/utils/client/historyHelper"
import { RiDeleteBin6Line, RiPencilLine } from "@remixicon/react"

const ChatItemOptions = ({chatId, refreshChatHistory}: {
  chatId: string,
  refreshChatHistory: () => void
}) => {
  return (
    <div className="py-2 px-4 bg-[#ffffff15] rounded-lg mt-2 flex flex-col gap-2">
        <button 
        onClick={ async () => {
          const success = await deleteChatRecordByChatId(chatId);
          if (success) return refreshChatHistory();
        }}
        className="flex flex-nowrap justify-between items-center gap-3 w-full py-2 px-3 rounded-md hover:bg-secodary-color">
            <p className="m-0 text-sm font-thin">Delete</p>
            <RiDeleteBin6Line size={14} color="red"/>
        </button>
        
        <button className="flex flex-nowrap justify-between items-center gap-3 w-full py-2 px-3 rounded-md hover:bg-secodary-color">
            <p className="m-0 text-sm font-thin">Edit Name</p>
            <RiPencilLine size={14}/>
        </button>
    </div>
  )
}

export default ChatItemOptions