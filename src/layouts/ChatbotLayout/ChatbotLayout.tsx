'use client';

import React, { useState } from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Sidebar from "./Sidebar/Sidebar"

const ChatbotLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#ffffff07]">
      <div className="flex w-screen h-dvh">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="w-full relative flex flex-col justify-end">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ChatbotLayout