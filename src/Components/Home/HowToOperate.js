import React from 'react'

function HowToOperate() {
    return (
        <div className={`h-auto min-h-[510px]  xl:gap-60 px-2 md:px-12  xl:px-[90px] w-full flex flex-col lg:flex-row bg-no-repeat bg-cover  text-white `} style={{ backgroundImage: 'url("/images/Howoperatebg.svg")', backgroundRepeat: 'no-repeat' }}>
            <div className='flex mt-5 md:pt-10 '>
                <img src='/images/opetate.svg' alt='logo' className='w-[200px] md:w-[300px] lg:w-[430px] xl:w-[453px] h-[209px] md:h-[250px] lg:h-[330px] xl:h-[378px]  ' />
                <img src='/images/operate2.svg' alt='logo' className='h-[215px] md:h-[250px] lg:h-[300px] xl:h-[389px] w-[150px] md:w-[200px] lg:w-[250px] xl:w-[302px] mt-[107px] -ml-20 ' />
            </div>
            <div className='flex flex-col gap-y-6 md:gap-y-8 pb-7 lg:mt-[135px] px-5 md:px-0'>
                <h1 className='font-semibold md:font-bold text-2xl md:text-4xl text-black'>How we <span className='text-white'>operate</span></h1>
                <div className='flex gap-x-2.5'>
                    <img src='/images/tick.svg' />
                    <span className='font-normal text-base text-black'>We operate through Super Stockists and Store Network .Super Stockists work in assigned territory and supply to stores in given territory. </span>
                </div>
                <div className='flex gap-x-2.5'>
                    <img src='/images/tick.svg' />
                    <p className='font-normal text-base text-black'>We provide branding and marketing support to the stores .</p>
                </div>
                <div className='flex gap-x-2.5'>
                    <img src='/images/tick.svg' />
                    <p className='font-normal text-base text-black'>We provide extensive service training and technical support to stores’s technicians.</p>
                </div>
            </div>
        </div>
    )
}

export default HowToOperate