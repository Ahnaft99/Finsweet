import React from 'react'
import Container from './Container'
import woman from '../assets/woman.png'

const Client = () => {
  return (
    <div className='py-[50px] bg-[#F4F6FC]'>
      <Container className='flex flex-col lg:flex-row gap-10 lg:gap-20 items-start'>
        <div className='w-full lg:w-4/12 mt-2 px-4 lg:px-0'>
          <h1 className='text-[28px] sm:text-[32px] lg:text-[38px] font-semibold text-[#282938] mb-4 text-balance text-center'>
            What our clients say about us
          </h1>
          <p className='text-[16px] text-[#282938]  text-balance text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>

        <div className='w-full lg:w-8/12 px-4 lg:px-0 text-center lg:text-left'>
          <h1 className='text-[20px] sm:text-[24px] lg:text-[32px] font-medium text-[#282938]'>
            "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
          </h1>

          <div className='flex items-center justify-center lg:justify-start mt-6 gap-3'>
            <img src={woman} alt="Jenny Wilson" className='w-12 h-12 object-cover rounded-full' />
            <div className='text-left'>
              <h5 className='font-semibold'>Jenny Wilson</h5>
              <p className='text-sm text-gray-600'>Vice President</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Client
