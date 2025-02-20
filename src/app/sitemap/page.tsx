import BasicLayout from '@/layouts/BasicLayout'
import Link from 'next/link'
import React from 'react'

const Sitemap = () => {
  return (
    <BasicLayout>
      <div
        className='flex justify-center items-center py-20 px-5'
      >
        <div className='max-w-screen-md w-full text-left flex flex-col justify-center items-start gap-5'>
          <h1
            className='text-xl'
          >HTML Sitemap</h1>
          <ul
            className='list-disc pl-4'
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/support/cookies-policy">Cookies Policy</Link>
            </li>
            <li>
              <Link href="/support/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/support/terms-conditions">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </BasicLayout>
  )
}

export default Sitemap