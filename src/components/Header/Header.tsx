import { withAuth } from "@workos-inc/authkit-nextjs"
import LoginButton from "./AuthComponents/LoginButton"
import Menu from "./Menu"
import UserCard from "./AuthComponents/UserCard";
import Image from "next/image";
import SearchBar from "./SearchPost/SearchBar";
import Link from "next/link";

const Header = async () => {
  const { user } = await withAuth();
  return (
    <header className="flex justify-center items-center px-10 py-5 sticky top-0 bg-secodary-color z-[99]">
      <div className="flex flex-nowrap gap-5 justify-between items-center max-w-screen-xl w-full">

        {/* Logo col */}
        <div >
          <Link
            href={'/'}
          >
            <Image
              width={403}
              height={157}
              priority
              src={'/legallyours-logo.png'}
              alt="site-logo"
              style={{ width: "150px", borderRadius: "8px" }}
            />
          </Link>
        </div>

        {/* Menu col */}
        <div className="flex flex-row-reverse md:flex-row items-center gap-5">
          <Menu />
          <SearchBar />
        </div>

        {/* Action but col */}
        <div className="hidden md:flex">
          {
            user ? <UserCard /> : <LoginButton />
          }

        </div>
      </div>
    </header>
  )
}

export default Header