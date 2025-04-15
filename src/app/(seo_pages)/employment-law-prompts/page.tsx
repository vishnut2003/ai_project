import BasicLayout from "@/layouts/BasicLayout"
import SEOPagesFlexContainer from "../Container"
import ParaText from "@/components/Common/ParaText"
import Link from "next/link"
import SEOPageListView from "../ListView"
import prebuildPrompts from "@/components/AiPage/PromptTextarea/PrebuildPrompts/PromptItems"
import { RiBardFill } from "@remixicon/react"
import SEOPageFaqAccordion from "../FaqAccordion"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "AI Prompts for Employment & Labor Lawyers | GPT Legal - Legallyours",
    description: "Use AI for employment law with labor law GPT prompts. Get AI-powered legal help for workplace disputes and HR legal document drafting with smart GPT tools.",
}

const AILegalPromptsForEmploymentLaborLaw = () => {
    const checkListPoints: {
        text: string,
        subText: string[],
    }[] = [
            {
                text: "Identify Case Type",
                subText: [
                    "Is it an employment contract, workplace dispute, wrongful termination, or compliance issue?"
                ],
            },
            {
                text: "Provide Key Case Details",
                subText: [
                    "Include employment terms, contract clauses, dispute details, or legal citations."
                ],
            },
            {
                text: "Draft & Review Legal Documents",
                subText: [
                    "Use AI-generated templates for workplace policies, contracts, and HR agreements."
                ],
            },
            {
                text: "Validate with a Legal Professional",
                subText: [
                    "Ensure final documents align with labor laws and company policies."
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
                    >AI Legal Prompts for <br />Employment &amp; Labor Law</h1>
                </div>
                <div
                    className='w-full'
                >
                    <div
                        className='flex flex-col gap-5'
                    >
                        <ParaText>
                            Workplace-related legal matters become more efficient through AI-powered
                            prompts that employment and labor lawyers use on the platform.
                            The platform expedites workplace legal operations through its accurate
                            and efficient processes which cover both drafting employment contracts
                            and managing workplace conflicts and compliance requirements.
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
                    >What Are AI Prompts for Employment & Labor Lawyers?</h2>

                    <ParaText>
                        AI prompts for employment law assist legal professionals in
                        generating contracts, workplace policies, dispute resolutions,
                        and compliance documents. AI Law GPT enables lawyers to save time
                        on legal drafting while ensuring accuracy and adherence to labor laws.
                    </ParaText>

                    <h2
                        className='text-3xl font-semibold'
                    >Key Benefits of AI-Powered Employment Law Assistance</h2>

                    <SEOPageListView
                        items={[
                            "Employment Contract Drafting – Generate structured contracts for new hires, executives, and freelancers.",
                            "Workplace Dispute Resolutions – AI helps outline dispute settlement terms and mediation agreements.",
                            "Termination & Severance Agreements – Ensure legally compliant employee exits.",
                            "Labor Law Compliance – Generate policies and guidelines adhering to federal and state laws.",
                            "Time & Cost Efficiency – Reduce time spent on manual drafting and focus on case strategy.",
                        ]}
                    />

                    <h2
                        className='text-3xl font-semibold'
                    >How to Use AI Prompts for Employment & Labor Law</h2>

                    <SEOPageListView
                        items={[
                            "Select Your Legal Task – Contracts, disputes, terminations, or compliance.",
                            "Enter a Specific Prompt – Example: 'Draft an employee termination letter with severance terms.'",
                            "Review & Customize – Adjust the AI-generated document to fit case-specific details.",
                            "Verify Legal Compliance – Ensure adherence to labor regulations and workplace laws.",
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
                    >Checklist for Using AI in Employment & Labor Law</h2>

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
                        <h2 className="text-xl font-bold pl-4 border-l-2">{prebuildPrompts[5].category}</h2>
                        <div className="w-full overflow-x-auto pb-2 md:px-5 relative">

                            <div className="flex flex-nowrap gap-5 w-max">
                                {prebuildPrompts[5].prompts.map((prompt, index) => (
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
                    >Common Questions About AI for Employment & Labor Law</h2>

                    <SEOPageFaqAccordion
                        faqItems={[
                            {
                                question: "Can AI generate legally binding employment law documents?",
                                answer: "AI drafts structured legal documents, but attorneys must review and finalize them for legal validity.",
                            },
                            {
                                question: "How reliable is AI for workplace dispute resolutions?",
                                answer: "AI Law GPT helps draft dispute resolution documents, but legal oversight ensures case-specific accuracy.",
                            },
                            {
                                question: "Is employee and client data secure when using AI for legal drafting?",
                                answer: "Yes, AI Law GPT prioritizes confidentiality and does not store or share sensitive employment data.",
                            },
                        ]}
                    />
                </div>
            </SEOPagesFlexContainer>
        </BasicLayout>
    )
}

export default AILegalPromptsForEmploymentLaborLaw