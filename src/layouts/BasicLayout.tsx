import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import React from "react"

const BasicLayout = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default BasicLayout;