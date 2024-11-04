'use client';

import React, { useEffect } from 'react'
import Card from './Card'
import clientLogo from './CarouselLogos'
import useMeasure from 'react-use-measure'
import { animate, motion, useMotionValue } from 'framer-motion';

const CustomerLogosCarousel = () => {

  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const finalPos = -width / 2 + 1000;

    const controls = animate(xTranslation, [0, finalPos], {
      ease: 'linear',
      duration: 15,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0
    })

    return controls.stop;
  }, [width, xTranslation])

  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h2 className='text-xl md:text-4xl font-normal text-center'>Engineered for Market Leaders</h2>
      <div className='w-full relative py-5'>
        <div className='overflow-hidden w-full'>
          <motion.div className='flex items-center gap-8 min-w-max' ref={ref} style={{ x: xTranslation }}>
            {[...clientLogo, ...clientLogo].map((client, index) => (
              <Card url={client.url} alt={client.alt} key={index} />
            ))}
          </motion.div>
        </div>
        <div className='absolute top-0 left-0 bg-gradient-to-r from-secodary-color to-transparent w-10 md:w-52 h-full'></div>
        <div className='absolute top-0 right-0 bg-gradient-to-l from-secodary-color to-transparent w-10 md:w-52 h-full'></div>
      </div>
    </div>
  )
}

export default CustomerLogosCarousel