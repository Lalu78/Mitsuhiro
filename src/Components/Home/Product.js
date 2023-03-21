import React from 'react'
import { Link } from 'react-router-dom';
import ProductData from '../../Data/ProductData'

function Product() {
    return (
        <div className='bg-white py-16 w-full h-auto '>
            <div className='px-6 md:px-[55px] lg:px-[110px] flex justify-between items-center pb-6 md:pb-2'>
                <h1 className='font-semibold text-2xl md:font-bold md:text-4xl text-black '>Our Products</h1>
               <Link to='products'> <button className='text-[#F7911E] font-semibold text-sm underline'>View all</button></Link>
            </div>
            <div className={`h-auto min-h-[328px] px-6 md:px-[55px] lg:px-[70px] xl:px-[110px] flex items-center w-full  bg-no-repeat bg-cover bg-center `} style={{ backgroundImage: 'url("/images/productBg.svg")', }} >
                <div className='flex justify-between gap-5 flex-wrap w-full'>
                    {ProductData.map((data) => {
                        const { title, model, img, bg } = data;
                        return (<>
                            <div className='flex bg-cover bg-center h-[214px] w-[342px]' style={{ backgroundImage: 'url(' + bg + ')', }}>
                                <img src={img} alt='icon' className='ml-8 h-[206px]' />
                                <div className='px-9 py-6 flex flex-col gap-y-4 text-white'>
                                    <h1 className='font-bold text-base'> {title}</h1>
                                    <h1 className='font-bold text-base'> Model : {model}</h1>
                                    <p className='font-nomal text-xs'> Motor : BLDC HUB (WATERPROOF)</p>
                                    <button className='font-semibold text-xs text-start underline'> View Details</button>
                                </div>
                            </div>
                        </>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Product