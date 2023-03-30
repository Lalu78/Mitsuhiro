import React, { useState, useRef } from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Header({ className }) {
  const [showMenu, setShowMenu] = useState(false)

  const navigate = useNavigate();
  function handleClick() {
    navigate("mission");
  }


  return (
    <div className={`${className} h-20 md:h-[109px] bg-[#303131] w-full px-6 md:px-12 lg:px-[110px] flex justify-between items-center`}>
      <div>
        <Link to='/' ><img src='/images/logoLarge.svg' className='h-20 w-40 md:h-[90px] md:w-[321px] ' alt='logo' /></Link>
      </div>
      <div className='hidden md:flex gap-x-4 md:gap-x-7 lg:gap-x-14 text-[#EBEBEB] font-medium text-sm'>
        <Link to='about'>AboutUs</Link>
        <Link to='products'>Products</Link>
        <button onClick={handleClick} >Mission</button>

      </div>
      <img onClick={() => setShowMenu(!showMenu)} src='/images/menu.svg' alt='menu' className='flex md:hidden' />
      {
        showMenu &&
        <div className='bg-[#6c6e6e] text-white h-40 gap-4 p-4 w-full flex flex-col md:block absolute top-20 left-0'>
          <Link to='/about' onClick={() => setShowMenu(false)}>AboutUs</Link>
          <Link to='/products' onClick={() => setShowMenu(false)}>Products</Link>
          <Link to='/mission' onClick={() => setShowMenu(false)}>Mission</Link>
        </div>
      }

    </div>
  )
}

export default Header