'use client';

import React, { useState } from 'react'
import { testimonialItems } from '../items'
import SingleItems from './SingleItems'
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import { motion } from "framer-motion";

const BoxSlider = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    return (
        <div
            className='overflow-hidden'
        >
            <motion.div
                className={`flex flex-nowrap w-max`}
                style={{
                    width: `${testimonialItems.length * 100}%`,
                }}
                animate={{
                    translateX: `-${currentSlide * 33.333}%`
                }}
            >
                {
                    testimonialItems.map((testimonial, index) => (
                        <SingleItems
                            item={testimonial}
                            key={index}
                        />
                    ))
                }
            </motion.div>

            <div
                className='flex justify-between items-center px-8'
            >
                <div
                    className='flex gap-3'
                >
                    {
                        testimonialItems.map((item, index) => (
                            <div
                                className={`w-[7px] h-[7px] rounded-full ${currentSlide === index ? "bg-white" : "bg-white/30"}`}
                                key={item.index}
                            ></div>
                        ))
                    }
                </div>
                <div
                    className='flex items-center gap-3'
                >
                    <button
                        className='p-3 rounded-full bg-white/10 disabled:opacity-30'
                        disabled={currentSlide === 0}
                        onClick={() => setCurrentSlide(prev => --prev)}
                    >
                        <RiArrowLeftSLine
                            size={20}
                        />
                    </button>

                    <button
                        className='p-3 rounded-full bg-white/10 disabled:opacity-30'
                        disabled={currentSlide === (testimonialItems.length - 1)}
                        onClick={() => setCurrentSlide(prev => ++prev)}
                    >
                        <RiArrowRightSLine
                            size={20}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BoxSlider