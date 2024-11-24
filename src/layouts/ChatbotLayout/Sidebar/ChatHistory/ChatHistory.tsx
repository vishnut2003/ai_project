import { ChatHistoryInterface } from "@/models/ChatHistoryModel"
import { getHistoryChat } from "@/utils/client/historyHelper"
import Link from "next/link"
import { useEffect, useState } from "react"

const ChatHistory = () => {

  const [chatHistory, setChatHistory] = useState<ChatHistoryInterface>()

  useEffect(() => {
    getHistoryChat()
      .then((userHistory: ChatHistoryInterface) => {
        setChatHistory(userHistory)
      })
  }, [])

  return (
    <div className="w-full flex flex-col gap-5 overflow-hidden">
      <h2 className="text-base font-semibold">Recent Chats</h2>

      {/* Chat history list */}
      <div className="h-full overflow-y-auto">
        <div className="flex flex-col-reverse gap-2 h-max">
          {chatHistory?.history.map((chat, index) => (
            <div key={index} className="py-2 px-4 bg-[#ffffff05] truncate rounded-md shadow-md">
              <Link href={'#'} className="text-sm">{chat.chatName}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChatHistory