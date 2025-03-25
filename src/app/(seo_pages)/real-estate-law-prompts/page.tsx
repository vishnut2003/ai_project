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
    title: "AI Prompts for Real Estate Lawyers | Smart Legal GPT",
    description: "Use AI prompts for property lawyers to streamline real estate contracts, lease agreement drafting, and legal AI solutions for real estate transactions.",
}

const RealestateLawPromptsWithAiAssistance = () => {
    const checkListPoints: {
        text: string,
        subText: string[],
    }[] = [
            {
                text: "Identify Legal Needs",
                subText: [
                    "Lease agreements, sales contracts, title disputes, or zoning laws?"
                ],
            },
            {
                text: "Gather Property & Client Details",
                subText: [
                    "Include property descriptions, client information, and contractual terms."
                ],
            },
            {
                text: "Generate & Review Legal Documents",
                subText: [
                    "Use AI to draft contracts, dispute letters, and legal opinions."
                ],
            },
            {
                text: "Consult with a Real Estate Attorney",
                subText: [
                    "Ensure AI-generated content is reviewed for legal accuracy and compliance."
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
                    >Real Estate Law Prompts <br />with AI Assistance</h1>
                </div>
                <div
                    className='w-full'
                >
                    <div
                        className='flex flex-col gap-5'
                    >
                        <ParaText>
                            The AI Law GPT generates prompts that help real estate attorneys
                            draft contracts and resolve disputes and maintain compliance.
                            AI systems should be used to optimize law-related operations while
                            improving productivity levels.
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
                    >What Are AI Prompts for Real Estate Lawyers?</h2>

                    <ParaText>
                        AI-generated legal prompts help real estate lawyers handle contracts,
                        lease agreements, property transactions, and dispute resolution.
                        AI Law GPT assists in creating legally sound documents while reducing
                        errors and saving time.
                    </ParaText>

                    <h2
                        className='text-3xl font-semibold'
                    >Key Benefits of AI-Powered Real Estate Law Assistance</h2>

                    <SEOPageListView
                        items={[
                            "Contract Drafting – Generate real estate contracts, purchase agreements, and closing documents.",
                            "Lease Agreement Assistance – Create residential and commercial lease agreements with accuracy.",
                            "Property Dispute Resolution – Lawyers should create legal defenses regarding title disputes as well as boundary conflicts and landlord-tenant disputes.",
                            "Zoning & Compliance Guidance – AI generates property zoning law and compliance regulation insights available to customers.",
                            "Real Estate Transactions – Ensure smooth legal processing of property purchases and sales.",
                        ]}
                    />

                    <h2
                        className='text-3xl font-semibold'
                    >How to Use AI Prompts for Real Estate Law</h2>

                    <SEOPageListView
                        items={[
                            "Define the Legal Issue – Contracts, lease agreements, property disputes, or zoning compliance.",
                            "Input Specific Details – Example: 'Draft a residential lease agreement for a single-family home.'",
                            "Review & Customize AI Output – Tailor AI-generated documents to meet client needs.",
                            "Ensure Compliance – Verify AI-generated content aligns with state-specific real estate laws.",
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
                    >Checklist for Using AI in Real Estate Law</h2>

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
                        <h2 className="text-xl font-bold pl-4 border-l-2">{prebuildPrompts[9].category}</h2>
                        <div className="w-full overflow-x-auto pb-2 md:px-5 relative">

                            <div className="flex flex-nowrap gap-5 w-max">
                                {prebuildPrompts[9].prompts.map((prompt, index) => (
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
                    >Common Questions About AI for Real Estate Law</h2>

                    <SEOPageFaqAccordion
                        faqItems={[
                            {
                                question: "Can AI draft real estate contracts?",
                                answer: "Yes, AI-generated prompts assist in creating legally sound contracts, but legal review is recommended.",
                            },
                            {
                                question: "Does AI provide accurate zoning and compliance information?",
                                answer: "AI offers general insights, but consulting a real estate attorney ensures compliance with local laws.",
                            },
                            {
                                question: "Is AI secure for handling real estate legal matters?",
                                answer: "Yes, AI Law GPT maintains confidentiality and does not store sensitive property or client data.",
                            },
                        ]}
                    />
                </div>
            </SEOPagesFlexContainer>
        </BasicLayout>
    )
}

export default RealestateLawPromptsWithAiAssistance