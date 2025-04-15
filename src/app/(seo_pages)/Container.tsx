import React, { ReactNode } from 'react'

const SEOPagesFlexContainer = ({ children, className }: {
    children: ReactNode,
    className?: string,
}) => {
    return (
        <div
            className='flex justify-center py-5 px-7 bg-white text-secodary-color'
        >
            <div
                className={`flex justify-center items-center flex-col md:flex-row w-full max-w-screen-xl ${className}`}
            >
                {children}
            </div>
        </div>
    )
}

export default SEOPagesFlexContainer