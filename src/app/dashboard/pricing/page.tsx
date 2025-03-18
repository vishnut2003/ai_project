'use client'

import DashboardLayout from '@/layouts/DashboardLayout/Layout'
import { RiCheckLine, RiLoader4Line, RiToggleLine } from '@remixicon/react'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import axios from 'axios';
import Script from 'next/script';
import { RazorpayOptions, RazorpayResponse } from '@/interfaces/Razorpay';
import { authVerify } from '@/utils/client/authHelper';
import { useRouter } from 'next/navigation';

const plans = {
    monthly: 199,
    yearly: 1999,
}

export interface PurchasePlanEntries {
    plan: string,
    amount: number,
}

const Pricing = () => {

    const [selectedPlan, setSelectedPlan] = useState<string>("monthly");
    const [showPlanPopup, setShowPlanPopup] = useState<boolean>(false);
    const [inProgress, setInProgress] = useState<boolean>(false);

    const router = useRouter();

    async function initiatePurchase() {
        setInProgress(true);

        let session;

        try {
            session = await authVerify();
        } catch (err) {
            if (err) {
                setInProgress(false);
                console.log("User not authenticated!");
                return;
            }
        }

        if (!session || !session.user) {
            setInProgress(false);
            console.log("User not found");
            return;
        }

        const requestData: PurchasePlanEntries = {
            plan: selectedPlan,
            amount: plans[selectedPlan as keyof typeof plans],
        }

        try {
            const response = await axios.post('/api/razorpay/purchase-plan/create-order', requestData);
            const order = response.data.order;

            if (!order?.id) {
                console.log("Order id not found!");
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
                    router.push('/dashboard/payments/success-page');
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
                console.log("Something went wrong!");
                setInProgress(false);
                return;
            }

            const razorpay = new window.Razorpay(options);
            razorpay.open();

        } catch (err) {
            setInProgress(false);
            console.log(err);
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
                >$ {plans[selectedPlan as keyof typeof plans]}</p>

                <h2
                    className='text-xl font-semibold'
                >Activate PRO</h2>

                <p
                    className='opacity-70'
                >Choose the perfect plan for your legal needs. Get unlimited AI-powered legal assistance with flexible subscription options. Activate now!</p>

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
            </div>
        </DashboardLayout>
    )
}

export default Pricing