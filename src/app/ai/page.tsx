'use client';

import ConversationTemplate from "@/components/AiPage/Conversation/ConversationTemplate";
import PromptTextarea from "@/components/AiPage/PromptTextarea/PromptTextarea"
import ConversationInterface from "@/interfaces/conversation";
import ChatbotLayout from "@/layouts/ChatbotLayout/ChatbotLayout"
// import { withAuth } from "@workos-inc/authkit-nextjs";
import { useState } from "react"


const Page = () => {
  
  // const { user } = await withAuth({ ensureSignedIn: true });

  const [conversation, setConversation] = useState<ConversationInterface[]>([{ from: "ai_assistant", message: "Type your prompt to start!" }])
  
  return (
    <ChatbotLayout>
      <ConversationTemplate conversation={conversation} />
      <PromptTextarea setConversation={setConversation} />
    </ChatbotLayout>
  )
}

export default Page;