import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
    return (
        <div className={`h-auto md:h-[570px]  md:px-12 lg:px-[90px] flex flex-col md:flex-row justify-between w-full  bg-no-repeat bg-cover bg-center text-white bg-[url('../public/images/Herosectionmobilebg.svg')] md:bg-[url('../public/images/HeroBanner.svg')]`}>
            <div className=' mt-14 md:mt-20 px-5 md:px-0'>
                <div className='font-bold text-3xl lg:text-6xl'>
                    Experience <br />
                    the joy of <span className='text-[#F7911E]'>sustainable</span><br />transportation
                </div>
                <div className='font-normal text-base mt-7 md:mt-10'>The premier destination for high-quality electric scooters and electric bikes</div>
                <Link to='products'>  <button className='mt-7 md:mt-10 bg-[#AECD63] text-black h-12 w-[160px] text-center rounded-[6px]'>View Products</button></Link>
            </div>
            <div className='flex gap-2 md:gap-3 lg:gap-5 mb-10 md:mb-0 mt-14 md:mt-[90px] xl:mt-0'>
                <img src='/images/Bike 2.png' alt='=img' className='h-[355px] w-[173px] lg:w-60 lg:h-96 xl:w-full xl:h-auto' />
                <img src='/images/Bike 3.png' alt='img' className='h-[355px] w-[173px]  lg:w-60 lg:h-96 xl:w-full xl:h-auto' />
            </div>
        </div>
    )
}

export default HeroSection