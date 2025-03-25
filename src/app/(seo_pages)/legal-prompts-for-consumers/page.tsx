import ParaText from '@/components/Common/ParaText'
import BasicLayout from '@/layouts/BasicLayout'
import React from 'react'
import SEOPagesFlexContainer from '../Container'
import SEOPageListView from '../ListView'
import SEOPageFaqAccordion from '../FaqAccordion'
import prebuildPrompts from '@/components/AiPage/PromptTextarea/PrebuildPrompts/PromptItems'
import Link from 'next/link'
import { RiBardFill } from '@remixicon/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "AI Legal Prompts for Consumers | Get Instant Advice",
    description: "Get AI legal advice for consumers with tailored legal GPT prompts. Easily navigate consumer legal questions with AI-powered legal help and insights."
}

const LegalPromptsForConsumers = () => {

    const checkListPoints: {
        text: string,
        subText: string[],
    }[] = [
            {
                text: "Identify Your Legal Issue",
                subText: [
                    "What legal topic do you need help with? (Consumer rights, contracts, employment, etc.)"
                ],
            },
            {
                text: "Ask Clear Questions",
                subText: [
                    "Frame your question concisely for the best AI-generated response.",
                ],
            },
            {
                text: "Review AI-Generated Answers",
                subText: [
                    "Read the AI response carefully and determine if further clarification is needed.",
                ],
            },
            {
                text: "Verify with a Legal Professional",
                subText: [
                    "While AI-generated insights are helpful, consulting an attorney is always recommended for complex issues.",
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
                    >Legal Prompts for <br />Consumers</h1>
                </div>
                <div
                    className='w-full'
                >
                    <div
                        className='flex flex-col gap-5'
                    >
                        <ParaText>
                            AI Law GPT makes it easy for consumers to get instant legal answers.
                            Our AI-powered platform provides tailored legal prompts to help you
                            understand your rights and navigate common legal issues efficiently and
                            affordably.
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
                    >What Are Legal Prompts for Consumers?</h2>

                    <ParaText>
                        Legal prompts for consumers are AI-generated questions and answers designed to
                        provide quick insights into various legal matters. Whether you need help with consumer
                        rights, landlord-tenant disputes, employment concerns, or family law, AI Law GPT guides
                        you through the process with clarity and accuracy.
                    </ParaText>

                    <h2
                        className='text-3xl font-semibold'
                    >Things to Know About AI Legal Prompts</h2>

                    <SEOPageListView
                        items={[
                            "AI legal prompts provide general legal insights but do not replace professional legal advice.",
                            "Topics covered include consumer protection, landlord-tenant disputes, contract law, family law, and more.",
                            "AI Law GPT ensures privacy and confidentiality when answering legal questions.",
                            "Laws vary by state, so always verify AI-generated responses with a legal professional when necessary.",
                        ]}
                    />

                    <ParaText>
                        Through AI Law GPT users gain instant access to legal information and can
                        both understand their rights and find the most suitable options for their
                        circumstances. AI prompts offer excellent first guidance but professional legal
                        counsel gives you complete legal assistance that matches your particular requirements.
                    </ParaText>

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
                    >Checklist for Using AI Legal Prompts</h2>

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
                        <h2 className="text-xl font-bold pl-4 border-l-2">{prebuildPrompts[0].category}</h2>
                        <div className="w-full overflow-x-auto pb-2 md:px-5 relative">

                            <div className="flex flex-nowrap gap-5 w-max">
                                {prebuildPrompts[0].prompts.map((prompt, index) => (
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
                    >Common Questions About AI Legal Prompts</h2>

                    <SEOPageFaqAccordion
                        faqItems={[
                            {
                                question: "Can AI legal prompts replace a human lawyer?",
                                answer: "AI legal prompts provide quick insights, but they do not replace professional legal advice. For complex cases, always seek legal counsel.",
                            },
                            {
                                question: "Are AI-generated legal answers accurate and reliable?",
                                answer: "AI Law GPT is built on vast legal data and designed for accuracy. However, laws change, so verifying information with a professional is recommended.",
                            },
                            {
                                question: "Is my information secure when using AI legal prompts?",
                                answer: "Yes, AI Law GPT ensures confidentiality and does not store or share your personal legal queries.",
                            },
                        ]}
                    />
                </div>
            </SEOPagesFlexContainer>
        </BasicLayout>
    )
}

export default LegalPromptsForConsumers