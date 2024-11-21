import ConversationInterface from "@/interfaces/conversation"
import Conversations from "./Conversations";
import { useRef } from "react";

const ConversationTemplate = ({conversation, requestInProgress}: Readonly<{
  conversation: ConversationInterface[],
  requestInProgress: boolean
}>) => {

  const chatEndRef = useRef<HTMLDivElement>(null)

  function scrollToBottom () {
    chatEndRef.current?.scrollIntoView({behavior: "smooth"})
    return null
  }

  return (
    <div className={`h-full overflow-y-auto flex flex-col items-center`}>
        <div className='flex flex-col justify-between min-h-full items-center w-full h-max md:w-3/4 p-3'>
            <Conversations conversation={conversation} requestInProgress={requestInProgress} scrollToBottom={scrollToBottom}/>
            
            {/* This Empty div using for scroll to bottom */}
            <div ref={chatEndRef}></div>
        </div>
    </div>
  )
}

export default ConversationTemplate