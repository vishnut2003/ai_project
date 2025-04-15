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
    title: "AI Prompts for Legal Drafting | Smart Document Tools - Legallyours",
    description: "Use AI prompts for legal drafting to streamline contracts and documents. Get contract drafting with GPT and AI document generation for lawyers with ease."
}

const AiLegalPromptsForDraftingDocuments = () => {
    const checkListPoints: {
        text: string,
        subText: string[],
    }[] = [
            {
                text: "Identify the Document Type",
                subText: [
                    "Are you drafting a contract, agreement, or another legal document?"
                ],
            },
            {
                text: "Provide Essential Details",
                subText: [
                    "Include names, dates, obligations, and other key information."
                ],
            },
            {
                text: "Review & Edit the Draft",
                subText: [
                    "Ensure the document aligns with your specific legal requirements."
                ],
            },
            {
                text: "Validate with Legal Counsel",
                subText: [
                    "Confirm accuracy and enforceability with a qualified attorney."
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
                    >AI Legal Prompts for <br />Drafting Documents</h1>
                </div>
                <div
                    className='w-full'
                >
                    <div
                        className='flex flex-col gap-5'
                    >
                        <ParaText>
                            AI Law GPT simplifies legal document creation by providing intelligent,
                            AI-powered prompts for drafting contracts, NDAs, wills, and more. Our platform
                            helps legal professionals and consumers generate precise and legally sound
                            documents in seconds
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
                    >What Are AI Prompts for Legal Document Drafting?</h2>

                    <ParaText>
                        AI prompts for legal drafting represent structured inputs which help an AI system
                        produce legal documents such as contracts and agreements together with other binding
                        documents in a fast and precise manner. Through AI technology users achieve full
                        legal document drafting that meets all necessary requirements with almost no human
                        intervention.
                    </ParaText>

                    <h2
                        className='text-3xl font-semibold'
                    >Key Benefits of AI-Powered Legal Drafting</h2>

                    <SEOPageListView
                        items={[
                            "Automated Drafting – Generate contracts, NDAs, wills, and more instantly.",
                            "Legal Accuracy – AI ensures proper structuring and legal terminology.",
                            "Time & Cost Efficiency – Reduce the time spent on manual drafting.",
                            "Customizable Templates – Adapt AI-generated drafts to suit your needs.",
                            "Error Reduction – Minimize legal inconsistencies and drafting mistakes.",
                        ]}
                    />

                    <h2
                        className='text-3xl font-semibold'
                    >How to Use AI Prompts for Legal Drafting</h2>

                    <SEOPageListView
                        items={[
                            "Select Your Document Type – Contract, NDA, lease, or other legal document.",
                            "Provide Key Details – Example: 'Draft a non-disclosure agreement for a software company.'",
                            "Review & Customize – Adjust clauses and terms to fit your needs.",
                            "Verify with a Legal Professional – AI-generated drafts should always be reviewed for compliance.",
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
                    >Checklist for AI Legal Document Drafting</h2>

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
                        <h2 className="text-xl font-bold pl-4 border-l-2">{prebuildPrompts[2].category}</h2>
                        <div className="w-full overflow-x-auto pb-2 md:px-5 relative">

                            <div className="flex flex-nowrap gap-5 w-max">
                                {prebuildPrompts[2].prompts.map((prompt, index) => (
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
                    >Common Questions About AI Legal Document Drafting</h2>

                    <SEOPageFaqAccordion
                        faqItems={[
                            {
                                question: "Can AI generate legally binding documents?",
                                answer: "AI drafts legally structured documents, but they must be reviewed and signed to be legally binding. Consulting an attorney is always recommended.",
                            },
                            {
                                question: "How accurate are AI-generated legal documents?",
                                answer: "AI Law GPT ensures high accuracy, but legal nuances should be checked by a professional to ensure compliance.",
                            },
                            {
                                question: "Is my data secure when using AI for legal drafting?",
                                answer: "Yes, AI Law GPT prioritizes confidentiality and does not store sensitive legal queries.",
                            },
                        ]}
                    />
                </div>
            </SEOPagesFlexContainer>
        </BasicLayout>
    )
}

export default AiLegalPromptsForDraftingDocuments