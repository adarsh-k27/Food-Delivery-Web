import React from 'react'
import Logo from '../../assets/food-delivery-logo.jpg'
import user from '../../assets/user.png'
import { FaShoppingCart } from 'react-icons/fa'
import {motion} from 'framer-motion'
function Header () {
  return (
    <header className='fixed w-screen z-50 p-6 px-12 '>
      {/* We Want to Create Two Type Of Header */}
      {/* One For Large screen  */}
      <div className='hidden md:flex w-full items-center '>
        {/* logo section */}
        <div className='flex gap-3 items-center justify-center'>
          <img src={Logo} className='w-8 h-full ' alt='logo image' />
          <p className='text-headerColor text-md font-bold'>Foodyz</p>
        </div>
        {/* Link section */}

        <div className='flex gap-8 items-center ml-auto'>
          <ul className='flex  gap-8  '>
            <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>
              Home
            </li>
            <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>
              Menu
            </li>
            <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>
              About Us
            </li>
            <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>
              Services
            </li>
          </ul>
          <div className='flex'>
            <FaShoppingCart className='text-xl' />
          </div>
          <div className='flex'>
            <motion.img whileTap={{ scale: 1.1 }} src={user} className="w-10 min-w-10 h-10 min-h-10 " alt='user profile' />
          </div>
        </div>
      </div>

      {/* other for small screen mobiles */}
      <div className='flex md:hidden w-full bg-green-400 px-4'>header</div>
    </header>
  )
}

export default Header
