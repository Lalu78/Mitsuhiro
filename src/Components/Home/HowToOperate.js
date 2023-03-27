import React from 'react'

function HowToOperate() {
    return (
        <div className={`h-auto min-h-[510px] lg:gap-10 px-2 md:px-12  xl:px-[90px] w-full flex flex-col lg:flex-row bg-no-repeat bg-cover  text-white `} style={{ backgroundImage: 'url("/images/Howweoperatebg.svg")', backgroundRepeat: 'no-repeat' }}>
            <div className='flex my-10   w-full lg:max-w-[658px] relative'>
                <img src='/images/howtoOpate.svg' alt='logo' className=' w-full lg:max-w-[658px] ' />
                <img src='/images/leftrinch.svg' alt='logo' className='w-[100px] md:w-[150px] lg:w-[200px] absolute md:left-6  bottom-4' />
                <img src='/images/rightrich.svg' alt='logo' className='w-[100px] md:w-[150px] lg:w-[200px] absolute right-0 md:right-6 top-4' />
            </div>
            <div className='flex flex-col gap-y-6 md:gap-y-8 pb-7 lg:mt-[135px] px-5 md:px-0  w-full text-black'>
                <h1 className='font-semibold md:font-bold text-2xl md:text-4xl text-black'>How we <span className='text-white'>operate</span></h1>
                <li className='float-left flex gap-x-2.5'>
                    <div className='h-6 w-6 mt-[5px]'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.240234 7.61768C0.240234 5.62855 1.03041 3.7209 2.43693 2.31437C3.84346 0.907852 5.75111 0.117676 7.74023 0.117676C9.72936 0.117676 11.637 0.907852 13.0435 2.31437C14.4501 3.7209 15.2402 5.62855 15.2402 7.61768C15.2402 9.6068 14.4501 11.5145 13.0435 12.921C11.637 14.3275 9.72936 15.1177 7.74023 15.1177C5.75111 15.1177 3.84346 14.3275 2.43693 12.921C1.03041 11.5145 0.240234 9.6068 0.240234 7.61768ZM7.31223 10.8277L11.6302 5.42968L10.8502 4.80568L7.16823 9.40668L4.56023 7.23368L3.92023 8.00168L7.31223 10.8287V10.8277Z" fill="white" />
                        </svg>
                    </div>
                    <p className='font-normal text-base'>We operate through Super Stockists and Store Network. Super Stockists work in assigned territory and supply to stores in given territory </p>
                </li>
                <li className='float-left flex gap-x-2.5'>
                    <div className='h-6 w-6 mt-[5px]'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.240234 7.61768C0.240234 5.62855 1.03041 3.7209 2.43693 2.31437C3.84346 0.907852 5.75111 0.117676 7.74023 0.117676C9.72936 0.117676 11.637 0.907852 13.0435 2.31437C14.4501 3.7209 15.2402 5.62855 15.2402 7.61768C15.2402 9.6068 14.4501 11.5145 13.0435 12.921C11.637 14.3275 9.72936 15.1177 7.74023 15.1177C5.75111 15.1177 3.84346 14.3275 2.43693 12.921C1.03041 11.5145 0.240234 9.6068 0.240234 7.61768ZM7.31223 10.8277L11.6302 5.42968L10.8502 4.80568L7.16823 9.40668L4.56023 7.23368L3.92023 8.00168L7.31223 10.8287V10.8277Z" fill="white" />
                        </svg>
                    </div>
                    <p className='font-normal text-base '>We provide branding and marketing support to the stores</p>
                </li>
                <li className='float-left flex gap-x-2.5'>
                    <div className='h-6 w-6 mt-[5px] '>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.240234 7.61768C0.240234 5.62855 1.03041 3.7209 2.43693 2.31437C3.84346 0.907852 5.75111 0.117676 7.74023 0.117676C9.72936 0.117676 11.637 0.907852 13.0435 2.31437C14.4501 3.7209 15.2402 5.62855 15.2402 7.61768C15.2402 9.6068 14.4501 11.5145 13.0435 12.921C11.637 14.3275 9.72936 15.1177 7.74023 15.1177C5.75111 15.1177 3.84346 14.3275 2.43693 12.921C1.03041 11.5145 0.240234 9.6068 0.240234 7.61768ZM7.31223 10.8277L11.6302 5.42968L10.8502 4.80568L7.16823 9.40668L4.56023 7.23368L3.92023 8.00168L7.31223 10.8287V10.8277Z" fill="white" />
                        </svg>
                    </div>
                    <p className='font-normal text-base '>We provide extensive service training and technical support to stores’s technicians</p>
                </li>
            </div>
        </div>
    )
}

export default HowToOperate