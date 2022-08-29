import React from 'react'
import {
  AiOutlineClear,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle
} from 'react-icons/ai'
import image from '../../assets/computer.png'
import { motion } from 'framer-motion'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'

function CartContainer ({ isOpen, onClose }) {
  const btnRef = 0
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <div className='flex items-center justify-start gap-6'>
            <p className='text-lg font-bold font-serief'>Cart</p>
            <button className='flex gap-2 items-center'>
              <span className='text-[.8rem]'>Clear </span>
              <span>
                <AiOutlineClear className='text-lg text-red-400' />
              </span>
            </button>
          </div>
        </DrawerHeader>

        <DrawerBody className='bg-gray-900'>
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex flex-col gap-2 overflow-y-scroll w-full h-52'>
              <div className='w-full h-18 bg-transparent  py-2 rounded-md px-2  flex gap-2 items-center justify-between bg-gray-700 shadow-sm shadow-slate-400'>
                <img src={image} alt='' className='w-10 h-8 object-fit ' />
                <div className='flex flex-col gap-3 text-white font-semibold'>
                  <p>icecream choclate</p>
                  <p>25</p>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                  <motion.div whileTap={{ scale: 0.21 }} className="hover:cursor-pointer">
                    <AiOutlineMinusCircle className='text-lg font-bold text-yellow-200' />
                  </motion.div>
                  <span className='font-semibold text-md text-white'>1</span>
                  <motion.div whileTap={{ scale: 0.21 }} className="hover:cursor-pointer">
                    <AiOutlinePlusCircle className='text-lg font-bold text-yellow-200' />
                  </motion.div>
                </div>
              </div>
            </div>
            {/* total */}
            <div className='w-full h-full rounded-sm bg-slate-800 flex flex-col gap-2'>
              <div className='flex justify-between px-2 py-1'>
                <p className='font-semibold text-gray-400'>Sub Total</p>
                <p className='font-semibold text-gray-400'>60</p>
              </div>
              <div className='flex justify-between px-2 py-1'>
                <p className='font-semibold text-gray-400'>Delivery</p>
                <p className='font-semibold text-gray-400'>25</p>
              </div>
              <hr className='text-gray-800' />
              <div className='flex justify-between px-2 py-1'>
                <p className='font-semibold text-gray-400'>Total</p>
                <p className='font-semibold text-gray-400'>90</p>
              </div>
              <div className='flex items-center justify-center w-full '>
                <button className='bg-orange-400 font-serif font-bold w-full rounded-md py-2'>
                  Check out
                </button>
              </div>
            </div>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default CartContainer
