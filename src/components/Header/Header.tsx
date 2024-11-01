import Menu from "./Menu"

const Header = () => {
  return (
    <header className="flex justify-center items-center px-10 py-5">
      <div className="flex flex-nowrap gap-5 justify-between items-center max-w-screen-xl w-full">

        {/* Logo col */}
        <div>
          <h2 className="text-3xl font-bold">LOGO</h2>
        </div>

        {/* Menu col */}
        <div>
          <Menu/>
        </div>
        
        {/* Action but col */}
        <div>
          <button className="py-3 px-8 bg-gradient-to-br from-white to-slate-300 hover:from-white hover:to-white transition-all text-secodary-color font-semibold text-sm rounded-md">Know More</button>
        </div>
      </div>
    </header>
  )
}

export default Header