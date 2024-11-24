import ConversationInterface from "@/interfaces/conversation"
import PromptTextarea from "../PromptTextarea/PromptTextarea"
import { Dispatch, SetStateAction, Suspense } from "react"
import supportLinkItems from "./supportLinkItems"
import Link from "next/link"
import TypingEffectText from "@/components/TypingEffectText/TypingEffectText"

const IntroPromptArea = ({ conversation, setConversation, setRequestInProgress, chatId, setChatId }: Readonly<{
    conversation: ConversationInterface[],
    setConversation: Dispatch<SetStateAction<ConversationInterface[]>>,
    setRequestInProgress: Dispatch<SetStateAction<boolean>>,
    chatId: string,
    setChatId: Dispatch<SetStateAction<string>>
}>) => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="max-w-4xl w-full flex flex-col gap-4">
                <TypingEffectText text="Im AI Law, your legal expert!" className="text-2xl text-center" duration={100} />
                <Suspense>
                    <PromptTextarea
                        conversation={conversation}
                        setConversation={setConversation}
                        setRequestInProgress={setRequestInProgress}
                        chatId={chatId}
                        setChatId={setChatId}
                    />
                </Suspense>
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