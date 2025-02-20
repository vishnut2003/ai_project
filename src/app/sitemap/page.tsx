import BasicLayout from '@/layouts/BasicLayout'
import React from 'react'

const Sitemap = () => {
  return (
    <BasicLayout>
      <div
        className='flex justify-center items-center py-20'
      >
        <div className='max-w-screen-md w-full text-left flex flex-col justify-center items-start gap-5'>
          <h1
            className='text-xl'
          >HTML Sitemap</h1>
          <ul
            className='list-disc pl-4'
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/support/cookies-policy">Cookies Policy</a>
            </li>
            <li>
              <a href="/support/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/support/terms-conditions">Terms and Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </BasicLayout>
  )
}

export default Sitemap