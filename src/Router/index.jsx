import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AddCartProduct } from '../collections/product'
import { CreateContainer, MainContainer, CreateCatogery } from '../components'
import StripeContainer from '../components/StripeContainer'
function RouterWrapper () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<MainContainer />}></Route>
        {/* //<Route path='/check' element={<StripeContainer />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default RouterWrapper
