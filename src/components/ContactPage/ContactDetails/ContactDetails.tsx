import { RemixiconComponentType, RiAtLine, RiPhoneLine } from '@remixicon/react'
import Link from 'next/link'
import React from 'react'

const ContactDetails = () => {

    const contactDetails: {
        key: string,
        value: string,
        nValue?: string
        icon: RemixiconComponentType,
        href?: string
    }[] = [
        {
            key: "Email address",
            value: "legallyours23@gmail.com",
            icon: RiAtLine,
            href: "mailto:legallyours23@gmail.com"
        },
        {
            key: "Phone number",
            value: "(+91) 93 183 49 265",
            nValue: "(+91) 93 107 16 023",
            icon: RiPhoneLine,
            href: "tel:+919318349265"
        }
    ]

    return (
        <div className='w-full'>
            <div className='flex flex-col gap-5'>
                {contactDetails.map((item, index) => (
                    <div key={index} className='flex justify-start gap-5'>
                        <p className='m-0'>{<item.icon size={20}/>}</p>
                        <div className='flex flex-col gap-1'>
                            <p className='m-0 font-semibold text-lg'>{item.key}</p>
                            <Link href={item.href ? item.href : "#"}>{item.value}</Link>
                            {item.nValue && <Link href={item.nValue ? `tel:${item.nValue}` : "#"}>{item.nValue}</Link>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactDetails