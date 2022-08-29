import React from 'react'
import { RowContainer } from '../../components'
import { motion } from 'framer-motion'
import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md'

function FruitSection () {
  return (
    <section className='w-full mt-6'>
      <div className='flex flex-row gap-3 justify-between py-1'>
        <p className='w-max text-headingColor text-lg relative font-sans font-bold before:absolute before:rounded-lg  before:bottom-0  before:w-20  before:h-1 before:bg-orange-400 '>
          Our Health & Fresh Fruits
        </p>
        <div className='hidden md:flex flex-row gap-3 '>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className='py-2 px-2 bg-gradient-to-br from-orange-500 to-orange-300   hover:cursor-pointer'
          >
            <MdOutlineArrowLeft className='font-bold text-lg text-white hover:bg-orange-400' />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className='py-2 px-2 bg-gradient-to-br from-orange-500 to-orange-300 hover:cursor-pointer'
          >
            <MdOutlineArrowRight className='font-bold text-lg text-white hover:bg-orange-400' />
          </motion.div>
        </div>
      </div>
      <RowContainer />
    </section>
  )
}

export default FruitSection
