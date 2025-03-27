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
    title: "AI Legal Prompts for Family Lawyers | Smart GPT Tools",
    description: "Use AI for family law with GPT prompts for divorce lawyers and child custody cases. Get legal AI for family law attorneys to streamline case research.",
}

const AiPoweredForFamilyLawProfessional = () => {
    const checkListPoints: {
        text: string,
        subText: string[],
    }[] = [
            {
                text: "Identify Case Type",
                subText: [
                    "Do you face a family law issue related to divorce or child custody or adoption?"
                ],
            },
            {
                text: "Provide Essential Case Details",
                subText: [
                    "Include names, dates, financial details, and custodial arrangements."
                ],
            },
            {
                text: "Review AI-Generated Drafts",
                subText: [
                    "Modify language to reflect case-specific agreements and legal requirements."
                ],
            },
            {
                text: "Validate with a Legal Professional",
                subText: [
                    "Ensure final documents meet court and jurisdictional standards."
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
                    >AI-Powered Prompts for <br />Family Law Professionals</h1>
                </div>
                <div
                    className='w-full'
                >
                    <div
                        className='flex flex-col gap-5'
                    >
                        <ParaText>
                            AI Law GPT streamlines family law cases by providing AI-driven prompts for
                            drafting divorce petitions, child custody agreements, marital settlements,
                            and more. Our platform helps family lawyers save time, improve accuracy, and
                            generate well-structured legal documents effortlessly.
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
                    >What Are AI Prompts for Family Lawyers?</h2>

                    <ParaText>
                        AI prompts for family lawyers are structured queries designed to assist
                        legal professionals in handling family law matters more efficiently. From
                        generating legal drafts to analyzing case precedents, AI Law GPT enhances
                        legal workflows with intelligent automation.
                    </ParaText>

                    <h2
                        className='text-3xl font-semibold'
                    >Key Benefits of AI-Powered Family Law Assistance</h2>

                    <SEOPageListView
                        items={[
                            "Divorce Petition Drafting – Generate structured divorce petitions with ease.",
                            "Child Custody Agreements – AI helps outline custody terms and visitation schedules.",
                            "Marital Agreements – Create prenuptial and postnuptial agreements quickly.",
                            "Case Precedent Research – Identify relevant family law cases in seconds.",
                            "Time & Cost Efficiency – Reduce manual workload and focus on client advocacy.",
                        ]}
                    />

                    <h2
                        className='text-3xl font-semibold'
                    >How to Use AI Prompts for Family Law</h2>

                    <SEOPageListView
                        items={[
                            "Start by Choosing the Legal Issue – Divorce along with child custody and spousal support among others.",
                            "Enter a Specific Prompt – Example: 'Draft a child custody agreement with joint legal custody.'",
                            "Review & Customize – Adjust the AI-generated document to fit case-specific details.",
                            "Verify with Legal Standards – Ensure compliance with jurisdictional family law regulations.",
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
                    >Checklist for Using AI in Family Law Cases</h2>

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
                        <h2 className="text-xl font-bold pl-4 border-l-2">{prebuildPrompts[3].category}</h2>
                        <div className="w-full overflow-x-auto pb-2 md:px-5 relative">

                            <div className="flex flex-nowrap gap-5 w-max">
                                {prebuildPrompts[3].prompts.map((prompt, index) => (
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
                    >Common Questions About AI for Family Law</h2>

                    <SEOPageFaqAccordion
                        faqItems={[
                            {
                                question: "Can AI create legally binding family law documents?",
                                answer: "AI drafts legally structured documents, but they must be reviewed and finalized by an attorney to be legally binding.",
                            },
                            {
                                question: "How accurate is AI in handling family law cases?",
                                answer: "AI Law GPT is trained on extensive family law data, but human oversight ensures compliance and case-specific accuracy.",
                            },
                            {
                                question: "Is client information secure when using AI for legal drafting?",
                                answer: "Yes, AI Law GPT prioritizes confidentiality and does not store sensitive client data.",
                            },
                        ]}
                    />
                </div>
            </SEOPagesFlexContainer>
        </BasicLayout>
    )
}

export default AiPoweredForFamilyLawProfessional