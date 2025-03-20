import DashboardLayout from '@/layouts/DashboardLayout/Layout'
import React from 'react'

const PaymentHistory = () => {
  return (
    <DashboardLayout
        pageTitle='Payment History'
    >
        <div>

            {/* filter section */}
            <div>
                
                {/* Search order id */}
                <form
                  className=' w-max flex justify-between gap-3'
                >
                  <input
                    type="text"
                    className='py-2 px-4 rounded-md bg-white/5 outline-none'
                  />
                  <button>Search</button>
                </form>
            </div>
        </div>
    </DashboardLayout>
  )
}

export default PaymentHistory