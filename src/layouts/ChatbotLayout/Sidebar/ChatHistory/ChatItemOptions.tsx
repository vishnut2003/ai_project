import { deleteChatRecordByChatId } from "@/utils/client/historyHelper"
import { RiDeleteBin6Line, RiPencilLine } from "@remixicon/react"
import { useState } from "react"
import RenameChat from "./RenameChat"

const ChatItemOptions = ({chatId, refreshChatHistory, closePopup}: {
  chatId: string,
  refreshChatHistory: () => void,
  closePopup: () => void,
}) => {

  const [deleteInprocess, setDeleteInProcess] = useState(false)
  const [enableRenamePopup, setEnableRenamePopup] = useState<boolean>(false);

  return (
    <div className="py-2 px-4 bg-[#ffffff08] rounded-lg mt-2 flex flex-col gap-2">
        <button 
        onClick={ async () => {
          setDeleteInProcess(true)
          const success = await deleteChatRecordByChatId(chatId);
          if (success) {
            setDeleteInProcess(false)
            closePopup();
            return refreshChatHistory();
          }
        }}
        className="flex flex-nowrap justify-between items-center gap-3 w-full py-2 px-3 rounded-md hover:bg-secodary-color">
            <p className="m-0 text-sm font-thin">Delete</p>
            {
              deleteInprocess ?
              <div className="w-2 h-2 border-l border-b border-white animate-spin rounded-full"></div> :
              <RiDeleteBin6Line size={14} color="red"/>
            }
        </button>
        
        <button 
          className="flex flex-nowrap justify-between items-center gap-3 w-full py-2 px-3 rounded-md hover:bg-secodary-color"
          onClick={() => {
            setEnableRenamePopup(true);
          }}
        >
            <p className="m-0 text-sm font-thin">Edit Name</p>
            <RiPencilLine size={14}/>
        </button>

        {
          enableRenamePopup &&
          <RenameChat
            chatId={chatId}
            onCancel={() => {
              setEnableRenamePopup(false);
            }}
            onSuccess={() => {
              refreshChatHistory();
            }}
          />
        }
    </div>
  )
}

export default ChatItemOptions