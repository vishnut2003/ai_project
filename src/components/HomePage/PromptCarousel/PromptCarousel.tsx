import prebuildPrompts from "@/components/AiPage/PromptTextarea/PrebuildPrompts/PromptItems"
import { RiBardFill } from "@remixicon/react"
import Link from "next/link"

const PromptCarousel = () => {
    return (
        <div className="flex flex-col gap-10 md:p-10">
            {prebuildPrompts.map((promptGroup, index) => (
                <div key={index} className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold pl-4 border-l-2">{promptGroup.category}</h2>
                    <div className="w-full overflow-x-auto pb-2 md:px-5 relative">

                        <div className="flex flex-nowrap gap-5 w-max">
                            {promptGroup.prompts.map((prompt, index) => (
                                <div key={index} className="p-8 max-w-[250px] min-w-[250px] md:max-w-[300px] md:min-w-[300px] w-full bg-gradient-to-r from-[#ffffff01] to-[#ffffff03] rounded-lg shadow-md flex flex-col justify-between items-start gap-5 md:hover:-translate-y-4 transition-all">
                                    <p className="text-sm font-extralight m-0">{prompt}</p>
                                    <Link href={`/ai?prompt=${prompt}`}>
                                        <button className="flex flex-nowrap gap-2 justify-center items-center py-2 px-4 bg-[#ffffff10] hover:bg-white hover:text-secodary-color rounded-lg">
                                            <RiBardFill size={15} />
                                            <p className="m-0 text-xs">Ask AI</p>
                                        </button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PromptCarousel