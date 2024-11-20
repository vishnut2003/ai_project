import ConversationInterface from "@/interfaces/conversation"
import PromptTextarea from "../PromptTextarea/PromptTextarea"
import { Dispatch, SetStateAction } from "react"
import supportLinkItems from "./supportLinkItems"
import Link from "next/link"

const IntroPromptArea = ({conversation, setConversation}: Readonly<{
    conversation: ConversationInterface[],
    setConversation: Dispatch<SetStateAction<ConversationInterface[]>>
}>) => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="max-w-4xl w-full flex flex-col gap-4">
                <h2 className="text-2xl text-center">Im <b>AI Law</b>, your legal expert</h2>
                <PromptTextarea conversation={conversation} setConversation={setConversation} />
                <div className="flex justify-center gap-3 md:gap-10 opacity-65">
                    {supportLinkItems.map((supportItem, index) => (
                        <Link key={index} href={supportItem.link} className="text-[10px] md:text-sm font-light">{supportItem.text}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IntroPromptArea