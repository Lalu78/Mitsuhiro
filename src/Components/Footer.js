import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Footer({ className, setShow }) {


  const onHandleClick = () => {
    setShow(true)
  }
  return (
    <div className={`${className} bg-[#383939] max-h-auto min-h-[200px] w-full px-6 md:px-12 lg:px-[110px] pb-10 md:pb-0 flex items-center justify-center`}>
      <div className='w-full flex justify-between items-center text-white flex-wrap gap-10 md:gap-5'>
        <div className='flex flex-col'>
          <Link to='/'><img src='/images/logo.svg' className='mt-5' /></Link>
          <div>office/showroom address line 1</div>
          <div>office/showroom address line 2</div>
          <div>office/showroom address line 3</div>
        </div>
        <div className='flex gap-8 md:gap-16'>
          <div className='flex flex-col gap-5'>
            <Link to='about'>About Us</Link>
            <Link to='products'>Our Products</Link>
            <Link onClick={onHandleClick}>Become a Dealer</Link>
          </div>
          <div className='flex flex-col gap-5'>
            <Link to='contactUs'>Contact Us</Link>
            <Link to='mission'>Our Mission</Link>
            <Link to='/'>Terms & Conditions</Link>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div>Mobile no. : +91-8888888888</div>
          <div>Email ID. : example@gmail.com</div>
          <div className='flex gap-7'>
            <Link className='hover:text-yellow-100'> <img src='/images/fb.svg' /></Link>
            <Link> <img src='/images/twitter.svg' /></Link>
            <Link> <img src='/images/linkedin.svg' /></Link>
            <Link> <img src='/images/youtub.svg' /></Link>
            <Link> <img src='/images/insta.svg' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer