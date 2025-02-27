'use client';

import React, { useEffect, useState } from 'react'

interface TableOfContentItem {
    element: "h2" | "h3" | "h4" | string,
    value: string,
}

const TableOfContent = () => {

    const [headings, setHeadings] = useState<TableOfContentItem[]>([]);

    useEffect(() => {
        const document = window.document;
        const elements = Array.from(document.querySelectorAll("h2, h3, h4"))
        .map((elem) => ({
            element: elem.tagName,
            value: elem.textContent || "",
        }))

        elements.pop();
        elements.pop();
        elements.shift();

        setHeadings(elements)
    }, [])

    return (
        <div
            className='w-full border border-black/5 rounded-md shadow-xl shadow-gray-200'
        >
            {/* Table header */}
            <div
                className='border-b border-black/5 py-4 px-5'
            >
                <p
                    className='text-lg font-semibold m-0'
                >Table of Content</p>
            </div>

            <div
                className='py-4 px-5'
            >
                <ul
                    className='flex flex-col gap-2 list-disc p-5 py-0 pr-0'
                >
                    {
                        headings.map((heading, index) => (
                            <li
                                className={`text-sm font-medium m-0`}
                                key={index}
                            >
                                {heading.value}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TableOfContent