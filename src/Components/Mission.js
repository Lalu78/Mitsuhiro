import React from 'react'
function Mission() {
  return (
    <div className={`min-h-screen h-auto  px-5 md:px-12 lg:px-[70px] xl:px-[110px] w-full  bg-no-repeat bg-cover bg-center bg-[url('../public/images/aboutusbg.svg')] `}>
      <div className='pt-12 md:pt-20 pb-10'>
        <div className={` flex flex-col md:flex-row justify-between gap-20 px-8 md:px-16 items-center h-auto min-h-[414px] rounded-3xl w-full  bg-no-repeat bg-cover bg-center  bg-white bg-[url('../public/images/ENQUIRY.svg')]`}>
          <img src='/images/GOGREEN.png' className='mt-4 md:mt-0' />
          <div className='flex flex-col gap-6'>
            <li className='font-semibold text-base  text-white '>Our Mission</li>
            <div className='font-semibold text-3xl text-white'>Clean   <span className='text-black'> Energy <br />
              for a Cleaner</span> <span>Planet</span> </div>
            <div className='text-base font-normal mt-2 mb-5'>
              We understand the importance of reducing our carbon footprint and promoting clean energy sources. This is why we have made it our mission to create electric scooters and electric bikes that are not only efficient and affordable, but also visually stunning and practical.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission