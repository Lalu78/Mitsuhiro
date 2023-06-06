import React from 'react'

function WhoWeAreSection() {
    return (
        <div className={`relative h-auto w-full  bg-no-repeat bg-cover bg-center py-16  md:p-24 bg-[url('../public/images/productBg.svg')]`}>
            <div className={`h-auto md:h-[586px]  rounded-3xl flex flex-col md:flex-row gap-x-28  w-full  bg-no-repeat bg-cover bg-center  bg-[url('../public/images/orangebgmobile.svg')] md:bg-[url('../public/images/Orange background.svg')]`}>
                <div className='relative '>
                    <div className={` h-[410px] md:h-[586px] w-full md:w-[469px] rounded-l-3xl bg-[url('../public/images/knowmorebg.png')]`}>
                        <div className='pl-5 flex flex-col py-7 md:py-14  gap-y-6 text-white'>
                            <div className='flex gap-x-2.5 items-center'>
                                <img src='/images/Tick.png' className='h-4 w-4' />
                                <span className='font-semibold text-base'>No license </span>
                            </div>
                            <div className='flex gap-x-2.5 items-center'>
                                <img src='/images/Tick.png' className='h-4 w-4' />
                                <p className='font-semibold text-base'>Eco-friendly to save environment</p>
                            </div>
                            <div className='flex gap-x-2.5 items-center'>
                                <img src='/images/Tick.png' className='h-4 w-4' />
                                <p className='font-semibold text-base'>Low-maintenance (10-15 paisa/km)</p>
                            </div>
                            <button className='px-3 py-2.5 font-semibold text-sm rounded-lg text-white bg-black w-[111px]'>Know more</button>
                        </div>
                    </div>
                    <img src='/images/electicsigh.png' alt='elictic' className='hidden md:block h-[80px] md:h-[100px] w-[120px] md:w-[180px] absolute bottom-10  right-0 md:top-20 md:-right-20' />
                </div>
                <img src='/images/manyscooter.png' alt='elictic' className=' absolute top-[44%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' />
                <div className='flex flex-col py-7 md:py-16 gap-y-6 pl-6 md:pl-0'>
                    <p className='font-medium text-xl text-white'> Ride with an Idea</p>
                    <h1 className='font-semibold text-2xl'>Effortless, <span className='text-white'>eco-friendly</span> <br/> commuting</h1>
                </div>

            </div>
        </div>



    )
}

export default WhoWeAreSection