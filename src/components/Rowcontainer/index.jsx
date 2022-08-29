import React from 'react'
import image from '../../assets/bikedelivery.jpg'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { motion } from 'framer-motion'
function RowContainer ({ flag }) {
  return (
    <div
      className={`w-full bg-orange-50  ${
        flag ? 'overflow-x-scroll' : 'overflow-x-auto'
      } px-2 md:px-5 `}
    >
      <div className='w-full md:w-300 h-auto  bg-gray-200 px-2 rounded-md my-12 backdrop-blur-lg hover:drop-shadow-lg'>
        <div
          whileTap={{ scale: 0.65 }}
          className='flex justify-between  items-center '
        >
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={image}
            alt=''
            className='w-40 -mt-8 h-auto object-cover z-50'
          />
          <motion.div
            whileTap={{ scale: 0.65 }}
            className='bg-pink-600 hover:bg-pink-400 rounded-full px-2 py-2 z-50
            '
          >
            <AiOutlineShoppingCart className='text-white text-lg' />
          </motion.div>
        </div>
        <div className='w-full flex flex-col gap-1 items-end'>
          <p className='text-base text-headingColor font-semibold font-serif text-md md:text-md'>
            Choclate & Vanila
          </p>
          <p className='txt-sm font-semibold text-gray-500'>45 Calories</p>
          <div className='flex gap-2 items-center justify-center'>
            <p className=''>
              <span className='text-red-500 text-sm '>$</span>{' '}
              <span className='text-lg font-semibold text-headingColor '>
                550
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RowContainer
