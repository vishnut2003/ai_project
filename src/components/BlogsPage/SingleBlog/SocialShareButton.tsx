'use client';

import { RemixiconComponentType, RiFacebookFill, RiLinkedinFill, RiTwitterXFill, RiWhatsappFill } from '@remixicon/react';
import React, { useEffect, useState } from 'react'

const SocialShareButton = () => {

    const [socialButtons, setSocialButtons] = useState<{
        name: string,
        link: string,
        icon: RemixiconComponentType,
    }[]>([]);

    useEffect(() => {
        const url = window.location.protocol + "//" + window.location.hostname + window.location.pathname;
        const title = document.title;

        const socialList: {
            name: string,
            link: string,
            icon: RemixiconComponentType,
        }[] = [
                {
                    name: "Facebook",
                    link: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                    icon: RiFacebookFill,
                },
                {
                    name: "Twitter",
                    link: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
                    icon: RiTwitterXFill,
                },
                {
                    name: "LinkedIn",
                    link: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
                    icon: RiLinkedinFill,
                },
                {
                    name: "WhatsApp",
                    link: `https://wa.me/?text=${title}%20${url}`,
                    icon: RiWhatsappFill,
                }
            ];

        setSocialButtons(socialList);
    }, []);

    return (
        <div
            className='flex flex-col gap-5 border border-white rounded-md px-5 py-4 w-max'
        >
            <h2
                className='text-sm font-semibold'
            >Share This Post on Social Media</h2>
            <ul
                className='flex items-center gap-5 m-0'
            >
                {
                    socialButtons.map((social, index) => (
                        <li
                            key={index}
                        >
                            <a
                                href={social.link}
                                className='flex flex-col gap-2'
                            >
                                <social.icon
                                    size={20}
                                />
                                <p
                                    className='m-0 text-sm'
                                >{social.name}</p>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialShareButton