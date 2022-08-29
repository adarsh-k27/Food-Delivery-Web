import React from 'react'
import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { MdFastfood } from 'react-icons/md'
import GlobalContext from '../../context/globalcontext'
import {RowContainer} from '../../components'
import {motion } from 'framer-motion'

function MenuSection () {
  const { catogery,products } = useContext(GlobalContext).state
  const [activeState, setActive] = useState(false)

  useEffect(()=>{
    setActive(catogery && catogery[0]?._id)
  },[catogery])
  
  return (
    <div className='w-full my-6 '>
      <div
       className='flex flex-col gap-3 justify-center items-center py-1'>
        <p className='w-max text-headingColor text-lg relative font-sans font-bold before:absolute before:rounded-lg  before:bottom-0  before:w-20 before:left-5  before:h-1 before:bg-orange-400 py-1'>
          Our Hot Dishes
        </p>
        <div className='flex flex-row justify-start lg:justify-center  w-full  gap-6 py-6 overflow-x-scroll'>
          {catogery &&
            catogery.map(cat => (
              <motion.div
                whileTap={{scale:.55}}
                key={cat._id}
                onClick={() => setActive(cat._id)}
                className={`group w-28 px-12 md:px-3 h-24 bg-gray-200 ${activeState == cat._id && "bg-red-600"} shadow-xl rounded-md cursor-pointer drop-shadow-lg flex flex-col gap-3 items-center justify-center hover:bg-red-600 duration-150 transition-all ease-in-out `}
              >
                <div className={`w-10 h-8 ${activeState == cat._id && "bg-white"} bg-red-500 flex rounded-full justify-center items-center group-hover:bg-white`}>
                  <MdFastfood className='text-lg' />
                </div>
                <div className={` font-serif text-[.77rem] md:text-sm ${activeState == cat._id && "text-white"} group-hover:text-white`}>
                  <span>{cat.name}</span>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
      <div className='w-full'>
        <RowContainer flag={false} data={activeState && products.filter((item)=>item.catogery._id == activeState)} />
      </div>
    </div>
  )
}

export default MenuSection
