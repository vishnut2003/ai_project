'use client';

import Image from "next/image"
import slides from "./SliderItems"
import { RiDoubleQuotesL } from "@remixicon/react";
import { motion, useMotionValue } from 'framer-motion';
import { useState } from "react";
import NavigationDot from "./NavigationDot";

const QuoteSlider = () => {

  const DRAG_BUFFER = 50;
  const [slideIndex, setSlideIndex] = useState(0);
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if(x <= -DRAG_BUFFER && slideIndex < slides.length - 1) {
      setSlideIndex(prevIdx => prevIdx + 1);
    } else if (x >= DRAG_BUFFER && slideIndex > 0) {
      setSlideIndex(prevIdx => prevIdx - 1)
    }
  }

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0
        }}
        style={{
          x: dragX
        }}
        animate={{
          translateX: `-${slideIndex * 100}%`
        }}
        onDragEnd={onDragEnd}
        className="flex gap-0 cursor-grab active:cursor-grabbing">
        {
          slides.map((slide, index) => (
            <div key={index} className={`flex md:flex-nowrap flex-col md:flex-row gap-5 min-w-[100%]`}
              style={{
                backgroundColor: slide.bgColor
              }}
            >
              <div className="w-full md:w-3/5">
                <Image
                  src={slide.imageURL}
                  alt={slide.name}
                  sizes='100vw'
                  width={0}
                  height={0}
                  style={{
                    width: '100%',
                    aspectRatio: '3/3',
                  }}
                  className="[-webkit-user-drag:none]"
                />
              </div>
              <div className="w-full h-full flex flex-col gap-0 justify-center p-10 md:p-20 text-secodary-color">
                <p className="font-normal text-2xl md:text-4xl flex flex-nowrap gap-5 mb-6"><RiDoubleQuotesL widths={10} />{slide.quote}</p>
                <h2 className="font-semibold text-3xl md:text-xl">{slide.name}</h2>
                <p className="font-light text-xl md:text-lg">{slide.position}</p>
              </div>
            </div>
          ))
        }
      </motion.div>
      <div>
        <NavigationDot slideIndex={slideIndex} setSlideIndex={setSlideIndex}/>
      </div>
    </div>
  )
}

export default QuoteSlider