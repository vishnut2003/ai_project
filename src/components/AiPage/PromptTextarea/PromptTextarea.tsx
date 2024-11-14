import { RiArrowUpLine } from '@remixicon/react'
import React from 'react'

const PromptTextarea = () => {
    return (
        <div className='flex justify-center px-5 md:px-0'>
            <div className='flex flex-nowrap justify-between w-full md:w-3/5 bg-[#ffffff07] p-3 pl-9 rounded-full'>
                <input type="text" placeholder='Type Something...' className='bg-transparent w-full outline-none' />
                <button className='bg-secodary-color p-2 rounded-full'>
                    <RiArrowUpLine size={25} />
                </button>
            </div>
        </div>
    )
}

export default PromptTextarea