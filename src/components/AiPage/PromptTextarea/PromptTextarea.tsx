'use client';

import ConversationInterface from '@/interfaces/conversation';
import { handlePromptSubmit } from '@/utils/client/aiHelper';
import { RiCloseLargeLine, RiSendPlaneFill } from '@remixicon/react'
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import PromptActions from './PromptActions';

const PromptTextarea = ({ setConversation, conversation }: Readonly<{
    setConversation: Dispatch<SetStateAction<ConversationInterface[]>>,
    conversation: ConversationInterface[]
}>) => {

    const [submitInProgress, setSubmitInProgress] = useState(false);
    const [inputPrompt, setInputPrompt] = useState<string>('')

    function _PromptSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // return if submit in progress
        if (submitInProgress) return;

        const prompt: string = inputPrompt;

        // reset form value
        setInputPrompt('');

        // change status to submit in progress
        setSubmitInProgress(true);

        // Add user prompt to conversation
        setConversation(prev => [...prev, { from: 'user', message: prompt }]);

        handlePromptSubmit(prompt, conversation)
            .then((response: string) => {
                // Add new response to conversation
                setConversation(prevConversation => [...prevConversation, { from: 'ai_assistant', message: response }]);
            })
            .catch((errResponse) => {
                // Add new response to conversation
                setConversation(prevConversation => [...prevConversation, {
                    from: 'ai_assistant',
                    message: errResponse,
                    error: true
                }]);
            })
            .finally(() => {
                // change status of submit in progress to false
                setSubmitInProgress(false);
            })
    }

    return (
        <div className='flex flex-col items-center justify-center px-5 md:px-0 h-max'>
            <PromptActions setInputPrompt={setInputPrompt}/>
            <div className='flex flex-nowrap justify-between w-full md:w-3/4 bg-[#ffffff07] p-3 pl-6 rounded-lg rounded-tr-none'>
                <form onSubmit={_PromptSubmit} className='flex flex-nowrap justify-between items-center gap-2 w-full'>

                    {/* Prompt Input area */}
                    <input
                        value={inputPrompt}
                        onChange={(event) => setInputPrompt(event.target.value)}
                        required type="text" name='prompt' placeholder='Type Something...' className='bg-transparent w-full outline-none' />

                    {/* Clear Prompt button */}
                    {
                        inputPrompt &&
                        <RiCloseLargeLine 
                        onClick={() => setInputPrompt('')}
                        size={20} 
                        className='w-8 opacity-55 cursor-pointer'/>
                    }
                    
                    {/* Prompt Submit Button */}
                    <button className='bg-gradient-to-br from-white to-[#ffffff80] text-secodary-color p-1 rounded-lg w-12 h-10 flex justify-center items-center'>
                        {
                            submitInProgress ?
                                <div className='w-3 h-3 animate-bounce shadow-md shadow-black rounded-full bg-secodary-color'></div> :
                                <RiSendPlaneFill size={20}/>
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PromptTextarea