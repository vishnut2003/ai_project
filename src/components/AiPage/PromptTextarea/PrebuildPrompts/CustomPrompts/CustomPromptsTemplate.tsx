'use client';

import { RiArrowDownSLine } from "@remixicon/react"
import { Dispatch, SetStateAction, useState } from "react";
import CustomPromptItems from "./CustomPromptItems";

const CustomPromptsTemplate = ({setInputPrompt, setPromptPopup}: {
    setInputPrompt: Dispatch<SetStateAction<string>>,
    setPromptPopup: Dispatch<SetStateAction<boolean>>
}) => {

    const [promptDropdown, setPromptDropdown] = useState(false)

    return (
        <div className="w-full bg-[#ffffff04] rounded-lg">
            <button 
            onClick={() => setPromptDropdown(prevState => !prevState)}
            className="w-full flex justify-between items-center py-3 px-4">
                <p className="m-0">Custom Prompts</p>
                <RiArrowDownSLine size={20} />
            </button>

            {promptDropdown && <CustomPromptItems setInputPrompt={setInputPrompt} setPromptPopup={setPromptPopup} />}
        </div>
    )
}

export default CustomPromptsTemplate