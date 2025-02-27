import Image from "next/image"
import FooterMenu from "./FooterMenu"

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-10 md:px-10 md:py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-color to-secodary-color opacity-[0.03] -z-10"></div>
      <div className="flex flex-col-reverse md:flex-row md:flex-nowrap gap-10 justify-between items-stretch max-w-screen-xl w-full z-0">

        <div className="flex flex-col justify-between gap-3">
          {/* Logo */}
          <div>
            <Image
              width={403}
              height={157}
              src={'/legallyours-logo.png'}
              alt="site-logo"
              style={{ width: "150px", borderRadius: "8px" }}/>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-base font-thin">
              &#xa9; {new Date().getFullYear()} All rights reserved
            </p>
            <p className="text-base font-thin">
              Site designed and developed by <a className="font-semibold text-white" rel="noopener noreferrer nofollow" target="_blank" href={'https://webspidersolutions.com/'}>Web Spider Solutions</a>
            </p>
          </div>
        </div>

        <div className="flex flex-row md:flex-nowrap gap-5 md:gap-20 justify-between">

          {/* Widget 1 */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base text-white opacity-50 font-light">About</h3>
            <FooterMenu menu="widgetMenuOne" />
          </div>

          {/* Widget 2 */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base text-white opacity-50 font-light">Resources</h3>
            <FooterMenu menu="widgetMenuTwo" />
          </div>

          {/* Widget 3 */}
          {/* <div className="flex flex-col gap-5">
            <h3 className="text-base text-white opacity-50 font-light">Follow</h3>
            <FooterMenu menu="widgetMenuThree" />
          </div> */}

        </div>
      </div>
    </footer>
  )
}

export default Footer