'use client';

import PrebuildPrompts from "./PrebuildPrompts/PrebuildPrompts";

const PromptActions = () => {
  return (
    <div className="flex justify-end w-full md:w-3/4">
        {/* Prebuild Prompt section */}
        <PrebuildPrompts/>
    </div>
  )
}

export default PromptActions