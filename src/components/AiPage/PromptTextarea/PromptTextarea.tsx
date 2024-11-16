'use client';

import ConversationInterface from '@/interfaces/conversation';
import { handlePromptSubmit } from '@/utils/client/aiHelper';
import { RiArrowUpLine } from '@remixicon/react'
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'

const PromptTextarea = ({ setConversation }: Readonly<{
    setConversation: Dispatch<SetStateAction<ConversationInterface[]>>
}>) => {

    const [submitInProgress, setSubmitInProgress] = useState(false);

    function _PromptSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // return if submit in progress
        if(submitInProgress) return;

        const form = new FormData(event.currentTarget);
        const prompt:string | undefined = form.get('prompt')?.toString();

         // reset form value
         const formEvent = event.target as HTMLFormElement
         formEvent.reset();
         
        // change status to submit in progress
        setSubmitInProgress(true);

        // Add user prompt to conversation
        setConversation(prev => [...prev, {from: 'user', message: prompt}]);
        
        handlePromptSubmit(prompt)
            .then((response: string) => {
                // Add new response to conversation
                setConversation(prevConversation => [...prevConversation, {from: 'ai_assistant', message: response}]);
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
        <div className='flex justify-center px-5 md:px-0 h-16'>
            <div className='flex flex-nowrap justify-between w-full md:w-3/4 bg-[#ffffff07] p-3 pl-9 rounded-full'>
                <form onSubmit={_PromptSubmit} className='flex flex-nowrap justify-between w-full'>
                    <input required type="text" name='prompt' placeholder='Type Something...' className='bg-transparent w-full outline-none' />
                    <button className='bg-secodary-color p-1 rounded-full w-10 h-10 flex justify-center items-center'>
                        {
                            submitInProgress ?
                            <div className='w-4 h-4 border-r border-b border-white animate-spin rounded-full'></div> :
                            <RiArrowUpLine size={15} />
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PromptTextarea