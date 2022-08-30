import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../assets/food-delivery-logo.jpg'
import { CartContainer } from '../../components'
import userImg from '../../assets/user.png'
import { FaShoppingCart } from 'react-icons/fa'
import NotificationBadge from 'react-notification-badge'
import { Effect } from 'react-notification-badge'
import { AiOutlineLogout, AiOutlinePlus } from 'react-icons/ai'
import { motion } from 'framer-motion'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spinner,
  effect
} from '@chakra-ui/react'
import { UserSignIn } from '../../collections/user'
import { UseGlobalContext } from '../../context/contextprovider'
import GlobalContext from '../../context/globalcontext'
function Header () {
  const [open, setOpen] = useState(false)
  const [small, setSmall] = useState(false)
  const [Loading, setLoading] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const { authentication, user } = useContext(GlobalContext).state
  const { UserLogin, userLogOut } = useContext(GlobalContext)
  const [UserDetails, setUserDetails] = useState(null)
  const {cart}=useContext(GlobalContext).state
  console.log('auth', authentication)
  console.log('user', user)

  const Logout = () => {
    localStorage.clear()
    userLogOut()
    window.location.reload()
  }
  return (
    <div>
      <header className='fixed w-screen z-50 p-3 px-1  md:px-12 md:p-2 bg-header'>
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
            <div
              className='flex'
              onClick={() => {
                setOpenCart(true)
              }}
            >
              <NotificationBadge count={cart.length >0 && cart.length} effect={effect[1]} />
              <FaShoppingCart className='text-xl' />
            </div>
            <div
              className=''
              onClick={() => {
                setOpen(true)
              }}
            >
              <Menu>
                <MenuButton>
                  <motion.img
                    whileTap={{ scale: 1.3 }}
                    src={userImg}
                    className='w-10 min-w-10 h-10 min-h-10 '
                    alt='user profile'
                  />
                </MenuButton>
                <MenuList>
                  {authentication == true && user.admin && (
                    <MenuItem>
                      <div className='flex items-center justify-between gap-2'>
                        <div>Add Item</div>
                        <AiOutlinePlus />
                      </div>
                    </MenuItem>
                  )}
                  {authentication == true && user.email && (
                    <MenuItem onClick={Logout}>
                      <div className='flex items-center justify-between gap-2'>
                        <div>Logout</div>
                        <AiOutlineLogout />
                      </div>
                    </MenuItem>
                  )}

                  {authentication == false && (
                    <MenuItem>
                      <div id={`${!small && 'SignInDiv'}`}>Login</div>
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>

        {/* other for small screen mobiles */}
        <div className='flex md:hidden w-full  px-4 items-center justify-between'>
          <div className='flex gap-3 items-center justify-center'>
            <img src={Logo} className='w-8 h-full ' alt='logo image' />
            <p className='text-headerColor text-md font-bold'>Foodyz</p>
          </div>

          <div
            className=''
            onClick={() => {
              setOpen(true)
            }}
          >
            <Menu>
              <MenuButton>
                <motion.img
                  whileTap={{ scale: 1.1 }}
                  src={userImg}
                  className='w-10 min-w-10 h-10 min-h-10 '
                  alt='user profile'
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Add Item</MenuItem>
                <MenuItem>Home</MenuItem>
                <MenuItem>Menu</MenuItem>
                <MenuItem>About Us</MenuItem>
                <MenuItem>Service</MenuItem>
                <MenuItem>
                  <div id={`${small && 'SignInDiv'}`}></div>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </header>
      <CartContainer isOpen={openCart} onClose={setOpenCart} />
    </div>
  )
}

export default Header
