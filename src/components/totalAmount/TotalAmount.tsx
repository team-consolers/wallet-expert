import { Divider } from '@mui/material'
import React from 'react'

const TotalAmount = () => {
  return (
    <div className="hover:shadow-2xl rounded-md border border-gray-300 p-8 w-full lg:w-1/2">
       <h2 className="text-xl font-bold mb-2">Balance Summary</h2>
        <div className='flex justify-between'>
          <p className="font-semibold text-gray-600" >Bank Account</p> <p className='text-green-500'> ৳ 00.00</p>
        </div>
        <div className='flex justify-between'>
          <p className="font-semibold text-gray-600">Wallet: </p> <p className='text-green-500'> -৳ 00.00</p>
        </div>
        <Divider/>
        <div className='flex justify-between mt-1'>
          <p className="font-semibold text-gray-600 ">Total Amount:</p> <p className='text-green-500'> -৳ 00.00</p>
        </div>
      </div>
  )
}

export default TotalAmount