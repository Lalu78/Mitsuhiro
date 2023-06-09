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
          <div>Mitsuhiro India Pvt Ltd</div>
          <div>A-231 Park Town Commercial Complex</div>
          <div>Aditya World City NH-24 Ghaziabad</div>
          <div>Uttar Pradesh 201002.</div>
        </div>
        <div className='flex gap-8 md:gap-16'>
          <div className='flex flex-col gap-5'>
            <Link to='about'>About Us</Link>
            <Link to='products'>Our Products</Link>
          </div>
          <div className='flex flex-col gap-5'>
            <Link to='mission'>Our Mission</Link>
            <Link onClick={onHandleClick}>Become a Dealer</Link>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-2 items-center'>
            <Link to='https://wa.me/message/EY7TNDPGSEQUE1'><img src='/images/whapp.png' className='h-6 w-6 bg-white rounded-md'/></Link>
            <div>Enquiry : +91-9560001130</div>
          </div>
          <div>Email ID : info@mitsuhiro.co.in</div>
          <div>Customer care : +91-9560001131</div>
        </div>
      </div>
    </div>
  )
}

export default Footer