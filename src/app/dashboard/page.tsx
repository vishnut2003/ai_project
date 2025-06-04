import DashboardLayout from '@/layouts/DashboardLayout/Layout'
import React from 'react'
import dashboardColumnItems from './columnItems'
import Link from 'next/link'
import { RiArrowRightLongLine } from '@remixicon/react'

const Dashboard = () => {
  return (
    <DashboardLayout
      pageTitle='Dashboard'
    >
      <div>
        <div>
          {
            dashboardColumnItems.map((section, index) => (
              <div
                key={index}
                className='flex flex-col gap-8 md:gap-4'
              >
                <h2
                  className='text-xl font-semibold underline underline-offset-8'
                >{section.heading}</h2>
                <div>
                  <div
                    className='flex flex-col md:flex-row items-start gap-5'
                  >
                    {
                      section.items.map((column, index) => (
                        <div
                          key={index}
                          className='md:max-w-[300px] w-full flex flex-col justify-between md:h-[200px]'
                        >
                          <div
                            className='flex flex-col gap-2'
                          >
                            <column.icon
                              size={40}
                              className='p-2 bg-white/5 rounded-md'
                            />
                            <h3
                              className='text-base font-semibold'
                            >{column.title}</h3>
                            <p
                              className='text-sm font-light opacity-70'
                            >{column.description}</p>
                          </div>

                          <Link
                            className='py-2 px-4 bg-white text-secodary-color text-sm font-medium rounded-md w-full flex justify-between'
                            href={column.url}
                          >
                            {column.buttonText}
                            <RiArrowRightLongLine
                              size={20}
                            />
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard