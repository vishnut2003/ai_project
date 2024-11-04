import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center py-24'>
      <div className='max-w-screen-md w-full text-center flex flex-col justify-center items-center gap-5'>
        <h2 className='font-normal text-7xl'>Advanced <br/>Elite AI</h2>
        <p className='w-96 text-base opacity-90 font-thin leading-9'>Specialized AI for legal practices, professional services, and Fortune 500 companies.</p>
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