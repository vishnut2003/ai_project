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
    title: "AI Immigration Law Prompts | Smart Legal GPT - Legallyours",
    description: "Use AI for immigration law with GPT prompts for visa and green card applications. Streamline immigration petition drafting with legal AI for attorneys.",
}

const AiLegalPromptsForImmigrationLawyers = () => {
    const checkListPoints: {
        text: string,
        subText: string[],
    }[] = [
            {
                text: "Identify Case Type",
                subText: [
                    "Is it a visa application, asylum petition, green card request, or work permit filing?"
                ],
            },
            {
                text: "Provide Key Case Details",
                subText: [
                    "Include client-specific immigration history, legal grounds, and required evidence."
                ],
            },
            {
                text: "Draft & Review Legal Documents",
                subText: [
                    "Use AI-generated templates for affidavits, petitions, and supporting statements."
                ],
            },
            {
                text: "Validate with a Legal Professional",
                subText: [
                    "Ensure final documents adhere to immigration laws and regulations."
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
                    >AI Legal Prompts for <br />Immigration Lawyers</h1>
                </div>
                <div
                    className='w-full'
                >
                    <div
                        className='flex flex-col gap-5'
                    >
                        <ParaText>
                            With AI Law GPT attorneys specializing in immigration law access AI-driven
                            automation for speeding up visa applications and asylum petitioning
                            and compliance filing processes. AI-powered tools from our platform boost
                            operational speed as well as complete immigration law procedures accurately.
                        </ParaText>
                        <Link
                            className='py-3 px-5 w-full bg-secodary-color text-white rounded-2xl font-semibold flex justify-center'
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
                    >What Are AI Prompts for Immigration Lawyers?</h2>

                    <ParaText>
                        AI prompts for immigration law assist attorneys in drafting legal
                        documents, preparing petitions, and responding to complex
                        immigration cases. AI Law GPT provides structured guidance to
                        help lawyers navigate visa applications, green card processes,
                        and asylum claims.
                    </ParaText>

                    <h2
                        className='text-3xl font-semibold'
                    >Key Benefits of AI-Powered Immigration Law Assistance</h2>

                    <SEOPageListView
                        items={[
                            "Visa Application Drafting – Generate detailed visa petitions, including H-1B, family-based visas, and employment sponsorships.",
                            "Asylum & Refugee Petitions – Create well-structured asylum applications with supporting legal arguments.",
                            "Green Card & Citizenship Filings – AI-generated prompts help draft applications for permanent residency and naturalization.",
                            "Immigration Law Compliance – Ensure proper documentation for work permits, travel bans, and border regulations.",
                            "Time & Cost Savings – Reduce drafting time and increase case processing efficiency.",
                        ]}
                    />

                    <h2
                        className='text-3xl font-semibold'
                    >How to Use AI Prompts for Immigration Law</h2>

                    <SEOPageListView
                        items={[
                            "Select Your Legal Task – Visa petitions, asylum cases, naturalization, or compliance.",
                            "Enter a Specific Prompt – Example: 'Draft an H-1B visa sponsorship letter for a tech employee.'",
                            "Review & Customize – Adjust the AI-generated document to match client details and case-specific nuances.",
                            "Ensure Compliance with Immigration Laws – Verify documentation against the latest legal requirements.",
                        ]}
                    />

                    <Link
                        className='py-3 px-6 w-max bg-secodary-color text-white rounded-2xl font-semibold flex'
                        href={'/ai'}
                    >
                        Get Started Here
                    </Link>
                </div>
                <div
                    className='max-w-[400px] w-full py-4 px-6 rounded-md bg-black/5 space-y-4'
                >
                    <h2
                        className='text-2xl font-light'
                    >Checklist for Using AI in Immigration Law</h2>

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
                        <h2 className="text-xl font-bold pl-4 border-l-2">{prebuildPrompts[6].category}</h2>
                        <div className="w-full overflow-x-auto pb-2 md:px-5 relative">

                            <div className="flex flex-nowrap gap-5 w-max">
                                {prebuildPrompts[6].prompts.map((prompt, index) => (
                                    <div key={index} className="p-8 max-w-[250px] min-w-[250px] md:max-w-[300px] md:min-w-[300px] w-full bg-gradient-to-r from-[#ffffff01] to-[#ffffff03] rounded-lg shadow-md flex flex-col justify-between items-start gap-5 md:hover:-translate-y-4 transition-all">
                                        <p className="text-sm font-extralight m-0">{prompt}</p>
                                        <Link href={`/ai?prompt=${prompt}`}>
                                            <button className="flex flex-nowrap gap-2 justify-center items-center py-2 px-4 bg-secodary-color text-white hover:bg-white hover:text-secodary-color rounded-lg">
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
                    >Common Questions About AI for Immigration Law</h2>

                    <SEOPageFaqAccordion
                        faqItems={[
                            {
                                question: "Can AI generate accurate visa and green card petitions?",
                                answer: "AI provides structured drafts, but immigration attorneys must review and finalize for legal accuracy.",
                            },
                            {
                                question: "How reliable is AI for asylum and deportation defense cases?",
                                answer: "AI helps structure applications, but legal expertise is required for case-specific strategy and appeals.",
                            },
                            {
                                question: "Is client data secure when using AI for immigration law?",
                                answer: "Yes, AI Law GPT prioritizes confidentiality and does not store or share sensitive immigration data.",
                            },
                        ]}
                    />
                </div>
            </SEOPagesFlexContainer>
        </BasicLayout>
    )
}

export default AiLegalPromptsForImmigrationLawyers