'use client';

import DashboardLayout from '@/layouts/DashboardLayout/Layout'
import { PurchaseOrdersModelInterface } from '@/models/PurchaseOrdersModel';
import { GetPurchaseOrdersResponseInterface } from '@/utils/server/purchasePlanHelper';
import { RiArrowLeftSLine, RiArrowRightSLine, RiCheckLine, RiLoader4Line } from '@remixicon/react';
import axios, { AxiosError } from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

export interface PaymentHistoryFilterRequestDataInterface {
  status: string | null,
  orderId: string | null,
  pageNo: number,
}

const PaymentHistory = () => {

  const [showStatusFilterDropdown, setShowStatusFilterDropdown] = useState<boolean>(false);
  const [statusFilterValue, setStatusFilterValue] = useState<string>('all');

  const [orderIdInput, setOrderIdInput] = useState<string>('');

  const [inProgress, setInProgress] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tableData, setTableData] = useState<PurchaseOrdersModelInterface[]>([])
  const [pageNo, setPageNo] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleFetchData = useCallback(fetchTableData, [currentPage, orderIdInput, statusFilterValue])

  useEffect(() => {
    handleFetchData();
  }, [statusFilterValue, currentPage, handleFetchData]);

  async function fetchTableData() {
    try {
      setInProgress(true);

      const requestData: PaymentHistoryFilterRequestDataInterface = {
        status: statusFilterValue === "all" ? null : statusFilterValue,
        orderId: orderIdInput || null,
        pageNo: currentPage,
      }
      const response = await axios.post('/api/razorpay/purchase-plan/get-orders', requestData);
      const data = response.data as GetPurchaseOrdersResponseInterface;
      setTableData(data.orders);
      const decimalPageNo = data.count / 10;
      setPageNo(Math.ceil(decimalPageNo));

      setInProgress(false);
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.data) {
          setError(err.response.data);
        } else {
          setError(err.message);
        }
      } else {
        if (typeof err === "string") {
          setError(err)
        } else {
          setError("Something went wrong!");
        }
      }
    }
  }

  return (
    <DashboardLayout
      pageTitle='Payment History'
    >
      <div
        className='space-y-5'
      >

        {/* filter section */}
        <div
          className='flex w-full justify-between items-center'
        >

          {/* Search order id */}
          <form
            className=' w-max flex justify-between gap-3'
            onSubmit={(e) => {
              e.preventDefault();
              fetchTableData();
            }}
          >
            <input
              type="text"
              className='py-2 px-4 rounded-md bg-white/5 outline-none'
              placeholder='Enter Order Id'
              value={orderIdInput}
              onChange={(event) => setOrderIdInput(event.target.value)}
            />
            <button
              className='py-2 px-4 bg-white rounded-md text-black text-sm font-medium'
            >Search</button>
          </form>

          {/* Status filter */}
          <div>
            <div
              className='relative'
            >
              <button
                className='py-2 px-4 bg-white text-black rounded-md text-sm font-medium flex items-center gap-2'
                onClick={() => setShowStatusFilterDropdown(prev => !prev)}
              >
                <RiCheckLine
                  size={20}
                />
                {statusFilterValue}
              </button>

              {/* Dropdown items */}
              {
                showStatusFilterDropdown &&
                <div
                  className='absolute top-0 right-0 bg-secodary-color rounded-md overflow-hidden z-30'
                >
                  {['all', "created", 'attempted', 'paid'].map((items, index) => (
                    <button
                      className='py-3 px-5 hover:bg-white/5 w-full text-left'
                      key={index}
                      onClick={() => {
                        setStatusFilterValue(items);
                        setShowStatusFilterDropdown(prev => !prev);
                      }}
                    >
                      {items}
                    </button>
                  ))}
                </div>
              }
            </div>
          </div>
        </div>

        {/* Table */}
        <div
          className='w-full bg-white/5 rounded-md min-h-[400px] relative'
        >
          <table
            className='w-full text-left overflow-hidden'
          >
            <thead
              className='bg-white/5'
            >
              <tr>
                <th
                  className='py-4 px-6'
                >
                  Date
                </th>
                <th
                  className='py-4 px-6'
                >
                  Plan
                </th>
                <th
                  className='py-4 px-6'
                >
                  Amount
                </th>
                <th
                  className='py-4 px-6'
                >
                  Amount Paid
                </th>
                <th
                  className='py-4 px-6'
                >
                  Currency
                </th>
                <th
                  className='py-4 px-6'
                >
                  Order Id
                </th>
                <th
                  className='py-4 px-6'
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {
                error ?
                  <tr>
                    <td>{error}</td>
                  </tr>
                  : inProgress ?
                    <tr>
                      <td className="py-5 px-6 space-x-5">
                        <p className='absolute top-0 left-0 w-full h-full flex justify-center items-center gap-3'>
                          <RiLoader4Line
                            size={20}
                            className='animate-spin inline-flex'
                          />
                          Loading
                        </p>
                      </td>
                    </tr>
                    : tableData.length > 0 ?
                      tableData.map((data, index) => (
                        <tr
                          key={index}
                          className='border-b border-white/5 text-left'
                        >
                          <td
                            className='py-4 px-6'
                          >
                            {data.createdAt.split('T')[0].split('-').join('/')}
                          </td>
                          <td
                            className='py-4 px-6 capitalize'
                          >
                            {data.plan}
                          </td>
                          <td
                            className='py-4 px-6'
                          >
                            {parseInt(data.amount.toString()) / 100}
                          </td>
                          <td
                            className='py-4 px-6'
                          >
                            {parseInt(data.paid.toString()) / 100}
                          </td>
                          <td
                            className='py-4 px-6'
                          >
                            {data.currency}
                          </td>
                          <td
                            className='py-4 px-6'
                          >
                            {data.orderId}
                          </td>
                          <td
                            className='py-4 px-6 capitalize'
                          >
                            {data.status}
                          </td>
                        </tr>
                      ))
                      : <tr>
                        <td>
                          <p className='absolute top-0 left-0 w-full h-full flex justify-center items-center gap-3'>
                            Nothing found!
                          </p>
                        </td>
                      </tr>
              }
            </tbody>
          </table>
        </div>

        {/* Paginations */}
        <div
          className='flex justify-center'
        >
          <div
            className='flex gap-2 items-center'
          >
            <button
              className='bg-white text-secodary-color py-2 px-4 rounded-md flex items-center gap-1 disabled:opacity-10'
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage(prev => --prev)}
            >
              <RiArrowLeftSLine />
              Prev
            </button>

            <p
              className='text-lg py-2 px-4 bg-white/5 m-0 rounded-md'
            >{currentPage}/{pageNo}</p>

            <button
              className='bg-white text-secodary-color py-2 px-4 rounded-md flex items-center gap-1 disabled:opacity-50'
              disabled={pageNo === 0 || currentPage >= pageNo}
              onClick={() => setCurrentPage(prev => ++prev)}
            >
              Next
              <RiArrowRightSLine />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default PaymentHistory