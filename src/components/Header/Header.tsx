import { withAuth } from "@workos-inc/authkit-nextjs"
import LoginButton from "./AuthComponents/LoginButton"
import Menu from "./Menu"
import UserCard from "./AuthComponents/UserCard";

const Header = async () => {
  const {user} = await withAuth();
  return (
    <header className="flex justify-center items-center px-10 py-5">
      <div className="flex flex-nowrap gap-5 justify-between items-center max-w-screen-xl w-full">

        {/* Logo col */}
        <div>
          <h2 className="text-3xl font-bold">LOGO</h2>
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