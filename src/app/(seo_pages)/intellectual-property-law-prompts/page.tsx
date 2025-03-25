import BasicLayout from '@/layouts/BasicLayout'
import React from 'react'
import SEOPagesFlexContainer from '../Container'
import ParaText from '@/components/Common/ParaText'
import Link from 'next/link'
import SEOPageListView from '../ListView'
import prebuildPrompts from '@/components/AiPage/PromptTextarea/PrebuildPrompts/PromptItems'
import { RiBardFill } from '@remixicon/react'
import SEOPageFaqAccordion from '../FaqAccordion'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "AI IP Law Prompts | Smart GPT for Patents & Trademarks",
    description: "Use AI for IP law with GPT for patents and trademarks. Get AI-powered copyright legal prompts and advanced AI tools for IP protection and compliance.",
}

const AiPoweredPromptsForIPTrademarkLawyers = () => {
    const checkListPoints: {
        text: string,
        subText: string[],
    }[] = [
            {
                text: "Identify Your IP Legal Needs",
                subText: [
                    "Filing patents, registering trademarks, copyright protection, or resolving disputes?"
                ],
            },
            {
                text: "Gather Supporting Information",
                subText: [
                    "Include invention details, brand elements, creative works, or case facts."
                ],
            },
            {
                text: "Draft & Review Legal Documents",
                subText: [
                    "Use AI to generate applications, contracts, and litigation documents."
                ],
            },
            {
                text: "Consult an IP Attorney",
                subText: [
                    "Ensure AI-generated content is reviewed for accuracy and compliance."
                ],
            },
        ]

    return (
        <BasicLayout>

            {/* Hero section */}
            <SEOPagesFlexContainer
                className='py-[50px] gap-[20px]'
            >
                <div
                    className='w-full'
                >
                    <h1
                        className='text-4xl md:text-5xl md:leading-[60px] font-semibold'
                    >AI-Powered Prompts for <br />IP & Trademark Lawyers</h1>
                </div>
                <div
                    className='w-full'
                >
                    <div
                        className='flex flex-col gap-5'
                    >
                        <ParaText>
                            AI Law GPT provides powerful AI-generated prompts to help
                            intellectual property {"(IP)"} lawyers streamline legal workflows,
                            draft filings, and resolve disputes efficiently.
                        </ParaText>
                        <Link
                            className='py-3 px-5 w-full bg-white text-black/80 rounded-2xl font-semibold flex justify-center'
                            href={'/ai'}
                        >
                            Get Started Here
                        </Link>
                    </div>
                </div>
            </SEOPagesFlexContainer>

            {/* Section with sidebar */}
            <SEOPagesFlexContainer
                className='py-[30px] gap-5'
            >
                <div
                    className='w-full flex flex-col gap-5'
                >
                    <h2
                        className='text-3xl font-semibold'
                    >What Are AI Prompts for IP Lawyers?</h2>

                    <ParaText>
                        AI-driven legal prompts assist intellectual property lawyers in handling patents,
                        trademarks, copyrights, and trade secrets. AI Law GPT generates structured legal
                        guidance, document templates, and case strategies to improve accuracy and efficiency.
                    </ParaText>

                    <h2
                        className='text-3xl font-semibold'
                    >Key Benefits of AI for Intellectual Property Law</h2>

                    <SEOPageListView
                        items={[
                            "Patent Filing Assistance – Generate structured patent applications and prior art searches.",
                            "Trademark Registration & Disputes – Draft trademark applications, responses, and dispute resolutions.",
                            "Copyright Protection – Automate copyright registration filings and infringement notices.",
                            "Licensing & Contracts – Create licensing agreements and intellectual property contracts.",
                            "Litigation Support – Develop AI-driven case analysis for IP infringement cases.",
                        ]}
                    />

                    <h2
                        className='text-3xl font-semibold'
                    >How to Use AI Prompts for IP Law</h2>

                    <SEOPageListView
                        items={[
                            "Select the IP Legal Category – Choose your IP Legal Category from Patent, trademark, copyright or trade secret.",
                            "Input Case Details – Example: 'Draft a cease-and-desist letter for trademark infringement.'",
                            "Generate & Review Documents – AI produces structured drafts based on best legal practices.",
                            "Ensure Compliance – Verify AI-generated documents with current IP laws and regulations.",
                        ]}
                    />

                    <Link
                        className='py-3 px-6 w-max bg-white text-black/80 rounded-2xl font-semibold flex'
                        href={'/ai'}
                    >
                        Get Started Here
                    </Link>
                </div>
                <div
                    className='max-w-[400px] w-full py-4 px-6 rounded-md bg-white/5 space-y-4'
                >
                    <h2
                        className='text-2xl font-light'
                    >Checklist for Using AI in IP Law</h2>

                    {/* Checklist points */}
                    <div>
                        {/* points */

                            checkListPoints.map((point, index) => (
                                <div key={index}>
                                    <h3
                                        className='text-lg font-semibold'
                                    >{point.text}</h3>
                                    <ul>
                                        {point.subText.map((subText, index) => (
                                            <li key={index}>
                                                <p
                                                    className='text-sm leading-8 font-light'
                                                >
                                                    {subText}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </SEOPagesFlexContainer>

            {/* Prompts Section */}
            <SEOPagesFlexContainer>
                <div className="flex flex-col gap-10 md:p-10 w-full">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-xl font-bold pl-4 border-l-2">{prebuildPrompts[10].category}</h2>
                        <div className="w-full overflow-x-auto pb-2 md:px-5 relative">

                            <div className="flex flex-nowrap gap-5 w-max">
                                {prebuildPrompts[10].prompts.map((prompt, index) => (
                                    <div key={index} className="p-8 max-w-[250px] min-w-[250px] md:max-w-[300px] md:min-w-[300px] w-full bg-gradient-to-r from-[#ffffff01] to-[#ffffff03] rounded-lg shadow-md flex flex-col justify-between items-start gap-5 md:hover:-translate-y-4 transition-all">
                                        <p className="text-sm font-extralight m-0">{prompt}</p>
                                        <Link href={`/ai?prompt=${prompt}`}>
                                            <button className="flex flex-nowrap gap-2 justify-center items-center py-2 px-4 bg-[#ffffff10] hover:bg-white hover:text-secodary-color rounded-lg">
                                                <RiBardFill size={15} />
                                                <p className="m-0 text-xs">Ask AI</p>
                                            </button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SEOPagesFlexContainer>

            {/* FAQ Section */}
            <SEOPagesFlexContainer>
                <div
                    className='w-full space-y-5'
                >
                    <h2
                        className='text-3xl font-semibold text-center'
                    >Common Questions About AI for IP Law</h2>

                    <SEOPageFaqAccordion
                        faqItems={[
                            {
                                question: "Can AI draft patent applications?",
                                answer: "Yes, AI generates structured patent applications, but a patent attorney should review them.",
                            },
                            {
                                question: "How reliable is AI for trademark disputes?",
                                answer: "AI provides case-based insights, but legal consultation is recommended for final filings.",
                            },
                            {
                                question: "Is AI secure for handling IP law matters?",
                                answer: "Yes, AI Law GPT ensures confidentiality and does not store sensitive intellectual property data.",
                            },
                        ]}
                    />
                </div>
            </SEOPagesFlexContainer>
        </BasicLayout>
    )
}

export default AiPoweredPromptsForIPTrademarkLawyers