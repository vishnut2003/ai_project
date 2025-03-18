'use client';

import { RiArrowRightSLine, RiCheckboxCircleLine } from '@remixicon/react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const PaymentSuccessPage = () => {

  const router = useRouter();

  useEffect(() => {
    (async () => {
      for (let i = 5; i > 0; i--) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      router.push('/dashboard');
    })()
  }, [router]);

  return (
    <div
      className='w-screen h-screen flex justify-center items-center'
    >
      <div
        className='flex justify-center items-center flex-col gap-2'
      >
        <RiCheckboxCircleLine
          size={70}
          className='text-green-400 mb-3'
        />
        <h2
          className='text-2xl'
        >Payment Successful</h2>
        <p>You will be redirected to dashboard in <b>5s</b></p>

        <Link
          className='flex items-center gap-2 font-semibold text-lg'
          href={'/dashboard'}
        >
          Dashboard
          <RiArrowRightSLine
            size={20}
          />
        </Link>
      </div>
    </div>
  )
}

export default PaymentSuccessPage