import BasicLayout from '@/layouts/BasicLayout'
import { HeadingText, ListItems, ParaText } from '@/components/SupportPage/CommonTextStyles';

const RefundPolicyPage = () => {
    return (
        <BasicLayout>
            <div className='w-full flex justify-center items-center py-10 px-7'>
                <div className='w-full max-w-screen-xl'>
                    <h1 className='text-5xl font-semibold mb-5'>Refund Policy</h1>

                    {/* Content */}
                    <div>
                        <ParaText>
                            Effective Date: 21/04/2025
                        </ParaText>
                        <ParaText>
                            The LegallYours platform operates with mission to deliver dependable
                            AI-based legal support. assistance to our users. The implemented
                            chatbot system provides automated responses for legal guidance while
                            generating documents as well as general law-related information.
                            The system provides automated responses to deliver legal assistance as
                            well as document drafting services alongside general legal support.
                        </ParaText>
                        <ParaText>
                            Our digital service delivery system makes us establish
                            this following refund policy because our services become
                            accessible immediately after purchase or subscription.
                        </ParaText>

                        <HeadingText>1. No Refunds for Digital Services</HeadingText>

                        <ParaText>
                            The terms of all purchases made through LegallYours are nonrefundable.
                            We do not offer refunds for:
                        </ParaText>

                        <ListItems
                            items={[
                                "Subscription plans",
                                "One-time access packages",
                                "Document generation or AI consultation credits",
                            ]}
                        />

                        <ParaText>
                            Consumption of services triggers the start of service delivery and it
                            becomes permanently non-refundable after activation.
                        </ParaText>

                        <HeadingText>2. Exceptions for Technical Errors</HeadingText>

                        <ParaText>
                            A refund scenario applies under these circumstances:
                        </ParaText>

                        <ListItems
                            items={[
                                "One service costs you multiple times during one billing period.",
                                "The technical issue on our platform prevents you from accessing our service.",
                                "The vital system failure causes the AI to produce no usable results.",
                            ]}
                        />

                        <ParaText>
                            Contact <a href='mailto:legallyours23@gmail.com' rel="noopener nofollow">legallyours23@gmail.com</a> directly
                            within seven days of purchase to seek a refund if you encounter such exceptional situations.
                            We will evaluate the request and respond to your inquiry inside a 3–5 day business period.
                        </ParaText>

                        <HeadingText>3. Subscription Cancellations</HeadingText>

                        <ParaText>
                            Subscribers can terminate their membership at any time and will retain
                            full service access through the present billing cycle. The service will
                            stay accessible to you until your current billing period concludes following
                            subscription cancellation. The subscription service doesn&apos;t provide any
                            remainder of payment refunds for the unutilized period following cancellation.
                        </ParaText>

                        <HeadingText>4. Contact Information</HeadingText>

                        <ParaText>
                            To discuss our Refund Policy you can reach us through:
                        </ParaText>

                        <ListItems
                            items={[
                                (<p key={1}>Email: <a rel='nofollow noopener' href='mailto:legallyours23@gmail.com'>legallyours23@gmail.com</a></p>),
                            ]}
                        />
                    </div>
                </div>
            </div>
        </BasicLayout>
    )
}

export default RefundPolicyPage