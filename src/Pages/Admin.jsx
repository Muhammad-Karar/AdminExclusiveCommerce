import React from 'react'
import Sidebar from '../Component/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from './AddProduct'
import AddNewArrival from './AddNewArrival'
import AddFlashSale from './AddFlashSale'
import AddBestSelling from './AddBestSelling'

export default function Admin() {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/addBestSelling' element={<AddBestSelling/>}/>
        <Route path='/addFlashSale' element={<AddFlashSale/>}/>
        <Route path='/addNewArrival' element={<AddNewArrival/>}/>
      </Routes>
    </div>
  )
}
