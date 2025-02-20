import { withAuth } from "@workos-inc/authkit-nextjs"
import LoginButton from "./AuthComponents/LoginButton"
import Menu from "./Menu"
import UserCard from "./AuthComponents/UserCard";
import Image from "next/image";

const Header = async () => {
  const {user} = await withAuth();
  return (
    <header className="flex justify-center items-center px-10 py-5 sticky top-0 bg-secodary-color z-[99]">
      <div className="flex flex-nowrap gap-5 justify-between items-center max-w-screen-xl w-full">

        {/* Logo col */}
        <div >
          <Image 
          width={403}
          height={157}
          priority
          src={'/legallyours-logo.png'} 
          alt="site-logo"
          style={{width: "150px", borderRadius: "8px"}}
          />
        </div>

        {/* Menu col */}
        <div  className="flex">
          <Menu/>
        </div>
        
        {/* Action but col */}
        <div className="hidden md:flex">
          {
            user ? <UserCard/> : <LoginButton/>
          }
          
        </div>
      </div>
    </header>
  )
}

export default Header