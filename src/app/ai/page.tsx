'use client';

import ConversationTemplate from "@/components/AiPage/Conversation/ConversationTemplate";
import PromptTextarea from "@/components/AiPage/PromptTextarea/PromptTextarea"
import ConversationInterface from "@/interfaces/conversation";
import ChatbotLayout from "@/layouts/ChatbotLayout/ChatbotLayout"
import { useState } from "react"

const Page = () => {

  const [conversation, setConversation] = useState<ConversationInterface[]>([{ from: "ai_assistant", message: "Type your prompt to start!" }])

  return (
    <ChatbotLayout>
      <ConversationTemplate conversation={conversation} />
      <PromptTextarea setConversation={setConversation} conversation={conversation} />
    </ChatbotLayout>
  )
}

export default Page;