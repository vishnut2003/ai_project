import ConversationInterface from "@/interfaces/conversation"
import Markdown from "markdown-to-jsx"
import ConversationLoadingEffect from "./ConversationLoadingEffect"
import { useEffect } from "react"
import "./responseStyle.css";
import { RiBardFill } from "@remixicon/react";
import DownloadPdf from "./ConversationActions/DownloadPdf";

const Conversations = ({ conversation, requestInProgress, scrollToBottom }: Readonly<{
    conversation: ConversationInterface[],
    requestInProgress: boolean,
    scrollToBottom: () => null
}>) => {

    useEffect(() => {
        scrollToBottom();
    }, [conversation, scrollToBottom]);

    return (
        <div className="flex flex-col gap-1 w-full h-max">
            {conversation.map((conversationTurn, index) => {

                if(conversationTurn.from === "ai_assistant" && index == 0) return;

                return (
                    <div
                        key={index} className={
                            `flex flex-col gap-2 w-full py-6
                    ${conversationTurn.from === "user" && "mt-10 pt-10 border-t border-white/10"}
                    ${conversationTurn.error && 'bg-red-600'}`}>
                        <div className={`custom-response-style font-extralight text-left leading-6 w-full list-decimal
                            ${conversationTurn.from === "user" ? "text-2xl font-semibold" : "text-base"}
                            `}>
                            {
                                conversationTurn.from === "ai_assistant" &&
                                <div className="flex gap-2">
                                    <RiBardFill size={20} />
                                    <p className="text-base font-bold">Answer</p>
                                </div>
                            }
                            <Markdown>
                                {conversationTurn.message!}
                            </Markdown>
                        </div>

                        {/* actions button for messages */

                            conversationTurn.from === "ai_assistant" &&
                            <div>
                                <DownloadPdf/>
                            </div>
                        }
                        
                    </div>
                )
            })}
            {
                requestInProgress &&
                <ConversationLoadingEffect />
            }
        </div>
    )
}

export default Conversations