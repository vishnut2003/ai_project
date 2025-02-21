import BoxSlider from "./Slider/BoxSlider"

const Testimonials = () => {
    return (
        <div className="flex justify-center items-center p-10 md:px-10 md:py-20">
            <div className="flex flex-col md:flex-row md:flex-nowrap gap-10 justify-between items-center max-w-screen-xl w-full z-0">
                <div
                    className="w-full"
                >
                    <h2
                        className="text-4xl md:text-6xl text-center md:text-left font-semibold"
                    >
                        What 
                        <br />Our Client 
                        <br />Say
                    </h2>
                </div>
                <div
                    className="w-full"
                >
                    <BoxSlider/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials