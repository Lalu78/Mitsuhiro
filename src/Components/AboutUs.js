import React from 'react'
function AboutUs() {
  
  return (
    <div className={`min-h-screen h-auto  px-5 md:px-12 lg:px-[70px] xl:px-[110px] w-full  bg-no-repeat bg-cover bg-center bg-[url('../public/images/aboutusbg.svg')] `}>
      <div className='pt-12 md:pt-20'>
        <div className={` flex flex-col md:flex-row justify-between gap-20 px-8 md:px-16 items-center h-auto min-h-[414px] rounded-3xl w-full  bg-no-repeat bg-cover bg-center  bg-white bg-[url('../public/images/productBg.svg')]`}>
          <div className='mt-3 md:mt-0'>
            <div className='h-[300px] w-[300px] md:h-[340px] md:w-[340px] rounded-full bg-[#4C4D4D]'>
              <img src='/images/threebike.png' />
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <li className='font-semibold text-base  text-[#AECD63]'>About Us</li>
            <div className='font-semibold text-3xl'>Sustainable Transportation <br /> <span className='text-[#F7911E]'>Made Easy..</span> </div>
            <div className='text-base font-normal pb-7'><span className='font-bold'>Welcome to Mitsuhiro,</span><br />
              the premier destination for high-quality electric scooters and electric bikes. At Mitsuhiro, we are committed to provide our customers with the best electric vehicles which are both eco-friendly and stylish</div>
          </div>
        </div>
      </div>
      <div className={`px-5 md:px-12 py-12 flex flex-col md:flex-row gap-9 items-center w-full mt-14 pb-10 bg-no-repeat bg-cover bg-center rounded-2xl  bg-[url('../public/images/producttopbg.svg')] `}>
        <div className='flex flex-col gap-y-5 pb-5 font-normal text-lg '>
          <p className='text-center'>At Mitsuhiro, we believe that everyone should have access to sustainable transportation options. That is why we offer a wide range of electric scooters and electric bikes that are suitable for different needs and preferences. Whether you need a compact and lightweight vehicle for your daily commute or a powerful and durable bike for long-distance travels, we have something for you.
          </p>
          <p className='text-center font-semibold italic'> Our company is  founded by a group of professionals  who are passionate about sustainable transportation solutions
          </p>
        </div>
        <img src='/images/aboutgreen.png' />
      </div>
    </div>
  )
}

export default AboutUs