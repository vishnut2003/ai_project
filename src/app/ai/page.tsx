import PromptTextarea from "@/components/AiPage/PromptTextarea/PromptTextarea"
import ChatbotLayout from "@/layouts/ChatbotLayout/ChatbotLayout"

const page = () => {
  return (
    <ChatbotLayout>
        <div>
          <PromptTextarea/>
        </div>
    </ChatbotLayout>
  )
}

export default page