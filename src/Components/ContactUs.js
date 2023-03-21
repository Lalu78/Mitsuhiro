import React from 'react'
import { Link } from 'react-router-dom'


function ContactUs() {
  return (
    <div className='h-auto w-full flex flex-col items-center bg-yellow-100 p-5'>
    <h1 className='font-bold text-xl '> ContactUs page</h1>
    <h1 className='w-full text-center text-3xl font-bold mb-5'>Comming soon...</h1>
    <Link to='/' className=' text-center text-base font-bold bg-white p-2 rounded w-60'>Back to Home</Link>
  </div>
  )
}

export default ContactUs