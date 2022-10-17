import React,{useEffect} from 'react'
import { Home,FruitSection,MenuSection,Footer } from '../../components'
import {useContext} from 'react'
import GlobalContext from '../../context/globalcontext'
import { GetAllProducts } from '../../collections/product'
import About from '../About'


function MainComponent () {
  const {AllProducts}=useContext(GlobalContext)
  useEffect(()=>{
    GetAllProducts(AllProducts)
  },[])
  return (
    <div className='flex flex-col gap-5'>
      <Home />
      <FruitSection />
      <MenuSection />
      <About/>
    </div>
  )
}

export default MainComponent
