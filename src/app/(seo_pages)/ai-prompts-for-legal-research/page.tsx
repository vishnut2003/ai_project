import React from 'react'
import SEOPageFaqAccordion from '../FaqAccordion'
import SEOPagesFlexContainer from '../Container'
import prebuildPrompts from '@/components/AiPage/PromptTextarea/PrebuildPrompts/PromptItems'
import Link from 'next/link'
import { RiBardFill } from '@remixicon/react'
import BasicLayout from '@/layouts/BasicLayout'
import ParaText from '@/components/Common/ParaText'
import SEOPageListView from '../ListView'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "AI Prompts for Legal Research | Smart GPT Tools - Legallyours",
    description: "Use AI prompts for legal research to streamline case law analysis. GPT for legal research delivers automated case law research prompts and legal AI tools."
}

const AiPromptsToSuperchargeLegalResearch = () => {
    const checkListPoints: {
        text: string,
        subText: string[],
    }[] = [
            {
                text: "Identify Your Legal Topic",
                subText: [
                    "Describe which legal field your research investigates (such as contract law or intellectual property or torts)."
                ],
            },
            {
                text: "Refine Your Search Terms",
                subText: [
                    "Use precise legal terminology for better AI-generated results."
                ],
            },
            {
                text: "Review and Validate Information",
                subText: [
                    "Always compare AI results with authoritative legal sources."
                ],
            },
            {
                text: "Apply Research Findings",
                subText: [
                    "Utilize AI-generated insights to strengthen legal arguments and case preparation."
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
                    >AI Prompts to Supercharge <br />Legal Research</h1>
                </div>
                <div
                    className='w-full'
                >
                    <div
                        className='flex flex-col gap-5'
                    >
                        <ParaText>
                            AI Law GPT speeds up legal research through its AI-enabled
                            prompting system which produces prompt text summaries and
                            locates legal precedent documents quickly. Our sophisticated
                            system helps users solve demanding legal requests efficiently and
                            boost precision.
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
                    >What Are AI Prompts for Legal Research?</h2>

                    <ParaText>
                        AI prompts for legal research are pre-programmed search queries which
                        assist legal experts and researchers to efficiently access proper case
                        law together with statutes plus legal arguments. The combination of AI
                        automation enables users to speed up legal analysis processes while obtaining
                        essential information without having to conduct long manual investigations.
                    </ParaText>

                    <h2
                        className='text-3xl font-semibold'
                    >Key Benefits of AI-Powered Legal Research</h2>

                    <SEOPageListView
                        items={[
                            "Instant Case Summaries – AI Law GPT extracts and summarizes key legal rulings and precedents.",
                            "Precedent Identification – Locate relevant cases and legal principles with precision.",
                            "Statutory & Regulatory Analysis – Review and interpret legal codes efficiently.",
                            "Time-Saving Legal Insights – Reduce research time and focus on case strategy.",
                            "Enhanced Legal Accuracy – Minimize errors with AI-driven document analysis.",
                        ]}
                    />

                    <h2
                        className='text-3xl font-semibold'
                    >How to Use AI Prompts for Legal Research</h2>

                    <SEOPageListView
                        items={[
                            "Define Your Research Goal – Are you looking for case precedents, statutes, or legal arguments?",
                            "Input a Clear Prompt – Example: 'Summarize the key rulings in Roe v. Wade.'",
                            "Analyze AI-Generated Results – Review summaries, citations, and interpretations.",
                            "Verify with Official Sources – AI research is a powerful tool but should be cross-checked with official legal databases.",
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
                    >Checklist for Effective Legal Research Using AI</h2>

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
                        <h2 className="text-xl font-bold pl-4 border-l-2">{prebuildPrompts[1].category}</h2>
                        <div className="w-full overflow-x-auto pb-2 md:px-5 relative">

                            <div className="flex flex-nowrap gap-5 w-max">
                                {prebuildPrompts[1].prompts.map((prompt, index) => (
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
                    >Common Questions About AI Legal Research Prompts</h2>

                    <SEOPageFaqAccordion
                        faqItems={[
                            {
                                question: "Can AI replace traditional legal research?",
                                answer: "AI enhances efficiency but does not replace human expertise. Lawyers and researchers should always verify AI-generated insights with official sources.",
                            },
                            {
                                question: "Is AI-generated legal research accurate?",
                                answer: "AI Law GPT is built on extensive legal data and designed for accuracy. However, legal interpretations should always be reviewed by professionals",
                            },
                            {
                                question: "Is my data secure when using AI legal research tools?",
                                answer: "Yes, AI Law GPT prioritizes confidentiality and does not store sensitive legal queries.",
                            },
                        ]}
                    />
                </div>
            </SEOPagesFlexContainer>
        </BasicLayout>
    )
}

export default AiPromptsToSuperchargeLegalResearch