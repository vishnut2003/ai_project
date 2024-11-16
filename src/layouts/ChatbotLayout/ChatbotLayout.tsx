'use client';

import React, { useState } from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Sidebar from "./Sidebar/Sidebar"

const ChatbotLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#ffffff07]">
      <div className="flex max-w-[100vw] h-dvh">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="max-h-[100vh] w-full flex flex-col justify-between">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="flex flex-col h-full overflow-hidden">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ChatbotLayout