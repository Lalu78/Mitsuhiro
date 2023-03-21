import React from 'react'
import { Link } from 'react-router-dom'


function Products() {
  return (
    <div className='h-auto w-full bg-yellow-100 p-5'>
      Products
      <h1 className='w-full text-center text-3xl font-bold mb-5'>Comming soon...</h1>
      <Link  to='/' className='w-full text-center text-base font-bold bg-white p-2 rounded'>Back to Home</Link>
    </div>
  )
}

export default Products