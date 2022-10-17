import React from 'react'
import bikedelivery from '../../assets/bikedelivery.jpg'
import { AiFillFacebook, AiFillInstagram, AiFillSkype } from 'react-icons/ai'
function Footer () {
  return (
    <div className='w-screen  px-5 py-6  flex flex-row items-center justify-center md:justify-between gap-5 bg-orange-500'>
      <p className=''>
        <span className='font-semibold text-lg text-gray-500'>2017</span>{' '}
        <span className='text-md font-serif font-bold text-white leading-4'>
          FOODYZ
        </span>{' '}
      </p>

      <div className='flex flex-row gap-4 '>
        <div className='bg-orange-300 rounded-lg w-5 h-5 flex items-center justify-center hover:bg-orange-400'>
          <AiFillInstagram className='text-md' />
        </div>
        <div className='bg-orange-300 rounded-lg w-5 h-5 flex items-center justify-center hover: bg - orange - 400'>
          <AiFillSkype className='text-md' />
        </div>

        <div className='bg-orange-300 rounded-lg w-5 h-5 flex items-center justify-center hover: bg - orange - 400'>
          <AiFillFacebook className='text-md' />
        </div>
      </div>
    </div>
  )
}

export default Footer
