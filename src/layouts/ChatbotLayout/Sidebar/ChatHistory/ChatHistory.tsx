import { ChatHistoryInterface } from "@/models/ChatHistoryModel"
import { getHistoryChat } from "@/utils/client/historyHelper"
import { RiPencilLine } from "@remixicon/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import ChatItemOptions from "./ChatItemOptions"
import TripleDotLoading from "@/components/TripleDotLoading/TripleDotLoading"

const ChatHistory = () => {

  const [chatHistory, setChatHistory] = useState<ChatHistoryInterface>();
  const [chatOptionPopup, setChatOptionPopup] = useState({})
  const [historyLoading, setHistoryLoading] = useState(false);
  const [notLoggedIn, setNotLoggedIn] = useState<boolean>(false);

  function refreshChatHistory() {
    setHistoryLoading(true)
    getHistoryChat()
      .then((userHistory: ChatHistoryInterface) => {
        setChatHistory(userHistory)
        setHistoryLoading(false);
      })
      .catch((err) => {
        if (err === 400) {
          setNotLoggedIn(true);
          setHistoryLoading(false);
        }
      })
  }

  useEffect(() => {
    refreshChatHistory()
  }, [])


  return (
    <div className="w-full flex flex-col gap-3 overflow-hidden h-full">

      {/* Chat history list */}
      <div className="h-full overflow-y-auto">
        <div className="flex flex-col-reverse gap-2 h-max">

          {/* Loading Effect */}
          {historyLoading && <TripleDotLoading />}

          {/* Show template for not logged in users */}
          {
              notLoggedIn &&
              <div>
                <p
                  className="text-sm text-center"
                >Please login for access history!</p>
              </div>
          }

          {/* Loop the chats */}
          {
          !historyLoading &&
          chatHistory?.history.map((chat, index) => (
            <div key={index} className="py-2 px-4 hover:bg-[#ffffff04] rounded-md relative">
              <div className="flex flex-nowrap items-center justify-between gap-2">
                <p className="truncate m-0">
                  <Link href={`/ai/${chat.chatId}`} className="text-sm w-full">
                    {chat.chatName}
                  </Link>
                </p>
                <RiPencilLine
                  onClick={() => setChatOptionPopup({ ...chatOptionPopup, [index]: !chatOptionPopup[index as keyof typeof chatOptionPopup] })}
                  size={16}
                  className="cursor-pointer min-w-6" />
              </div>

              {/* Chat edit option */
                chatOptionPopup[index as keyof typeof chatOptionPopup] &&
                <ChatItemOptions chatId={chat.chatId} refreshChatHistory={refreshChatHistory} />
              }
            </div>
          ))}

          {!chatHistory || chatHistory.history.length === 0 ?
            <div>
              <p className="text-xs text-center font-extralight text-[#ffffff50]">Your chat history will show here. you can select or delete from here</p>
            </div> : ''
          }
        </div>
      </div>
    </div>
  )
}

export default ChatHistory