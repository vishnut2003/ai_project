'use client';

import { RiAddFill } from "@remixicon/react";
import prebuildPrompts from "./PromptItems";
import { Dispatch, SetStateAction } from "react";



const PromptSearchTemplate = ({ promptSearch, setInputPrompt, setPromptPopup }: Readonly<{
    promptSearch: string,
    setInputPrompt: Dispatch<SetStateAction<string>>,
    setPromptPopup: Dispatch<SetStateAction<boolean>>
}>) => {
    return (
        <div className="w-full flex flex-col h-full overflow-y-auto">
            <div className="flex flex-col gap-2">
                {prebuildPrompts.map((promptWithCategory) => (
                    promptWithCategory.prompts.filter((prompt) => {
                        const lowerCaseSearchText = promptSearch.toLowerCase();
                        const lowerCasePrompt = prompt.toLowerCase();
                        if (lowerCasePrompt.includes(lowerCaseSearchText)) {
                            return prompt;
                        }
                    })
                        .map((prompt, index) => (
                            <div 
                            key={index}
                            onClick={() => {
                                setInputPrompt(prompt)
                                setPromptPopup(false);
                            }}
                            className="w-full flex justify-between items-center py-4 px-5 bg-[#ffffff03] hover:bg-[#ffffff07] cursor-pointer rounded-lg">
                                <p className="text-sm font-light m-0 text-left">{prompt}</p>
                                <RiAddFill size={20} className="min-w-max"/>
                            </div>
                        ))
                ))}
            </div>
        </div>
    )
}

export default PromptSearchTemplate