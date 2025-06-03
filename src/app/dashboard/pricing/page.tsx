'use client'

import DashboardLayout from '@/layouts/DashboardLayout/Layout'
import { RiCheckLine, RiErrorWarningLine, RiLoader4Line } from '@remixicon/react'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import axios from 'axios';
import Script from 'next/script';
import { RazorpayOptions, RazorpayPaymentFailedResponse, RazorpayResponse } from '@/interfaces/Razorpay';
import { authVerify } from '@/utils/client/authHelper';
import { useRouter } from 'next/navigation';
import { validateUserSubscription, ValidUserSubscription } from '@/utils/client/subscriptionsHelper';

const plans = {
    monthly: 199,
    yearly: 1999,
}

export interface PurchasePlanEntries {
    plan: string,
    amount: number,
    userId: string,
}

export interface AfterSuccessRequestData {
    userId: string,
    orderId: string,
}

const Pricing = () => {

    const [selectedPlan, setSelectedPlan] = useState<string>("monthly");
    const [showPlanPopup, setShowPlanPopup] = useState<boolean>(false);
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const [userSubscription, setUserSubscription] = useState<ValidUserSubscription | null | "loading">("loading");

    const router = useRouter();

    useEffect(() => {
        validateUserSubscription()
            .then((subscription) => {
                setUserSubscription(subscription);
            })
    }, [])

    async function initiatePurchase() {
        setInProgress(true);

        let session;

        try {
            session = await authVerify();
        } catch (err) {
            if (err) {
                setInProgress(false);
                setError("User not authenticated!")
                return;
            }
        }

        if (!session || !session.user) {
            setInProgress(false);
            setError("User not found");
            return;
        }

        const requestData: PurchasePlanEntries = {
            plan: selectedPlan,
            amount: plans[selectedPlan as keyof typeof plans],
            userId: session.user.id,
        }

        try {
            const response = await axios.post('/api/razorpay/purchase-plan/create-order', requestData);
            const order = response.data.order;

            if (!order?.id) {
                setError("Order id not found!");
                setInProgress(false);
                return;
            }

            const options: RazorpayOptions = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                name: "LegallYours",
                description: "Chatbot for Lawyers...",
                order_id: order.id,
                handler: async (response: RazorpayResponse) => {

                    try {
                        session = await authVerify();

                        const requestData: AfterSuccessRequestData = {
                            userId: session.user?.id || "",
                            orderId: response.razorpay_order_id,
                        }

                        await axios.post('/api/razorpay/purchase-plan/update-to-success', requestData)
                        router.push('/dashboard/payments/success-page');
                    } catch (err) {
                        if (typeof err === "string") {
                            setError(err);
                        } else {
                            setError("Something went wrong!");
                        }
                    }
                },
                modal: {
                    ondismiss: () => setInProgress(false)
                },
                prefill: {
                    name: session.user.firstName || "No name",
                    email: session.user.email,
                },
                theme: {
                    color: "#3399cc",
                },
            };

            if (!window.Razorpay) {
                setError("Something went wrong!");
                setInProgress(false);
                return;
            }

            const razorpay = new window.Razorpay(options);

            // Handle payment failure
            razorpay.on('payment.failed', function (response: RazorpayPaymentFailedResponse) {
                setError(`Payment failed: ${response.description || response.code || "Something went wrong!"}`);
            });


            // Initiate Razorpay model popup
            razorpay.open();

        } catch (err) {
            setInProgress(false);
            console.log(err);
            setError("Something went wrong!");
        }
    }

    return (
        <DashboardLayout
            pageTitle='Pricing'
        >
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
            <div
                className='bg-white/5 py-4 px-5 max-w-[600px] rounded-md space-y-3'
            >
                <p
                    className='text-xl font-bold'
                >&#x20B9; {plans[selectedPlan as keyof typeof plans]}</p>

                <h2
                    className='text-xl font-semibold'
                >Activate PRO</h2>

                <p
                    className='opacity-70'
                >Choose the perfect plan for your legal needs. Get unlimited AI-powered legal assistance with flexible subscription options. Activate now!</p>

                {
                    userSubscription && userSubscription !== "loading" &&
                    <div
                        className='py-2 px-4 bg-green-500/5 text-green-500 rounded-md'
                    >
                        <p className='m-0'>You already have {userSubscription.daysLeft} Plan active, but you can extend the plan by purchase again.</p>
                    </div>
                }

                <div
                    className='relative flex items-center gap-3'
                >
                    <button
                        className='flex capitalize items-center gap-3 bg-white text-secodary-color py-2 px-4 rounded-md'
                        onClick={() => setShowPlanPopup(prev => !prev)}
                    >
                        <RiCheckLine
                            size={20}
                        />
                        {selectedPlan}
                    </button>

                    {/* Plan popup */
                        showPlanPopup &&
                        <motion.div
                            className='absolute top-0 left-0 bg-secodary-color p-2 rounded-md'
                            initial={{
                                scale: 0,
                            }}
                            animate={{
                                scale: 1,
                            }}
                        >
                            <div
                                className='flex flex-col gap-2'
                            >
                                {
                                    Object.keys(plans).map((plan, index) => (
                                        <button
                                            key={index}
                                            className='capitalize py-2 px-6 hover:bg-white/5 rounded-md'
                                            onClick={() => {
                                                setSelectedPlan(plan);
                                                setShowPlanPopup(prev => !prev)
                                            }}
                                        >
                                            {plan}
                                        </button>
                                    ))
                                }
                            </div>
                        </motion.div>
                    }

                    <button
                        className='flex gap-2 items-center border py-2 px-4 rounded-md disabled:opacity-70'
                        onClick={initiatePurchase}
                        disabled={inProgress}
                    >
                        {
                            inProgress &&
                            <RiLoader4Line
                                size={20}
                                className='animate-spin'
                            />
                        }
                        {inProgress ? "Loading..." : "Purchase"}
                    </button>

                </div>

                {
                    error &&
                    <motion.div
                        initial={{
                            y: -100,
                        }}
                        animate={{
                            y: 0,
                        }}
                    >
                        <div
                            className='w-full py-3 px-5 flex items-center gap-3 bg-red-600/10 text-red-500 rounded-md'
                        >
                            <RiErrorWarningLine
                                size={20}
                            />
                            <p
                                className='m-0'
                            >{error}</p>
                        </div>
                    </motion.div>
                }
            </div>
        </DashboardLayout>
    )
}

export default Pricing