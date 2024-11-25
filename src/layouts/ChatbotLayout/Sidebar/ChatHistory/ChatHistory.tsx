import { ChatHistoryInterface } from "@/models/ChatHistoryModel"
import { getHistoryChat } from "@/utils/client/historyHelper"
import { RiPencilLine } from "@remixicon/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import ChatItemOptions from "./ChatItemOptions"

const ChatHistory = () => {

  const [chatHistory, setChatHistory] = useState<ChatHistoryInterface>();
  const [chatOptionPopup, setChatOptionPopup] = useState({})

  useEffect(() => {
    getHistoryChat()
      .then((userHistory: ChatHistoryInterface) => {
        setChatHistory(userHistory)
      })
  }, [])

  return (
    <div className="w-full flex flex-col gap-3 overflow-hidden">
      <h2 className="text-base font-semibold">Recent Chats</h2>

      {/* Chat history list */}
      <div className="h-full overflow-y-auto">
        <div className="flex flex-col-reverse gap-2 h-max">
          {chatHistory?.history.map((chat, index) => (
            <div key={index} className="py-2 px-4 bg-[#ffffff08] rounded-md shadow-md relative">
              <div className="flex flex-nowrap items-center justify-between gap-2">
                <p className="truncate m-0">
                  <Link href={`/ai/${chat.chatId}`} className="text-sm w-full">
                    {chat.chatName}
                  </Link>
                </p>
                <RiPencilLine
                  onClick={() => setChatOptionPopup({ ...chatOptionPopup, [index]: !chatOptionPopup[index as keyof typeof chatOptionPopup] })}
                  size={20}
                  className="cursor-pointer min-w-6" />
              </div>

              {/* Chat edit option */
                chatOptionPopup[index as keyof typeof chatOptionPopup] &&
                <ChatItemOptions />
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChatHistory