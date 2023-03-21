import React from 'react'
import Accordion from './Accordion'
import FAQData from '../../Data/FAQData'


function FAQSection() {
    return (
        <div className={`h-auto md:h-[637px] px-5 md:px-12 lg:px-[90px] w-full  bg-no-repeat bg-cover bg-center bg-[url('../public/images/faqmobilebg.svg')] md:bg-[url('../public/images/faqbg.svg')]`}  >
            <h1 className='font-semibold md:font-semibold text-2xl md:text-4xl text-black pt-9 md:pt-[71px]'>Frequently Asked <span className='text-[#F7911E]'>Questions</span></h1>
            <div className='w-full md:w-[862.88px] md:ml-20 my-8 md:my-12'>
                <ul className="accordion">
                    {FAQData.map(({ Q, A }) => (
                        <Accordion heading={Q} content={A} />
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default FAQSection