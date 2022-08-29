import React,{useEffect, useRef} from 'react'
import image from '../../assets/bikedelivery.jpg'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { motion } from 'framer-motion'
function RowContainer ({ flag, data ,scrollDir}) {
  //console.log("datas",data);
  const Scroll=useRef()
  const ScrollLeft=()=>{
    Scroll.current.scrollLeft += scrollDir 
  }
  useEffect(()=>{
    if(scrollDir !== 0){
      ScrollLeft()
    }
  },[scrollDir])
  return (
    <div
    ref={Scroll}
      className={`w-full bg-orange-50 flex items-center scroll-smooth  gap-4 ${
        flag ? 'overflow-x-scroll' : 'overflow-x-auto'
      } px-2 md:px-5 `}
    >
      {data &&
        data.length > 0 &&
        data.map(fruit => (
          <div className='w-full  md:w-300 h-52 min-w-300 md:min-w-300  bg-gray-200 px-2 rounded-md my-12 backdrop-blur-lg hover:drop-shadow-lg'>
            <div
              whileTap={{ scale: 0.65 }}
              className='flex justify-between  items-center '
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={fruit.img}
                alt=''
                className='w-40  -mt-8 h-35 object-cover z-50'
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
                {fruit.name}
              </p>
              <p className='txt-sm font-semibold text-gray-500'>
                {fruit.calory}
              </p>
              <div className='flex gap-2 items-center justify-center'>
                <p className=''>
                  <span className='text-red-500 text-sm '>$</span>{' '}
                  <span className='text-lg font-semibold text-headingColor '>
                    {fruit.price}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default RowContainer
