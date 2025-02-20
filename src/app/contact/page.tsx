import ContactDetails from '@/components/ContactPage/ContactDetails/ContactDetails'
import ContactForm from '@/components/ContactPage/ContactForm/ContactForm'
import BasicLayout from '@/layouts/BasicLayout'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  alternates: {
    canonical: "https://ailawgpt.com/contact"
  }
}

const Contact = () => {
  return (
    <BasicLayout>
      <div className='flex w-full justify-center items-center px-8 py-14'>
        <div className='w-full max-w-screen-xl flex flex-col gap-10'>
          <h2 className='text-3xl font-semibold text-center'>Contact Us</h2>

          <div className='w-full flex justify-center'>
            <div className='w-full flex flex-col md:flex-row justify-center items-center max-w-screen-md gap-5'>
              <ContactDetails />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  )
}

export default Contact