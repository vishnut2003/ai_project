import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Sidebar from "./Sidebar/Sidebar"

const ChatbotLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-[#ffffff07]">
      <div className="flex w-screen h-screen">
        <Sidebar />
        <div className="w-full relative flex flex-col justify-end">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ChatbotLayout