import DashboardLayout from '@/layouts/DashboardLayout/Layout'
import { RiToggleLine } from '@remixicon/react'
import React from 'react'

const Pricing = () => {
  return (
    <DashboardLayout
        pageTitle='Pricing'
    >
        <div
            className='bg-white/5 py-4 px-5 max-w-[600px] rounded-md space-y-3'
        >
            <p
                className='text-xl font-bold'
            >$ 199</p>
            
            <h2
                className='text-xl font-semibold'
            >Activate PRO</h2>

            <p
                className='opacity-70'
            >Choose the perfect plan for your legal needs. Get unlimited AI-powered legal assistance with flexible subscription options. Activate now!</p>
        
            <button
                className='flex gap-2 items-center'
            >
                <RiToggleLine
                    size={30}
                />
                Activate
            </button>
        </div>
    </DashboardLayout>
  )
}

export default Pricing