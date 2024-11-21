import ConversationInterface from "@/interfaces/conversation"
import { RiBardFill, RiErrorWarningFill, RiUser6Line } from "@remixicon/react"
import Markdown from "markdown-to-jsx"
import ConversationLoadingEffect from "./ConversationLoadingEffect"
import { useEffect } from "react"

const Conversations = ({ conversation, requestInProgress, scrollToBottom }: Readonly<{
    conversation: ConversationInterface[],
    requestInProgress: boolean,
    scrollToBottom: () => null
}>) => {

    useEffect(() => {
        scrollToBottom();
    }, [conversation]);

    return (
        <div className="flex flex-col gap-5 w-full h-max">
            {conversation.map((conversationTurn, index) => (
                <div 
                key={index} className={
                    `flex flex-nowrap gap-2 max-w-[90%] bg-gradient-to-br from-[#ffffff01] to-[#ffffff05] px-6 py-3 rounded-md
                ${conversationTurn.from === "user" ? 'flex-row-reverse self-end' : 'flex-row self-start'}
                ${conversationTurn.error && 'bg-red-600'}`}>
                    {
                        conversationTurn.from === "ai_assistant" ?
                            conversationTurn.error ? <RiErrorWarningFill size={17} /> :
                                <RiBardFill size={17} className="min-w-7" /> :
                            <RiUser6Line size={17} className="min-w-7" />
                    }
                    <div className="text-sm font-extralight text-left leading-6 w-full list-decimal">
                        <Markdown>
                            {conversationTurn.message!}
                        </Markdown>
                    </div>
                </div>
            ))}
            {
                requestInProgress &&
                <ConversationLoadingEffect/>
            }
        </div>
    )
}

export default Conversations