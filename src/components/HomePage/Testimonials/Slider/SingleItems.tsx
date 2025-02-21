'use client';

import React from 'react'
import { TestimonialItemInterface } from '../items'
import Image from 'next/image';
import { RiDoubleQuotesL } from '@remixicon/react';

const SingleItems: React.FC<{ item: TestimonialItemInterface }> = ({ item }: {
  item: TestimonialItemInterface
}) => {
  return (
    <div
      className='w-full py-6 px-8 flex flex-col gap-5'
    >
      <div>
        <p
          className='text-5xl font-extrabold'
        >{item.index}.</p>

        <div
          className='flex gap-3'
        >
          <RiDoubleQuotesL
            size={28}
          />
          <p
            className='text-lg opacity-70 font-light leading-8'
          >{item.comment}</p>
        </div>
      </div>

      <div
        className='w-full flex gap-4 justify-between items-center'
      >
        <div
          className='w-[50px]'
        >
          <Image
            alt='Client'
            src={item.image}
            width={100}
            height={100}
            className='rounded-full'
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        <div
          className='w-full'
        >
          <h3
            className='text-base font-medium'
          >{item.name}</h3>
          <p
            className='text-sm opacity-70 m-0'
          >Client</p>
        </div>
      </div>
    </div>
  )
}

export default SingleItems