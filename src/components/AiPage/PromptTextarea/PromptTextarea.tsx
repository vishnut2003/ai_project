'use client';

import ConversationInterface from '@/interfaces/conversation';
import { getRemainingPromptCount, handlePromptSubmit, updatePromptLimitCount } from '@/utils/client/aiHelper';
import { RiCloseLargeLine, RiSendPlaneFill } from '@remixicon/react'
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import PromptActions from './PromptActions';
import { useSearchParams } from 'next/navigation';
import { udateHistoryChat } from '@/utils/client/historyHelper';
import { validateUserSubscription } from '@/utils/client/subscriptionsHelper';
import BuyPlanPopup from './BuyPlanPopup';

const PromptTextarea = ({ setConversation, conversation, setRequestInProgress, chatId, setChatId }: Readonly<{
    setConversation: Dispatch<SetStateAction<ConversationInterface[]>>,
    conversation: ConversationInterface[],
    setRequestInProgress: Dispatch<SetStateAction<boolean>>,
    chatId: string,
    setChatId: Dispatch<SetStateAction<string>>
}>) => {
    const queryParams = useSearchParams();
    const queryPrompt = queryParams.get('prompt');

    const [submitInProgress, setSubmitInProgress] = useState(false);
    const [inputPrompt, setInputPrompt] = useState<string>(queryPrompt ? queryPrompt : '');

    const [showBuyPlanPopup, setShowBuyPlanPopup] = useState<boolean>(false);

    async function _PromptSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // return if submit in progress
        if (submitInProgress) return;

        // Limit Prompt count for non-subscription users
        const hasActivePlan = await validateUserSubscription();
        const remainingPromptCount = await getRemainingPromptCount();

        if (
            !hasActivePlan &&
            remainingPromptCount <= 0
        ) {
            setShowBuyPlanPopup(true);
            return;
        } else {
            setShowBuyPlanPopup(false);
            await updatePromptLimitCount();
        }

        const prompt: string = inputPrompt;

        // reset form value
        setInputPrompt('');

        // change status to submit in progress for button loading effect
        setSubmitInProgress(true);

        // Change status enable of request inprogress for loading effect in conversation template
        setRequestInProgress(true);

        // Add user prompt to conversation
        setConversation(prev => [...prev, { from: 'user', message: prompt }]);

        handlePromptSubmit(prompt, conversation)
            .then((response: string) => {
                // Add new response to conversation
                setConversation(prevConversation => [...prevConversation, { from: 'ai_assistant', message: response }]);

                // update chat history
                udateHistoryChat({
                    chatId: chatId,
                    userPrompt: {
                        from: 'user',
                        message: prompt,
                    },
                    modelPrompt: {
                        from: 'ai_assistant',
                        message: response
                    }
                })
                .then((newChatId) => {
                    // Assign the newChatid or updated chatid
                    setChatId(newChatId);
                })
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

                // Change status disable of request inprogress for loading effect in conversation template
                setRequestInProgress(false);
            })
    }

    return (
        <div className='flex flex-col items-center justify-center px-5 md:px-0 h-max'>
            <PromptActions setInputPrompt={setInputPrompt} />
            <div className='flex flex-nowrap justify-between w-full md:w-3/4 bg-[#ffffff07] p-3 pl-6 rounded-lg rounded-tr-none shadow-md shadow-[#00000026]'>
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
                            className='w-8 opacity-55 cursor-pointer' />
                    }

                    {/* Prompt Submit Button */}
                    <button className='bg-gradient-to-br from-white to-[#ffffff80] text-secodary-color p-1 rounded-lg w-12 h-10 flex justify-center items-center'>
                        {
                            submitInProgress ?
                                <div className='w-3 h-3 animate-bounce shadow-md shadow-black rounded-full bg-secodary-color'></div> :
                                <RiSendPlaneFill size={20} />
                        }
                    </button>
                </form>
            </div>
            {showBuyPlanPopup && 
            <BuyPlanPopup
                closePopup={() => {
                    setShowBuyPlanPopup(false);
                }}
            />}
        </div>
    )
}

export default PromptTextarea