import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header({ className }) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className={`${className} h-20 md:h-[109px] bg-[#303131] w-full px-6 md:px-12 lg:px-[110px] flex justify-between items-center`}>
      <div>
        <NavLink to='/'onClick={() => showMenu(false)} ><img src='/images/logoLarge.svg' className='h-20 w-40 md:h-[90px] md:w-[321px] ' alt='logo' /></NavLink>
      </div>
      <div className='hidden md:flex gap-x-4 md:gap-x-7 lg:gap-x-14 text-[#EBEBEB] font-medium text-sm'>
        <NavLink to='about'  >AboutUs</NavLink>
        <NavLink to='products'>Products</NavLink>
        <NavLink to='mission'>Mission</NavLink>
      </div>
      <img onClick={() => setShowMenu(!showMenu)} src='/images/menu.svg' alt='menu' className='flex md:hidden' />
      {
        showMenu &&
        <div className='bg-[#6c6e6e] text-white h-40 gap-4 p-4 w-full flex flex-col md:block absolute top-20 left-0'>
          <NavLink to='/about' onClick={() => showMenu(false)} >AboutUs</NavLink>
          <NavLink to='/products' onClick={() => showMenu(false)}  >Products</NavLink>
          <NavLink to='/mission' onClick={() => showMenu(false)} >Mission</NavLink>
        </div>
      }

    </div>
  )
}

export default Header