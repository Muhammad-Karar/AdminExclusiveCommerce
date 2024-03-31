import React from 'react'
import p2 from '../assets/p2.jpg'
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    return (
        <nav className='max_padd_container flex justify-between bg-gray-900 px-11 py-2 ring-1 ring-slate-900/5 relative'>
            <div className='uppercase bold-22 text-white bg-gray-800 rounded-md px-3 py-3 mt-1 h-12 text-sm font-medium'>Admin Exclusive Commerce</div>

            <div className='flex items-center'>
                <div><img src={p2} alt="" className='h-14 w-14 rounded-full' /></div>
                <ChevronDownIcon className="h-6 w-6 text-white mr-2" />
            </div>

        </nav>

    )
}
