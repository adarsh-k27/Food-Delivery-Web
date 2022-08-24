import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {MainContainer} from '../components'
function RouterWrapper() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <MainContainer/> }>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default RouterWrapper