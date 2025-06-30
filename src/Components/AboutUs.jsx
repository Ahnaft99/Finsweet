import React from 'react'
import Container from './Container'
import group from '../assets/group.png'

const AboutUs = () => {
  return (
    <div className="py-[50px]">
      <Container className="flex flex-col lg:flex-row items-center gap-10">
        
        
        <div className="w-full lg:w-6/12">
          <h5 className="text-[18px] text-black mb-2">About us</h5>
          <h1 className="text-[32px] sm:text-[40px] lg:text-[54px] font-semibold leading-tight mb-4">
            Our designs solve problems
          </h1>
          <p className="text-[16px] text-gray-700 text-balance">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

       
        <div className="w-full lg:w-6/12">
          <img src={group} alt="About us visual" className="w-full h-auto rounded-lg" />
        </div>

      </Container>
    </div>
  )
}

export default AboutUs
