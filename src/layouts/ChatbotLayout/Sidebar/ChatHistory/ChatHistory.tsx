import { getHistoryChat } from "@/utils/client/historyHelper"
import { useEffect } from "react"

const ChatHistory = () => {
  
  useEffect(() => {
    getHistoryChat()
  }, [])

  return (
    <div className="w-full">
        <h2 className="text-base font-semibold">Recent Chats</h2>
    </div>
  )
}

export default ChatHistory