import { RiHomeLine } from "@remixicon/react";
import Link from "next/link";

 
export default function NotFound() {
  return (
    <div
        className='w-dvw h-dvh flex justify-center items-center'
    >
      <div
        className="border-l-2 border-white pl-6 max-w-[430px] flex flex-col gap-3 items-start"
      >
        <h2
            className="text-4xl font-semibold"
        >Oops! Page Not Found</h2>
        <p
            className="font-light leading-[30px]"
        >Oops! The page you're looking for isn't here. Check the URL or return home</p>

        <Link
            href={'/'}
            className="flex items-center gap-4 py-3 px-8 bg-gradient-to-br from-white to-slate-300 hover:from-white hover:to-white transition-all text-secodary-color font-semibold text-sm rounded-md"
        >
            <RiHomeLine
                size={20}
            />
            Go to Home
        </Link>
      </div>
    </div>
  )
}