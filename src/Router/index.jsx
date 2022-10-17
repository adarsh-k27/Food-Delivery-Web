import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AddCartProduct } from '../collections/product'
import { CreateContainer, MainContainer, CreateCatogery } from '../components'
function RouterWrapper () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<MainContainer />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterWrapper
