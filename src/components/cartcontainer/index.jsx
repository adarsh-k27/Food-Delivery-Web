import React from 'react'
import {
  AiOutlineClear,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle
} from 'react-icons/ai'
import image from '../../assets/nodata.png'
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
import { useContext } from 'react'
import GlobalContext from '../../context/globalcontext'
import { ChangeCartQty } from '../../collections/product'
import { useEffect } from 'react'
import { useState } from 'react'
function CartContainer ({ isOpen, onClose }) {
  const btnRef = 0
  let TotalPrice
  const [Total, setTotal] = useState(0)
  const { cart, authentication, user } = useContext(GlobalContext).state
  const { ChangeQty, ClearCart } = useContext(GlobalContext)
  const QuantityChange = (change, qty, product, index) => {
    ChangeCartQty(
      { user: user?._id, qty, qtychange: change, product },
      index,
      ChangeQty
    )
  }
  useEffect(() => {
    TotalPrice = cart.reduce((acc, current) => {
      return acc + current.product.price * current.quantity
    }, 0)
    setTotal(TotalPrice)
  }, [cart])
  console.log('total', TotalPrice)
  const cartClear = () => {
    ClearCart()
  }
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <div className='flex items-center justify-start gap-6'>
            <p className='text-lg font-bold font-serief'>Cart</p>
            <button className='flex gap-2 items-center' onClick={cartClear}>
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
              {authentication && cart.length > 0 ? (
                cart.map((item, index) => (
                  <div className='w-full h-18 bg-transparent  py-2 rounded-md px-2  flex gap-2 items-center justify-between bg-gray-700 shadow-sm shadow-slate-400'>
                    <img
                      src={item.product.img}
                      alt=''
                      className='w-10 h-8 object-fit '
                    />
                    <div className='flex flex-col gap-3 text-white font-semibold'>
                      <p>{item.product.name}</p>
                      <p>{item.product.price}</p>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                      <div
                        onClick={() =>
                          QuantityChange(
                            -1,
                            item.quantity,
                            item.product._id,
                            index
                          )
                        }
                        whileTap={{ scale: 0.21 }}
                        className='px-1 py-1 hover:cursor-pointer'
                      >
                        <AiOutlineMinusCircle className='text-lg font-bold text-yellow-200' />
                      </div>
                      <span className='font-semibold text-md text-white'>
                        {item.quantity}
                      </span>
                      <div
                        onClick={() =>
                          QuantityChange(
                            1,
                            item.quantity,
                            item.product._id,
                            index
                          )
                        }
                        whileTap={{ scale: 0.21 }}
                        className='px-1 py-1 hover:cursor-pointer'
                      >
                        <AiOutlinePlusCircle className='text-lg font-bold text-yellow-200' />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className='w-full flex items-center justify-center'>
                  <div className=''>
                    <img src={image} className='w-full h-150'></img>
                    <p className='text-yellow-300 font-semibold font-serif text-lg'>
                      No Product Added Yet
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/* total */}
            <div className='w-full h-full rounded-sm bg-slate-800 flex flex-col gap-2'>
              <div className='flex justify-between px-2 py-1'>
                <p className='font-semibold text-gray-400'>Sub Total</p>
                <p className='font-semibold text-gray-400'>{Total}</p>
              </div>
              <div className='flex justify-between px-2 py-1'>
                <p className='font-semibold text-gray-400'>Delivery</p>
                <p className='font-semibold text-gray-400'>
                  {Total !== 0 && 50}
                </p>
              </div>
              <hr className='text-gray-800' />
              <div className='flex justify-between px-2 py-1'>
                <p className='font-semibold text-gray-400'>Total</p>
                <p className='font-semibold text-gray-400'>
                  {Total !== 0 && Total + 50}
                </p>
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
