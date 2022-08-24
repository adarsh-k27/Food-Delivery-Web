import React from 'react'

function Header () {
  return (
    <header className='fixed w-screen z-50 bg-blue-500 p-6 px-12 '>
      {/* We Want to Create Two Type Of Header */}
      {/* One For Large screen  */}
      <div className='hidden md:flex w-full bg-red-300'>header</div>

      {/* other for small screen mobiles */}
      <div className='flex md:hidden w-full bg-green-400 px-4'>header</div>
    </header>
  )
}

export default Header
