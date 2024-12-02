import { RiCheckLine } from "@remixicon/react"

const CreatePromptForm = () => {
    return (
        <form className="w-full">
            <div className="flex justify-center w-full bg-white/10 rounded-lg overflow-hidden">
                <input
                    className="bg-transparent outline-none w-full py-3 px-4"
                    type="text"
                    placeholder="Enter new Prompt..." />
                <button
                    className="bg-gradient-to-br from-white to-[#ffffff80] py-3 px-4 text-secodary-color"
                >
                    <RiCheckLine size={20} />
                </button>
            </div>
        </form>
    )
}

export default CreatePromptForm