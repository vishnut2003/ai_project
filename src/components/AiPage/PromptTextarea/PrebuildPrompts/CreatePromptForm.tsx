'use client';

import { createCustomePrompt } from "@/utils/client/customPromptHelper";
import { RiCheckLine } from "@remixicon/react"
import { FormEvent, useState } from "react"

const CreatePromptForm = () => {

    const [customPrompt, setCustomPrompt] = useState<string>('');
    const [promptSubmitInProgress, setPromptSubmitInProgress] = useState<boolean>(false);

    function _submitNewPrompt (event: FormEvent) {
        event.preventDefault();
        if(promptSubmitInProgress) return;

        setPromptSubmitInProgress(true);
        
        createCustomePrompt({customPrompt: customPrompt})
            .then(() => {
                setPromptSubmitInProgress(false);
                setCustomPrompt('')
            })
    } 

    return (
        <form className="w-full" onSubmit={_submitNewPrompt}>
            <div className="flex justify-center w-full bg-white/10 rounded-lg overflow-hidden">
                <input
                    value={customPrompt}
                    onChange={event => setCustomPrompt(event.target.value)}
                    className="bg-transparent outline-none w-full py-3 px-4"
                    type="text"
                    placeholder="Enter new Prompt..." />
                <button
                    type="submit"
                    className="bg-gradient-to-br from-white to-[#ffffff80] py-3 px-4 text-secodary-color"
                >
                    {
                        !promptSubmitInProgress ?
                        <RiCheckLine size={20} /> :
                        <div className="w-3 h-3 animate-bounce shadow-md shadow-black rounded-full bg-secodary-color"></div>
                    }
                </button>
            </div>
        </form>
    )
}

export default CreatePromptForm