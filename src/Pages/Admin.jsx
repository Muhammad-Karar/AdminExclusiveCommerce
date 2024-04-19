import React from 'react'
import Sidebar from '../Component/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from './AddProduct'
import AddNewArrival from './AddNewArrival'
import AddFlashSale from './AddFlashSale'
import AddBestSelling from './AddBestSelling'
import ProductList from './ProductList'

export default function Admin() {
  return (
    <div className='lg:flex'>  
      <Sidebar/>
      <Routes>
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/addBestSelling' element={<AddBestSelling/>}/>
        <Route path='/addFlashSale' element={<AddFlashSale/>}/>
        <Route path='/addNewArrival' element={<AddNewArrival/>}/>
        <Route path='/productList' element={<ProductList/>}/>
      </Routes>
    </div>
  )
}
