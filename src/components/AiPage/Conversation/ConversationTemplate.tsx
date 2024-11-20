import ConversationInterface from "@/interfaces/conversation"
import Conversations from "./Conversations";

const ConversationTemplate = ({conversation}: Readonly<{conversation: ConversationInterface[]}>) => {
  return (
    <div className={`h-full overflow-y-auto flex flex-col items-center`}>
        <div className='flex justify-center w-full h-max md:w-3/4 p-3'>
            <Conversations conversation={conversation}/>
        </div>
    </div>
  )
}

export default ConversationTemplate