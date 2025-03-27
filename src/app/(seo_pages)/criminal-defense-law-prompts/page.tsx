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
    title: "AI Prompts for Criminal Defense Lawyers | Legal GPT - Legallyours",
    description: "Use AI for criminal lawyers with GPT prompts for defense attorneys. Get legal AI for criminal case analysis and case law prompts for stronger defense strategies.",
}

const LegalPromptsForCriminalDefenseWithAi = () => {
    const checkListPoints: {
        text: string,
        subText: string[],
    }[] = [
            {
                text: "Identify the Legal Issue",
                subText: [
                    "Criminal charges, evidence suppression, trial strategy, plea bargains, or appeals?"
                ],
            },
            {
                text: "Gather Case Facts",
                subText: [
                    "Include police reports, witness statements, and prior rulings."
                ],
            },
            {
                text: "Draft & Review Legal Arguments",
                subText: [
                    "Use AI to generate legal briefs, defense strategies, and counterarguments."
                ],
            },
            {
                text: "Verify Compliance with Legal Standards",
                subText: [
                    "Ensure AI-generated content aligns with jurisdictional laws."
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
                    >Legal Prompts for <br />Criminal Defense with AI</h1>
                </div>
                <div
                    className='w-full'
                >
                    <div
                        className='flex flex-col gap-5'
                    >
                        <ParaText>
                            AI Law GPT empowers criminal defense lawyers with AI-driven prompts
                            to enhance case preparation, strategy development, and legal documentation.
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
                    >What Are AI Prompts for Criminal Defense?</h2>

                    <ParaText>
                        AI-powered legal prompts provide defense attorneys with structured guidance for case
                        analysis, argument formulation, and legal documentation. Whether handling misdemeanors,
                        felonies, or appeals, AI Law GPT streamlines research and drafting processes.
                    </ParaText>

                    <h2
                        className='text-3xl font-semibold'
                    >Key Benefits of AI for Criminal Defense</h2>

                    <SEOPageListView
                        items={[
                            "Case Strategy Development – Generate defense arguments based on precedent and case law.",
                            "Legal Research Assistance – Use AI to find relevant case rulings and legal interpretations.",
                            "Client Interview Preparation – Create structured question sets for client consultations.",
                            "Motion & Brief Drafting – Generate legal documents, motions, and appeals efficiently.",
                            "Sentencing & Plea Bargain Insights – AI-assisted plea deal evaluation and sentencing analysis.",
                        ]}
                    />

                    <h2
                        className='text-3xl font-semibold'
                    >How to Use AI Prompts for Criminal Defense</h2>

                    <SEOPageListView
                        items={[
                            "Define the Case Type – Felony, misdemeanor, white-collar crime, DUI, etc.",
                            "Input Case Details – Example: 'Draft a motion to suppress evidence in a DUI case.'",
                            "Generate & Review Legal Documents – AI produces structured drafts for review.",
                            "Cross-Check with Case Law – Verify AI-generated insights with relevant statutes and precedents.",
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
                    >Checklist for Using AI in Criminal Defense</h2>

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
                        <h2 className="text-xl font-bold pl-4 border-l-2">{prebuildPrompts[11].category}</h2>
                        <div className="w-full overflow-x-auto pb-2 md:px-5 relative">

                            <div className="flex flex-nowrap gap-5 w-max">
                                {prebuildPrompts[11].prompts.map((prompt, index) => (
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
                    >Common Questions About AI for Criminal Defense</h2>

                    <SEOPageFaqAccordion
                        faqItems={[
                            {
                                question: "Can AI help build a criminal defense strategy?",
                                answer: "Yes, AI can analyze case details, suggest defenses, and summarize relevant precedents.",
                            },
                            {
                                question: "How accurate are AI-generated legal arguments?",
                                answer: "AI bases its insights on extensive legal data, but attorneys should verify and refine arguments.",
                            },
                            {
                                question: "Is AI secure for criminal case research?",
                                answer: "Yes, AI Law GPT prioritizes data confidentiality and does not store sensitive case details.",
                            },
                        ]}
                    />
                </div>
            </SEOPagesFlexContainer>
        </BasicLayout>
    )
}

export default LegalPromptsForCriminalDefenseWithAi