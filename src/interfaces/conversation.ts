export default interface ConversationInterface {
    from: "user" | "ai_assistant",
    message: string,
    error?: boolean
}