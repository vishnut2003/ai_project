'use client';

import Image from "next/image"
import slides from "./SliderItems"
import { RiDoubleQuotesL } from "@remixicon/react";

const QuoteSlider = () => {

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex gap-4">
        {
          slides.map((slide, index) => (
            <div key={index} className={`flex md:flex-nowrap flex-col md:flex-row gap-5 min-w-[100vw]`}
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
                    aspectRatio: '3/3'
                  }}
                />
              </div>
              <div className="w-full h-full flex flex-col gap-0 justify-center p-10 md:p-20 text-secodary-color">
                <p className="font-normal text-2xl md:text-4xl flex flex-nowrap gap-5 mb-6"><RiDoubleQuotesL widths={10}/>{slide.quote}</p>
                <h2 className="font-semibold text-3xl md:text-xl">{slide.name}</h2>
                <p className="font-light text-xl md:text-lg">{slide.position}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default QuoteSlider