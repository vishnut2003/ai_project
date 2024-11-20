'use client';

import { Dispatch, SetStateAction } from "react";
import PrebuildPrompts from "./PrebuildPrompts/PrebuildPrompts";

const PromptActions = ({setInputPrompt}: Readonly<{setInputPrompt: Dispatch<SetStateAction<string>>}>) => {
  return (
    <div className="flex justify-end w-full md:w-3/4">
        {/* Prebuild Prompt section */}
        <PrebuildPrompts setInputPrompt={setInputPrompt}/>
    </div>
  )
}

export default PromptActions