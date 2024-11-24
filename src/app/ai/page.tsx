'use client';

import ConversationTemplate from "@/components/AiPage/Conversation/ConversationTemplate";
import IntroPromptArea from "@/components/AiPage/IntroPromptArea/IntroPromptArea";
import PromptTextarea from "@/components/AiPage/PromptTextarea/PromptTextarea"
import ConversationInterface from "@/interfaces/conversation";
import ChatbotLayout from "@/layouts/ChatbotLayout/ChatbotLayout"
import { Suspense, useState } from "react"

const Page = () => {

  const [chatId, setChatId] = useState<string>('')
  const [conversation, setConversation] = useState<ConversationInterface[]>([{ from: "ai_assistant", message: "Type your prompt to start!" }]);
  const [requestInProgress, setRequestInProgress] = useState<boolean>(false);

  return (
    <ChatbotLayout>
      {
        conversation.length <= 1 ?
          <IntroPromptArea
            conversation={conversation}
            setConversation={setConversation}
            setRequestInProgress={setRequestInProgress}
            chatId={chatId}
            setChatId={setChatId}
          />
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