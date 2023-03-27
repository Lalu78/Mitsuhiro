import React from 'react'

function WhoWeAreSection() {
    return (
        <div className={`h-auto w-full  bg-no-repeat bg-cover bg-center py-16  md:p-24 bg-[url('../public/images/productBg.svg')]`}>
            <div className={`h-auto md:h-[586px]  rounded-3xl flex flex-col md:flex-row gap-x-28  w-full  bg-no-repeat bg-cover bg-center  bg-[url('../public/images/orangebgmobile.svg')] md:bg-[url('../public/images/Orange background.svg')]`}>
                <div className='relative '>
                    <img src='/images/redBikebig.svg' alt='bike' className='h-[410px] md:h-[586px] w-[328px] md:w-[469px] rounded-l-3xl' />
                    <img src='/images/elicticalSign.svg' alt='logo' className='h-[80px] md:h-[100px] w-[150px] md:w-[180px] absolute top-24 right-0 md:top-20 md:-right-20' />
                </div>
                <div className='flex flex-col py-7 md:py-24  gap-y-6 pl-6 md:pl-0'>
                    <p className='font-medium text-sm text-white'> Ride with an Idea</p>
                    <h1 className='font-semibold text-2xl'>Effortless, <span className='text-white'>eco-friendly</span> commuting</h1>
                    <div className='flex gap-x-2.5'>
                        <img src='/images/tick.svg' />
                        <span className='font-semibold text-base text-black'>No license </span>
                    </div>
                    <div className='flex gap-x-2.5'>
                        <img src='/images/tick.svg' />
                        <p className='font-semibold text-base text-black'>Eco-friendly to save environment .</p>
                    </div>
                    <div className='flex gap-x-2.5'>
                        <img src='/images/tick.svg' />
                        <p className='font-semibold text-base text-black'>Low-maintenance (10-15 paisa/km).</p>
                    </div>
                    <button className='px-3 py-2.5 rounded-lg text-white bg-black w-[111px]'>Know more</button>

                </div>

            </div>
        </div>



    )
}

export default WhoWeAreSection