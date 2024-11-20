import { RiAddFill, RiArrowDownSLine } from "@remixicon/react"
import prebuildPrompts from "./PromptItems"
import { Dispatch, SetStateAction, useState } from "react"

const PromptItemTemplate = ({ setInputPrompt, setPromptPopup }: Readonly<{
  setInputPrompt: Dispatch<SetStateAction<string>>,
  setPromptPopup: Dispatch<SetStateAction<boolean>>
}>) => {
  const [subPrompt, setSubPrompt] = useState({})
  return (
    <div className="w-full flex flex-col gap-2 h-full overflow-y-auto">
        {
            prebuildPrompts.map((mainItem, index) => (
                <div key={index} className="bg-[#ffffff07] rounded-lg">
                    <button 
                    onClick={() => setSubPrompt({
                      ...subPrompt,
                      [index]: !subPrompt[index as keyof typeof subPrompt]
                    })}
                    className="flex justify-between w-full py-3 px-4">
                      <p className="m-0 text-sm text-left">{mainItem.category}</p>
                      <RiArrowDownSLine size={20} className={`transition-all ${subPrompt[index as keyof typeof subPrompt] && 'rotate-180'}`}/>
                    </button>
                    <div className={`p-1 flex flex-col gap-1 overflow-hidden ${subPrompt[index as keyof typeof subPrompt] ? 'h-max' : 'h-0 py-0'}`}>
                      {mainItem.prompts.map((prompt, index) => (
                        <div key={index} 
                        onClick={() => {
                          setInputPrompt(prompt);
                          setPromptPopup(false);
                        }}
                        className="w-full flex justify-between items-center py-4 px-5 bg-secodary-color hover:bg-[#ffffff03] cursor-pointer rounded-lg">
                          <p className="text-sm font-light m-0 text-left">{prompt}</p>
                          <RiAddFill size={20} className="min-w-max"/>
                        </div>
                      ))}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default PromptItemTemplate