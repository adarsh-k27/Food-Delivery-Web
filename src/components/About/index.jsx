import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'

function About () {
  return (
    <section
      className='w-full h-screen sm:py-5 md:py-8  flex flex-col gap-5 '
      id='About'
    >
      <p className='w-max text-headingColor text-lg relative font-sans font-bold py-1 before:absolute before:rounded-lg  before:bottom-0  before:w-10  before:h-1 before:bg-orange-400 '>
        About us
      </p>
      <div className='flex flex-col w-full  h-full  gap-3 bg-gradient-to-br bg-orange-100 rounded-md px-3 shadow-md shadow-slate-400'>
        <ImQuotesLeft className='text-orange-400 font-bold text-7xl' />
        <div className=''>
          <p className='text-md md:text-3xl font-serif tracking-normal capitalize text-slate-800 leading-10 md:leading-[3rem] '>
            Our mission is to elevate the quality of life for the urban consumer
            with unparalleled convenience. Convenience is what makes us tick.
            It's what makes us get out of bed and say, "Let's do this.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
