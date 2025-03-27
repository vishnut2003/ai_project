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
    title: "Business Law AI Prompts | Smart Legal GPT Tools",
    description: "Use AI prompts for corporate law, GPT for business contracts, and legal compliance prompts for startups. Streamline legal tasks with commercial law AI tools.",
}

const SmartPromptsForBusinessLawyersUsingAi = () => {
    const checkListPoints: {
        text: string,
        subText: string[],
    }[] = [
            {
                text: "Define Legal Needs",
                subText: [
                    "Are you drafting contracts, setting up a business, or ensuring compliance?"
                ],
            },
            {
                text: "Provide Key Business Details",
                subText: [
                    "Include business structure, jurisdiction, and specific legal requirements."
                ],
            },
            {
                text: "Generate & Review Legal Documents",
                subText: [
                    "Utilize AI prompts for accurate contract creation and policy drafting."
                ],
            },
            {
                text: "Consult with a Business Attorney",
                subText: [
                    "Validate AI-generated documents with legal professionals for final approval."
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
                    >Smart Prompts for Business <br />Lawyers Using AI</h1>
                </div>
                <div
                    className='w-full'
                >
                    <div
                        className='flex flex-col gap-5'
                    >
                        <ParaText>
                            Business law practitioners can use AI Law GPT to obtain AI-created suggestions
                            for writing contracts and maintaining corporate compliance and regulatory demands.
                            Law organizations can improve workflows by simplifying legal procedures while
                            streamlining operations through the usage of intelligent assistance for legal tasks.
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
                    >What Are AI Prompts for Business Lawyers?</h2>

                    <ParaText>
                        Business law practitioners can use AI Law GPT to obtain AI-created
                        suggestions for writing contracts and maintaining corporate compliance
                        and regulatory demands. Law organizations can improve workflows by
                        simplifying legal procedures while streamlining operations through
                        the usage of intelligent assistance for legal tasks.
                    </ParaText>

                    <h2
                        className='text-3xl font-semibold'
                    >Key Benefits of AI-Powered Business Law Assistance</h2>

                    <SEOPageListView
                        items={[
                            "Contract Drafting – Generate business contracts, NDAs, and partnership agreements efficiently.",
                            "Corporate Formation & Governance – AI prompts to assist with incorporation, bylaws, and compliance.",
                            "Regulatory Compliance –Your company needs to follow all legal requirements from your industry and national permissions.",
                            "Mergers & Acquisitions – Streamline due diligence, negotiations, and transaction documentation.",
                            "Startup & Entrepreneurial Legal Support – Startups receive assistance with their formation and funding agreements while their intellectual property receives protective measures.",
                        ]}
                    />

                    <h2
                        className='text-3xl font-semibold'
                    >How to Use AI Prompts for Business Law</h2>

                    <SEOPageListView
                        items={[
                            "Select Your Legal Task – Contract drafting, compliance review, or corporate structuring.",
                            "Enter a Specific Prompt – Example: 'Draft a shareholder agreement for a tech startup.'",
                            "Review & Customize – Modify AI-generated drafts to fit business-specific needs.",
                            "Ensure Legal Compliance – Verify agreements align with corporate law regulations.",
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
                    >Checklist for Using AI in Business Law</h2>

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
                        <h2 className="text-xl font-bold pl-4 border-l-2">{prebuildPrompts[7].category}</h2>
                        <div className="w-full overflow-x-auto pb-2 md:px-5 relative">

                            <div className="flex flex-nowrap gap-5 w-max">
                                {prebuildPrompts[7].prompts.map((prompt, index) => (
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
                    >Common Questions About AI for Business Law</h2>

                    <SEOPageFaqAccordion
                        faqItems={[
                            {
                                question: "Can AI create legally binding business contracts?",
                                answer: "AI drafts contract templates, but final review by a lawyer ensures enforceability and compliance.",
                            },
                            {
                                question: "What role does AI technology play to support corporate governance compliance?",
                                answer: "Through its analysis AI detects crucial business regulations before recommending unique compliance structures that match specific industry sectors.",
                            },
                            {
                                question: "Is AI secure for handling confidential business information?",
                                answer: "Yes, AI Law GPT maintains confidentiality and does not store sensitive legal data.",
                            },
                        ]}
                    />
                </div>
            </SEOPagesFlexContainer>
        </BasicLayout>
    )
}

export default SmartPromptsForBusinessLawyersUsingAi