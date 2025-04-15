'use client';

import { RiCloseLargeLine } from '@remixicon/react';
import React, { ReactNode, useState } from 'react'

interface FAQItemInterface {
    question: string,
    answer: string | ReactNode,
}

const SEOPageFaqAccordion = ({ faqItems }: {
    faqItems: FAQItemInterface[]
}) => {
    return (
        <div
            className='flex flex-col gap-3'
        >
            {faqItems.map((item, index) => (
                <AccordionItem
                    item={item}
                    key={index}
                />
            ))}
        </div>
    )
}

function AccordionItem({ item }: {
    item: FAQItemInterface,
}) {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div
            className='bg-white/5 rounded-md overflow-hidden'
        >
            <button
                onClick={() => setOpen(prev => !prev)}
                className='py-3 px-5 flex items-center justify-between w-full text-left shadow-md border border-black/10 rounded-md'
            >
                <p
                    className='m-0'
                >{item.question}</p>

                <RiCloseLargeLine
                    className={`transition-all ${!open && "rotate-45"}`}
                    size={20}
                />
            </button>

            {/* content */

                open &&
                <div
                    className='py-3 px-5 border rounded-md mt-2 border-secodary-color'
                >
                    <p
                        className='m-0 text-secodary-color'
                    >{item.answer}</p>
                </div>
            }

        </div>
    )
}

export default SEOPageFaqAccordion