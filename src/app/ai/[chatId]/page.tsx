'use client';

import ConversationTemplate from "@/components/AiPage/Conversation/ConversationTemplate";
import IntroPromptArea from "@/components/AiPage/IntroPromptArea/IntroPromptArea";
import PromptTextarea from "@/components/AiPage/PromptTextarea/PromptTextarea"
import TripleDotLoading from "@/components/TripleDotLoading/TripleDotLoading";
import ConversationInterface from "@/interfaces/conversation";
import ChatbotLayout from "@/layouts/ChatbotLayout/ChatbotLayout"
import { getChatRecordByChatId } from "@/utils/client/historyHelper";
import { Suspense, useEffect, useState } from "react"

const Page = ({params}: Readonly<{
  params: Promise<{chatId: string}>
}>) => {

  const [chatId, setChatId] = useState<string>('')
  const [conversation, setConversation] = useState<ConversationInterface[]>([{ from: "ai_assistant", message: "Type your prompt to start!" }]);
  const [requestInProgress, setRequestInProgress] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      const currentChatId: string = (await params).chatId
      setChatId(currentChatId)
      try {
        const currentConversation = await getChatRecordByChatId(currentChatId);
        setConversation(currentConversation);
      } catch (err) {
        console.log(err)
      }
    })()
  }, [params])

  return (
    <ChatbotLayout>
      {
        conversation.length <= 1 ?
          <div className="w-full h-full flex justify-center items-center">
            <TripleDotLoading/>
          </div>
          :
          <>
            <ConversationTemplate conversation={conversation} requestInProgress={requestInProgress} />
            <Suspense>
              <PromptTextarea
                setConversation={setConversation}
                conversation={conversation}
                setRequestInProgress={setRequestInProgress}
                chatId={chatId}
                setChatId={setChatId}
                 />
            </Suspense>
          </>
      }
    </ChatbotLayout>
  )
}

export default Page;