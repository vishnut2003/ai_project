import BasicLayout from '@/layouts/BasicLayout'
import { RiHomeLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'

const Thankyou = () => {
  return (
    <BasicLayout>
        <div
            className='w-full flex justify-center items-center py-20 px-5 h-[70dvh]'
        >
            <div
                className='w-full max-w-screen-lg text-center flex flex-col gap-4 items-center'
            >
                <h1
                    className='text-5xl font-semibold'
                >Thank you</h1>
                <p>We’ve received your message and will get back to you as soon as possible.</p>

                <Link
                    href={'/'}
                    className='flex items-center gap-3 border border-white py-3 px-5 rounded-md'
                >
                    <RiHomeLine
                        size={20}
                    />
                    Go to Home
                </Link>
            </div>
        </div>
    </BasicLayout>
  )
}

export default Thankyou