import React, { useState } from 'react'
import Modal from '../Components/Form/Modal'
function Products() {
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  return (

    <div className={`h-auto  px-5 md:px-12 lg:px-[70px] xl:px-[110px] w-full  bg-no-repeat bg-cover bg-center bg-[url('../public/images/productpagebg.png')] `}>
      <div className={`px-5 md:px-15  lg:px-24  my-12 flex flex-col items-center w-full mt-14 bg-no-repeat bg-cover bg-center rounded-2xl  bg-[url('../public/images/producttopbg.png')] `}>
        <h1 className=' text-black font-bold  text-4xl py-4'>Our Products</h1>
        <div className='flex flex-col gap-y-5 pb-5 font-normal text-lg '>
          <p className='text-center'>Our team consists of experienced professionals ,engineers, designers, and technicians who work tirelessly to create electric vehicles that are safe, reliable, and easy to use. We are constantly researching and innovating to develop new technologies that will improve the performance and usability of our products. </p>
          <p className='text-center'> We take pride in our commitment to quality and customer satisfaction. Our vehicles are built to last and come with warranties to ensure that our customers have a worry-free experience. Our customer support team is always ready to assist with any questions or concerns you may have.</p>
          <p className='text-center font-medium'> Thank you for choosing Mitsuhiro as your electric scooter and electric bike provider. Join us in the journey towards a greener and more sustainable future. </p>
        </div>
      </div>
      <div className='flex flex-col gap-5  md:gap-12 '>
        <div className=' flex flex-col md:flex-row gap-5 w-full justify-around'>
          <div className=' max-w-[507px]'>
            <img onClick={() => setShow(true)} src='/images/anthom.png' className='cursor-pointer' />
            {/* {true &&
              <Modal
                show={show}
                width=' w-full md:w-[650px]'
                onCancel={() => setShow(false)}
              >
                <img src='/images/EAGLEDETAILS.png' />
              </Modal>} */}
          </div>
          <div className='relative max-w-[507px]'>
            <img onClick={() => setShow1(true)} src='/images/boostergeen.png' className='cursor-pointer' />
            {/* <Modal
              show={show1}
              width=' md:w-[650px]'
              onCancel={() => setShow1(false)}
            >
              <img src='/images/JINDETAILS.png' />
            </Modal> */}
          </div>
        </div>
        <div className=' flex flex-col md:flex-row gap-5 w-full justify-around'>
          <div className='max-w-[507px]'>
            <img onClick={() => setShow2(true)} src='/images/plenzer.png' className='cursor-pointer' />
            {/* <Modal
              show={show2}
              width=' md:w-[650px]'
              onCancel={() => setShow2(false)}
            >
              <img src='/images/APRODETAILS.png' />
            </Modal> */}

          </div>
          <div className='max-w-[507px]'>
            <img onClick={() => setShow3(true)} src='/images/nozzel.png' className='cursor-pointer' />
            {/* <Modal
              show={show3}
              width=' md:w-[650px]'
              onCancel={() => setShow3(false)}
            >
              <img src='/images/MAXDETAILS.png' />
            </Modal> */}
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-5 w-full justify-around my-5 md:my-12'>
        <div className=' max-w-[507px] h-auto '>
          <img onClick={() => setShow5(true)} src='/images/vespro.png' className='cursor-pointer' />
          {/* <Modal
            show={show5}
            width=' md:w-[650px]'
            onCancel={() => setShow5(false)}
          >
            <img src='/images/cbanabig.jpg'/>
          </Modal> */}
        </div>
        <div className=' max-w-[507px] h-auto'>
          <img onClick={() => setShow4(true)} src='/images/anthom.png' className='cursor-pointer' />
          {/* <Modal
            show={show4}
            width=' md:w-[650px]'
            onCancel={() => setShow4(false)}
          >
            <img src='/images/STARPRODETAILS.png' />
          </Modal> */}
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-5 w-full justify-center my-5 md:my-12'>
        <div className=' max-w-[507px] h-auto'>
          <img onClick={() => setShow4(true)} src='/images/BoosterBig.png' className='cursor-pointer' />
          {/* <Modal
            show={show4}
            width=' md:w-[650px]'
            onCancel={() => setShow4(false)}
          >
            <img src='/images/STARPRODETAILS.png' />
          </Modal> */}
        </div>
      </div>
    </div>

  )
}

export default Products