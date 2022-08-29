import React from 'react'
import { Home,FruitSection } from '../../components'

function MainComponent () {
  return (
    <div className='flex flex-col gap-5'>
      <Home />
      <FruitSection />
    </div>
  )
}

export default MainComponent
