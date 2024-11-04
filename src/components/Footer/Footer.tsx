import FooterMenu from "./FooterMenu"

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-10 md:px-10 md:py-20 relative -z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-color to-secodary-color opacity-[0.03] -z-10"></div>
      <div className="flex flex-col-reverse md:flex-row md:flex-nowrap gap-10 justify-between items-stretch max-w-screen-xl w-full z-0">

        <div className="flex flex-col justify-between gap-3">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-bold">LOGO</h2>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-base font-thin opacity-50">&#xa9; 2024 All rights reserved</p>
          </div>
        </div>
        
        <div className="flex flex-row md:flex-nowrap gap-5 md:gap-20 justify-between">

          {/* Widget 1 */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base text-white opacity-50 font-light">About</h3>
            <FooterMenu menu="widgetMenuOne"/>
          </div>

          {/* Widget 2 */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base text-white opacity-50 font-light">Resources</h3>
            <FooterMenu menu="widgetMenuTwo"/>
          </div>

          {/* Widget 3 */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base text-white opacity-50 font-light">Follow</h3>
            <FooterMenu menu="widgetMenuThree"/>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer