'use client';

import { RiSearchLine } from '@remixicon/react'
import React, { useState } from 'react';
import PostSearchPopup from './SearchPopup';

const SearchBar = () => {

    const [showPopup, setShowPopup] = useState<boolean>(false);

    return (
        <div
            className='relative'
        >
            <button
                className='flex items-end gap-3 p-2 md:px-4 md:py-3 rounded-full overflow-hidden relative opacity-60'
                onClick={() => setShowPopup(prev => !prev)}
            >
                <div
                    className='absolute top-0 left-0 w-full h-full bg-white opacity-15'
                ></div>
                <RiSearchLine
                    size={20}
                />
                <p
                    className='m-0 text-sm hidden md:flex'
                >Search Blogs...</p>
            </button>

            {
                showPopup &&
                <PostSearchPopup
                    closeAction={() => {
                        setShowPopup(prev => !prev)
                    }}
                />
            }
        </div>
    )
}



export default SearchBar