import React from 'react'

function EVSection() {
  return (
    <div className='flex flex-col md:flex-row bg-no-repeat bg-cover bg-center  h-auto' style={{ backgroundImage: 'url("/images/benefitsbg.svg")', backgroundRepeat: 'no-repeat' }}>
      <div className='flex gap-x-2 md:gap-x-4 md:gap-2'>
        <img src='/images/EVCharging.png' alt='icon' className='h-[210px] md:h-[347.25px]' />
        <h1 className='font-semibold  text-lg  text-white mt-16 md:mt-20 visible md:invisible'>Why you should <span className='text-[#AECD63]'>use <br /></span>an <span className='text-[#AECD63]'>electric vehicle</span></h1>
      </div>
      <div className='px-4 md:px-0'>
        <h1 className='font-medium md:font-bold text-xl md:text-4xl  text-white  md:mt-20 invisible md:visible'>Why you should <span className='text-[#AECD63]'>use <br /></span>an <span className='text-[#AECD63]'>electric vehicle</span></h1>
        <div className='flex flex-col lg:flex-row md:my-10  mb-10 text-base text-white'>
          <div className=' flex flex-col gap-y-7 md:gap-y-10'>
            <div className='flex gap-x-4'> <img src='/images/noteLightGreen.svg' className='h-8 w-8 md:h-14 md:w-14' /><span className='font-normal text-sm'> <span className='font-bold text-[#F7911E]'>Environment Friendly: </span>Electric bikes and scooters run on clean energy, which reduces carbon emissions and helps to protect the environment.</span></div>
            <div className='flex gap-x-4'> <img src='/images/noteOrange.svg' className='h-8 w-8 md:h-14 md:w-14' /><span className='font-normal text-sm' > <span className='font-bold text-[#F7911E]'>Cost-effective: </span> Compared to traditional gas/petrol-powered vehicles, electric bikes and scooters are generally less expensive to operate, maintain, and repair.</span></div>
            <div className='flex gap-x-4'> <img src='/images/noteLightGreen.svg' className='h-8 w-8 md:h-14 md:w-14' /><span className='font-normal text-sm'> <span className='font-bold text-[#F7911E]'>Energy-efficient: </span>Electric bikes and scooters run on clean energy, which reduces carbon emissions and helps to protect the environment.</span></div>
            <div className='flex gap-x-4'> <img src='/images/noteOrange.svg' className='h-8 w-8 md:h-14 md:w-14' /><span className='font-normal text-sm'> <span className='font-bold text-[#F7911E]'>Quiet Operation: </span>  Electric vehicles operate silently, which means they produce less noise pollution than gas-powered vehicles.</span></div>
            <div className='flex gap-x-4'> <img src='/images/noteLightGreen.svg' className='h-8 w-8 md:h-14 md:w-14' /><span className='font-normal text-sm'> <span className='font-bold text-[#F7911E]'>Convenient: </span>Electric bikes and scooters are generally lightweight and easy to maneuver, making them ideal for navigating busy city streets and crowded areas.</span></div>
          </div>
          <div className=' flex flex-col gap-y-7 md:gap-y-10 mt-7 lg:mt-0'>
            <div className='flex gap-x-4'> <img src='/images/noteLightGreen.svg' className='h-8 w-8 md:h-14 md:w-14' /><span className='font-normal text-sm'> <span className='font-bold text-[#F7911E]'>Health Benefits: </span>Riding an electric bike or scooter is an excellent form of exercise and can help to improve overall health and wellbeing.</span></div>
            <div className='flex gap-x-4'> <img src='/images/noteOrange.svg' className='h-8 w-8 md:h-14 md:w-14' /><span className='font-normal text-sm'> <span className='font-bold text-[#F7911E]'>Easy to Charge: </span>Electric bikes and scooters can be charged at home or at any charging station, providing convenience and flexibility for riders.</span></div>
            <div className='flex gap-x-4'> <img src='/images/noteLightGreen.svg' className='h-8 w-8 md:h-14 md:w-14' /><span className='font-normal text-sm'> <span className='font-bold text-[#F7911E]'>Cost Savings: </span>Electric bikes and scooters can save riders money on fuel costs and maintenance expenses, making them a cost-effective transportation option.</span></div>
            <div className='flex gap-x-4'> <img src='/images/noteOrange.svg' className='h-8 w-8 md:h-14 md:w-14' /><span className='font-normal text-sm'> <span className='font-bold text-[#F7911E]'>Fun and Easy to Ride: </span>  Electric bikes and scooters are fun to ride and require minimal effort, making them accessible to a wide range of riders.</span></div>
            <div className='flex gap-x-4'> <img src='/images/noteLightGreen.svg' className='h-8 w-8 md:h-14 md:w-14' /><span className='font-normal text-sm'> <span className='font-bold text-[#F7911E]'>Promotes Sustainable Transportation: </span> By choosing an electric bike or scooter, riders are promoting sustainable transportation options and reducing their impact on the environment.</span></div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default EVSection