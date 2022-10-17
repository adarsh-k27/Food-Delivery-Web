import Logo from '../assets/food-delivery-logo.jpg'
import { FaShoppingCart } from 'react-icons/fa'
import React, { useContext, useState } from 'react'
import { CartContainer } from '../components'
import userImg from '../assets/user.png'
import NotificationBadge from 'react-notification-badge'
import { AiOutlineLogout, AiOutlinePlus } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Menu, MenuButton, MenuList, MenuItem, effect } from '@chakra-ui/react'
import GlobalContext from '../context/globalcontext'
import { Link } from 'react-router-dom'

// function NavBarHead () {
//   return (
//     <>
//       <nav className='navbar navbar-expand-md position-fixed w-100 z-50 p-2 px-md-5 md:p-2 d-flex gap-3 bg-white'>
//         <div className='flex gap-3 items-center justify-center'>
//           <img src={Logo} className='w-8 h-full ' alt='logo image' />
//           <p className='text-headerColor text-md font-bold'>Foodyz</p>
//         </div>
//         <div
//           className='collapse navbar-collapse flex gap-6 items-center ml-auto'
//           id='navbarTogglerDemo01'
//         >
//           <ul className='navbar-nav  mt-2 mt-lg-0 flex  gap-8 ml-auto '>
//             <li className='nav-item active'>
//               <a className='nav-link' href='#'>
//                 Home <span class='sr-only'>(current)</span>
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='#'>
//                 Menu
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='#'>
//                 About Us
//               </a>
//             </li>

//             <li className='nav-item'>
//               <a className='nav-link' href='#'>
//                 Service
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <FaShoppingCart className='text-xl' />
//         </div>
//       </nav>
//     </>
//   )
// }

// export default NavBarHead

//nsabjbsknsdjk

function NavBarHead () {
  const [open, setOpen] = useState(false)
  const [small, setSmall] = useState(false)
  const [Loading, setLoading] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const { authentication, user } = useContext(GlobalContext).state
  const { UserLogin, userLogOut } = useContext(GlobalContext)
  const [UserDetails, setUserDetails] = useState(null)
  const { cart } = useContext(GlobalContext).state
  console.log('auth', authentication)
  console.log('user', user)

  const Logout = () => {
    localStorage.clear()
    userLogOut()
    window.location.reload()
  }
  return (
    <nav className='navbar navbar-expand-md position-fixed w-100 z-50 p-2 px-md-5 md:p-2 d-flex gap-4 bg-white'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarTogglerDemo01'
        aria-controls='navbarTogglerDemo01'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      {/* logo section */}
      <div className='flex gap-3 items-center justify-center'>
        <img src={Logo} className='w-8 h-full ' alt='logo image' />
        <p className='text-headerColor text-md font-bold'>Foodyz</p>
      </div>
      {/* Link section */}
      <div
        className='collapse navbar-collapse flex gap-6 items-center ml-auto'
        id='navbarTogglerDemo01'
      >
        <motion.ul
          className='navbar-nav  mt-2 mt-lg-0 flex  gap-8 md:ml-auto font-mono font-medium tracking-wide'
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{delay:.5}}
        >
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Home <span class='sr-only'></span>
            </Link>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#Menu'>
              Menu
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#About'>
              About
            </a>
          </li>

          <li>
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
                    <>
                      <MenuItem>
                        <Link
                          to={'/add'}
                          className='flex items-center justify-between gap-2'
                        >
                          <div>Add Item</div>
                          <AiOutlinePlus />
                        </Link>
                      </MenuItem>

                      <MenuItem>
                        <Link
                          to={'/add-catogery'}
                          className='flex items-center justify-between gap-2'
                        >
                          <div>Add Catogery</div>
                          <AiOutlinePlus />
                        </Link>
                      </MenuItem>
                    </>
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
          </li>
        </motion.ul>
      </div>
      <motion.div
        className='flex'
        whileTap={{ scale: 0.65 }}
        onClick={() => {
          setOpenCart(true)
        }}
      >
        <NotificationBadge
          count={cart && cart.length > 0 && cart.length}
          effect={effect[1]}
        />
        <FaShoppingCart className='text-2xl' />
      </motion.div>

      <CartContainer isOpen={openCart} onClose={setOpenCart} />
    </nav>
  )
}

export default NavBarHead
