import React from 'react'
import { TbCurrencyTaka } from "react-icons/tb";
import { Divider } from '@mui/material'
import SummeryWidget from '@/components/summeryWidget/SummeryWidget';

const DashboardPage = () => {
  return (
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



  )
}

export default DashboardPage