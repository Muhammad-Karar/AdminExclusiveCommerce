import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='py-7 flex flex-col sm:flex-row justify-center gap-x-1 gap-y-5 w-full bg-stone-800 sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen
    lg:justify-start lg:pl-6'>

      <Link to={'/addProduct'}>
        <button className='flexCenter gap-2 rounded-md bg-red-500 h-14 w-44 medium-16'>
            <span className='uppercase font-bold text-black px-3 py-3 mt-1 text-sm font-medium'>Add Product</span>
        </button>
      </Link>
      <Link to={'/addBestSelling'}>
        <button className='flexCenter gap-2 rounded-md bg-red-500 h-14 w-44 medium-16'>
            <span className='uppercase font-bold text-black py-3 mt-1 text-sm font-medium'>Add Best Selling Product</span>
        </button>
      </Link>
      <Link to={'/addFlashSale'}>
        <button className='flexCenter gap-2 rounded-md bg-red-500 h-14 w-44 medium-16'>
            <span className='uppercase font-bold text-black py-3 mt-1 text-sm font-medium'>Add Flash Sale Product</span>
        </button>
      </Link>
      <Link to={'/addNewArrival'}>
        <button className='flexCenter gap-2 rounded-md bg-red-500 h-14 w-44 medium-16'>
            <span className='uppercase font-bold text-black py-3 mt-1 text-sm font-medium'>Add New Arrival Product</span>
        </button>
      </Link>
    </div>
  )
}
