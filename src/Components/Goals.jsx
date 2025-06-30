import React from 'react'
import Container from './Container'
import man from '../assets/man.png'

const Goals = () => {
  return (
    <div className="py-[50px]">
      <Container>
        
        <div className="bg-[#F4F5F5] p-6 md:p-10 rounded-lg flex flex-col lg:flex-row gap-8">
          
        
          <div className="w-full lg:w-6/12">
            <h5 className="text-[16px] text-[#282938] mb-1">Who we are</h5>
            <h1 className="text-[28px] md:text-[32px] lg:text-[38px] font-bold text-[#282938] mb-2">
              Goal focussed
            </h1>
            <p className="text-[16px] text-[#282938] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

         
          <div className="w-full lg:w-6/12 pt-5 lg:pt-0">
            <h1 className="text-[28px] md:text-[32px] lg:text-[38px] font-bold text-[#282938] mb-2">
              Continuous improvement
            </h1>
            <p className="text-[16px] text-[#282938] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

        </div>

       
        <div className="mt-8">
          <img src={man} alt="Team discussion" className="w-full h-auto rounded-lg" />
        </div>
      </Container>
    </div>
  )
}

export default Goals
