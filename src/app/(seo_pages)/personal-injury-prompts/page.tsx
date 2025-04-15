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
    title: "AI Prompts for Personal Injury Lawyers | GPT Legal Tools - Legallyours",
    description: "Get AI prompts for personal injury lawyers to streamline case research. Use GPT for legal insights on claims, liability, and settlements with AI assistance.",
}

const LegalPromptsForPersonalInjuryLawWithAi = () => {
    const checkListPoints: {
        text: string,
        subText: string[],
    }[] = [
            {
                text: "Identify Case Type",
                subText: [
                    "Among various types of injury claims, which one is it - a car accident, workplace injury or medical malpractice?"
                ],
            },
            {
                text: "Provide Key Case Details",
                subText: [
                    "Include accident date, injuries, medical treatments, and liable parties."
                ],
            },
            {
                text: "Draft & Review Legal Documents",
                subText: [
                    "Use AI-generated drafts for injury reports, demand letters, and legal filings."
                ],
            },
            {
                text: "Validate with a Legal Professional",
                subText: [
                    "Ensure documents comply with court and insurance requirements."
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
                    >Legal Prompts for Personal Injury <br />Law with AI</h1>
                </div>
                <div
                    className='w-full'
                >
                    <div
                        className='flex flex-col gap-5'
                    >
                        <ParaText>
                            Law GPT AI delivers AI-powered assistance to personal injury lawyers
                            who need help with case evaluations and injury reporting and demand letters
                            and legal paperwork preparation. Use artificial intelligence to improve
                            your practice by developing documents that are quick and exact.
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
                    >What Are AI Prompts for Personal Injury Lawyers?</h2>

                    <ParaText>
                        AI prompts built for personal injury cases help lawyers obtain
                        important case facts and develop strong arguments and create fundamental
                        documents. The automation capabilities of AI Law GPT shorten clerical
                        work processing times while enhancing system preparedness for cases.
                    </ParaText>

                    <h2
                        className='text-3xl font-semibold'
                    >Key Benefits of AI-Powered Personal Injury Assistance</h2>

                    <SEOPageListView
                        items={[
                            "Injury Report Generation – Create structured injury summaries and medical report outlines.",
                            "Demand Letter Drafting – AI helps draft compelling settlement demands.",
                            "Case Evaluation Prompts – Identify key legal precedents and case strengths.",
                            "Legal Filing Assistance – Generate structured court filings and motions efficiently.",
                            "Time & Cost Efficiency – Reduce time spent on repetitive legal drafting tasks.",
                        ]}
                    />

                    <h2
                        className='text-3xl font-semibold'
                    >How to Use AI Prompts for Personal Injury Cases</h2>

                    <SEOPageListView
                        items={[
                            "Select Your Legal Task – Case assessment, injury report, demand letter, etc.",
                            "Enter a Specific Prompt – Example: 'Draft a demand letter for a car accident injury claim.'",
                            "Review & Customize – Modify AI-generated content to fit client-specific case details.",
                            "Verify Legal Accuracy – Ensure compliance with jurisdictional laws and legal best practices.",
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
                    >Checklist for Using AI in Personal Injury Cases</h2>

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
                        <h2 className="text-xl font-bold pl-4 border-l-2">{prebuildPrompts[4].category}</h2>
                        <div className="w-full overflow-x-auto pb-2 md:px-5 relative">

                            <div className="flex flex-nowrap gap-5 w-max">
                                {prebuildPrompts[4].prompts.map((prompt, index) => (
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
                    >Common Questions About AI for Personal Injury Law</h2>

                    <SEOPageFaqAccordion
                        faqItems={[
                            {
                                question: "Can AI generate legally binding personal injury documents?",
                                answer: "AI provides structured legal drafts, but attorneys must finalize them for legal validity.",
                            },
                            {
                                question: "How accurate are AI-generated injury claims and reports?",
                                answer: "AI Law GPT is trained on legal frameworks, but human review ensures case-specific accuracy.",
                            },
                            {
                                question: "Is client information secure when using AI for personal injury law?",
                                answer: "Yes, AI Law GPT prioritizes confidentiality and does not store sensitive client data.",
                            },
                        ]}
                    />
                </div>
            </SEOPagesFlexContainer>
        </BasicLayout>
    )
}

export default LegalPromptsForPersonalInjuryLawWithAi