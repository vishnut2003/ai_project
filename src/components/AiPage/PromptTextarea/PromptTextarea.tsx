'use client';

import { RiArrowUpLine } from '@remixicon/react'
import React, { FormEvent } from 'react'

const PromptTextarea = () => {

    function _PromptSubmit (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData();
        const prompt = form.get('prompt');
        console.log(prompt)
    }

    return (
        <div className='flex justify-center px-5 md:px-0'>
            <div className='flex flex-nowrap justify-between w-full md:w-3/5 bg-[#ffffff07] p-3 pl-9 rounded-full'>
                <form onSubmit={_PromptSubmit} className='flex flex-nowrap justify-between w-full'>
                    <input type="text" name='prompt' placeholder='Type Something...' className='bg-transparent w-full outline-none' />
                    <button className='bg-secodary-color p-2 rounded-full'>
                        <RiArrowUpLine size={25} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PromptTextarea