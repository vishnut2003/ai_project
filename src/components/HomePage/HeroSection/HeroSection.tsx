import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center py-32'>
      <div className='max-w-screen-md w-full text-center flex flex-col justify-center items-center gap-5'>
        <h1 className='font-bold md:font-normal text-5xl md:text-[80px]'>Advanced <br/>Elite AI</h1>
        <p className='md:w-[430px] text-xl opacity-90 font-thin leading-8 md:leading-9 z-0 px-3 md:px-0'>Specialized AI for legal practices, professional services, and Fortune.</p>
        <Link 
        className='text-base font-semibold bg-gradient-to-br from-white to-slate-300 text-secodary-color py-3 px-5 rounded-md'
        href={'/contact'}>
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default HeroSection