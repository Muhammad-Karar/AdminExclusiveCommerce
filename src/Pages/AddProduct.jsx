import React from 'react'
import upload from '../assets/upload.jpg'
import { Disclosure } from '@headlessui/react'

export default function AddProduct() {
  return (

    <div className='p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-2'>
      <div className='mb-3'>
        <h4 className='font-bold pb-2'>Product Title</h4>
        <input type="text" name='pTitle' placeholder='Type here.....' className='bg-slate-200 outline-none max-w-80 w-full py-3 px-4 rounded-md' />
      </div>
      <div className='mb-3'>
        <h4 className='font-bold pb-2'>Product Price</h4>
        <input type="text" name='pPrice' placeholder='Type here.....' className='bg-slate-200 outline-none max-w-80 w-full py-3 px-4 rounded-md' />
      </div>
      <div className='mb-3'>
        <h4 className='font-bold pb-2'>No of products in stock</h4>
        <input type="number" name='ptitle' className='bg-slate-200 outline-none max-w-80 w-full py-3 px-4 rounded-md' />
      </div>
      <div className='mb-3'>
        <h4 className='font-bold pb-2'>Product Title</h4>
        <input type="text" name='ptitle' placeholder='Type here.....' className='bg-slate-200 outline-none max-w-80 w-full py-3 px-4 rounded-md' />
      </div>
      <div className='mb-3'>
        <label htmlFor="upload-file">
          <img src={upload} alt="" className='w-20 rounded-sm inline-block border-2 border-black rounded-lg' />
        </label>
        <input type="file" name='pImage' id='upload-file' hidden className='bg-slate-200 max-w-80 w-full py-3 px-4' />
      </div>
      <button className='pointer-events-auto ml-8 rounded-md bg-slate-950 px-7 py-2 
      text-[0.8125rem] font-semibold leading-5 text-white hover:bg-slate-600'>Add Product</button>
    </div>

  )
}
