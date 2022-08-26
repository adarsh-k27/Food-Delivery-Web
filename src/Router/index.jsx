import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {CreateContainer, MainContainer} from '../components'
function RouterWrapper() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <CreateContainer/> }>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default RouterWrapper