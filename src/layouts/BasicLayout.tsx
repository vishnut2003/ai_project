import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { ReactNode } from "react"

const BasicLayout = ({ children }: Readonly<{children: ReactNode}>) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default BasicLayout