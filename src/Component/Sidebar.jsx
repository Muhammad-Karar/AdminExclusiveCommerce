import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='py-7 flex justify-center gap-x-1 gap-y-5 w-full bg-gray-900 sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen
    lg:justify-start lg:pl-6'>

      <Link to={'/addProduct'}>
        <button className='flexCenter gap-2 rounded-md bg-gray-800 h-14 w-44 medium-16'>
            <span className='uppercase bold-22 text-white px-3 py-3 mt-1 text-md font-medium'>Add Product</span>
        </button>
      </Link>
      <Link to={'/addBestSelling'}>
        <button className='flexCenter gap-2 rounded-md bg-gray-800 h-14 w-44 medium-16'>
            <span className='uppercase bold-22 text-white py-3 mt-1 text-md font-medium'>Add Best Selling Product</span>
        </button>
      </Link>
      <Link to={'/addFlashSale'}>
        <button className='flexCenter gap-2 rounded-md bg-gray-800 h-14 w-44 medium-16'>
            <span className='uppercase bold-22 text-white py-3 mt-1 text-md font-medium'>Add Flash Sale Product</span>
        </button>
      </Link>
      <Link to={'/addNewArrival'}>
        <button className='flexCenter gap-2 rounded-md bg-gray-800 h-14 w-44 medium-16'>
            <span className='uppercase bold-22 text-white py-3 mt-1 text-md font-medium'>Add New Arrival Product</span>
        </button>
      </Link>
    </div>
  )
}
