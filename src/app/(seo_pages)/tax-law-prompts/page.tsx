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
    title: "AI Prompts for Tax Lawyers | Smart Legal GPT",
    description: "Use AI prompts for tax lawyers to streamline tax law research, compliance, and filings. Get GPT-powered legal insights for tax planning and regulations.",
}

const AiPoweredLegalPromptsForTaxLawPractice = () => {
    const checkListPoints: {
        text: string,
        subText: string[],
    }[] = [
            {
                text: "Identify Tax Concerns",
                subText: [
                    "Income tax, corporate tax, audits, or tax litigation?"
                ],
            },
            {
                text: "Gather Financial & Legal Information",
                subText: [
                    "Include necessary tax documents, financial records, and filing deadlines."
                ],
            },
            {
                text: "Generate & Review Legal Responses",
                subText: [
                    "Use AI prompts for drafting tax dispute letters, compliance reports, and legal strategies."
                ],
            },
            {
                text: "Consult with a Tax Attorney",
                subText: [
                    "Verify AI-generated content with a tax law professional for accuracy."
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
                    >AI-Powered Legal Prompts <br />for Tax Law Practice</h1>
                </div>
                <div
                    className='w-full'
                >
                    <div
                        className='flex flex-col gap-5'
                    >
                        <ParaText>
                            AI Law GPT revolutionizes tax law practice by providing AI-generated
                            prompts for tax compliance, audits, and legal filings. Enhance efficiency,
                            streamline case research, and assist clients with precise, AI-powered legal
                            insights.
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
                    >What Are AI Prompts for Tax Lawyers?</h2>

                    <ParaText>
                        AI-generated legal prompts help tax attorneys with compliance guidance,
                        tax dispute resolution, and filing support. Whether handling IRS audits,
                        corporate tax law, or individual tax planning, AI Law GPT provides valuable
                        assistance in legal tax matters.
                    </ParaText>

                    <h2
                        className='text-3xl font-semibold'
                    >Key Benefits of AI-Powered Tax Law Assistance</h2>

                    <SEOPageListView
                        items={[
                            "Tax Filing & Compliance – AI-generated prompts ensure businesses and individuals meet legal tax obligations.",
                            "Audit Preparation – Assist clients in responding to IRS and state tax audits with tailored legal insights.",
                            "Tax Dispute Resolution – Generate legal arguments and case law references for tax litigation.",
                            "Corporate & Business Taxation – AI supports corporate tax structuring and regulatory compliance.",
                            "Estate & Inheritance Tax Guidance – Assist with estate tax planning and wealth transfer strategies.",
                        ]}
                    />

                    <h2
                        className='text-3xl font-semibold'
                    >How to Use AI Prompts for Tax Law</h2>

                    <SEOPageListView
                        items={[
                            "Define the Legal Tax Issue – Filing, audit response, or tax litigation.",
                            "Input Specific Details – Example: 'Generate a response for an IRS audit notice.'",
                            "Review & Customize AI Output – Tailor AI-generated insights to the client's tax situation.",
                            "Ensure Compliance & Accuracy – Cross-check AI responses with up-to-date tax regulations.",
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
                    >Checklist for Using AI in Tax Law</h2>

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
                        <h2 className="text-xl font-bold pl-4 border-l-2">{prebuildPrompts[8].category}</h2>
                        <div className="w-full overflow-x-auto pb-2 md:px-5 relative">

                            <div className="flex flex-nowrap gap-5 w-max">
                                {prebuildPrompts[8].prompts.map((prompt, index) => (
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
                    >Common Questions About AI for Tax Law</h2>

                    <SEOPageFaqAccordion
                        faqItems={[
                            {
                                question: "Can AI help with IRS audit responses?",
                                answer: "Yes, AI-generated prompts assist in structuring clear, legally sound audit responses.",
                            },
                            {
                                question: "Does AI ensure tax law compliance?",
                                answer: "AI provides compliance insights, but a tax attorney should verify accuracy and legal applicability.",
                            },
                            {
                                question: "Is AI secure for handling tax-related information?",
                                answer: "Yes, AI Law GPT maintains confidentiality and does not store sensitive tax data.",
                            },
                        ]}
                    />
                </div>
            </SEOPagesFlexContainer>
        </BasicLayout>
    )
}

export default AiPoweredLegalPromptsForTaxLawPractice