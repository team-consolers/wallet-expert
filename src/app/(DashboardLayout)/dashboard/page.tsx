import React from 'react'
import { TbCurrencyTaka } from "react-icons/tb";
import { Divider } from '@mui/material'
import SummeryWidget from '@/components/summeryWidget/SummeryWidget';
import LineChartUi from '@/components/lineChart/LineCharUi'
import BarChartUi from '@/components/barcharts/BarChartUi';
import TotalAmount from '@/components/totalAmount/TotalAmount';
const DashboardPage = () => {
  return (
   <div>
     <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap justify-between gap-3 md:gap-2 lg:gap-2 mt-3 md:mt-0">
      {/* balance summary card */}
      <div className="hover:shadow-2xl rounded-md border border-gray-300 p-8 w-full lg:w-4/12">
       <h2 className="text-xl font-bold mb-2">Summary</h2>
        <div className='flex justify-between'>
          <p className="font-semibold text-gray-600" >Balance</p> <p className='text-green-500'> ৳ 00.00</p>
        </div>
        <div className='flex justify-between'>
          <p className="font-semibold text-gray-600">Credit Cards: </p> <p className='text-red-500'> -৳ 00.00</p>
        </div>
        <Divider/>
        <div className='flex justify-between mt-1'>
          <p className="font-semibold text-gray-600 ">Total Remanings:</p> <p className='text-green-500'> -৳ 00.00</p>
        </div>
      </div>
      <SummeryWidget/>
      <SummeryWidget/>
    </div>
    <LineChartUi/>
    <h3 className="font-bold text-gray-600 mt-12 mb-2 ">Last 7Days Income and Expenses</h3>
   <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row gap-5 lg:gap-12 mb-12 h-72 '>
   <BarChartUi/>
    <TotalAmount/>
   </div>
   </div>

  )
}

export default DashboardPage