import ParaText from '@/components/Common/ParaText'
import React from 'react'

const SEOPageListView = ({ items }: {
    items: string[],
}) => {
    return (
        <div>
            <ul
                className='list-disc pl-[20px]'
            >
                {items.map((item, index) => (
                    <li
                        key={index}
                    >
                        <ParaText>
                            {item}
                        </ParaText>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SEOPageListView