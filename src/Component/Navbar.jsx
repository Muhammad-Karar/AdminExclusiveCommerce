import React from 'react'
import p2 from '../assets/p2.jpg'
// import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
    return (
        <nav className='flex md:flex-row justify-between bg-red-500 px-5 py-2 ring-1 ring-slate-900/5 fix'>
            <div className='uppercase font-bold text-white bg-stone-800 rounded-md px-3 py-3 mt-1 h-12 text-sm font-medium'>Admin Exclusive Commerce</div>

            <div className='flex items-center'>
                <div><img src={p2} alt="" className='h-14 w-14 rounded-full' /></div>
                {/* <ChevronDownIcon class="h-6 w-6 text-gray-500" /> */}
            </div>

        </nav>

    )
}
