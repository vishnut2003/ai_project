import slides from "./SliderItems"

const QuoteSlider = () => {
  return (
    <div className="flex gap-4">
        {
            slides.map((slide, index) => (
                <div key={index}>
                    <h2>{slide.name}</h2>
                    <h3>{slide.position}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default QuoteSlider