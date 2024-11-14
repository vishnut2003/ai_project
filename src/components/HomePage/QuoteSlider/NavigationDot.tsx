import { Dispatch, SetStateAction } from "react"
import slides from "./SliderItems"


const NavigationDot = ({slideIndex, setSlideIndex}: Readonly<{slideIndex: number, setSlideIndex: Dispatch<SetStateAction<number>> }>) => {
    return (
        <div className="p-5 flex flex-nowrap gap-2 w-full justify-center">
            {slides.map((_, index) => (
                <div 
                onClick={() => setSlideIndex(index)}
                key={index} className={`w-16 h-1 rounded-md cursor-pointer ${slideIndex === index ? 'bg-white' : 'bg-neutral-800'}`}></div>
            ))}
        </div>
    )
}

export default NavigationDot