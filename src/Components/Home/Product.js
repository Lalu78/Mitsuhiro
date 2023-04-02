import React from 'react'
import { Link } from 'react-router-dom';
import ProductData from '../../Data/ProductData'
import MultiCarousel from '../Common/MultiCarousel';

function Product() {
    return (
        <div className={`h-auto a w-full  bg-no-repeat bg-cover bg-center bg-[url('../public/images/WHITEBUBBOL.png')]`}>
            <div className='pb-5 md:pb-10'>
                <div className='py-5 md:py-10  w-full h-auto '>
                    <div className='px-6 md:px-[55px] lg:px-[110px] flex justify-between items-center pb-6 md:pb-2'>
                        <h1 className='font-semibold text-2xl md:font-bold md:text-4xl text-black a  '>Our Products</h1>
                        <Link to='products'> <button className='text-[#F7911E] font-semibold text-sm underline'>View all</button></Link>
                    </div>
                </div>
                <MultiCarousel />
            </div>
        </div>
    )
}

export default Product