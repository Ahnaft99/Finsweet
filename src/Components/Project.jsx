import React from 'react'
import Container from './Container'
import { FaArrowRightLong } from "react-icons/fa6";

const Project = () => {
  return (
    <div className='py-12'>
      <Container>
      
        <div className='w-full mb-8'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-4 text-center lg:text-left'>
            <h1 className='text-3xl md:text-4xl lg:text-[48px] font-semibold'>
              View our projects
            </h1>
            <a className='flex items-center gap-2 text-blue-600 hover:underline' href="#">
              View More <FaArrowRightLong />
            </a>
          </div>
        </div>


        <div className='flex flex-col lg:flex-row gap-6 w-full'>
          
          
          <div className='lg:w-8/12 w-full'>
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] bg-[url('/p1.png')] bg-no-repeat bg-center bg-cover rounded-xl overflow-hidden after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:w-[55%] after:bg-[rgba(28,30,83,0.6)]">
              <h3 className='absolute z-10 text-white font-bold top-[40%] md:top-[50%] left-5 text-xl md:text-3xl w-[50%]'>
                Workhub office Webflow Webflow Design
              </h3>
              <a className='absolute z-10 text-[#FCD980] font-bold bottom-5 left-5 flex items-center gap-2' href="#">
                View project <FaArrowRightLong />
              </a>
            </div>
          </div>

          
          <div className='lg:w-4/12 w-full flex flex-col gap-6'>
            
            <div className="relative w-full h-[200px] md:h-[250px] bg-[url('/p2.png')] bg-no-repeat bg-center bg-cover rounded-xl overflow-hidden after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:w-full after:bg-[rgba(28,30,83,0.6)]">
              <a className='absolute z-10 text-[#FCD980] font-bold bottom-4 left-4 flex items-center gap-2' href="#">
                View project <FaArrowRightLong />
              </a>
            </div>

            
            <div className="w-full h-[200px] md:h-[250px] bg-[url('/p3.png')] bg-no-repeat bg-center bg-cover rounded-xl overflow-hidden"></div>
          </div>

        </div>
      </Container>
    </div>
  );
}

export default Project
