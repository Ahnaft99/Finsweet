import React from 'react'
import Container from './Container'
import banner from '../assets/banner.png'
import { GoArrowRight } from "react-icons/go";


const Banner = () => {
  return (
    <div className='bg-[#1C1E53] lg:py-[100px] py-[50px]'>
        <Container className='lg:flex items-center '>
            <div className='lg:w-6/12 lg:static w-full'>
                <h1 className='lg:text-[48px] lg:w-[582px] lg:text-left text-white text-[20px]  font-semibold         text-center'>Building stellar websites for early startups</h1>
                <p className='lg:text-[16px] lg:w-[480px] lg:text-left text-white text-[8px] font-medium  py-2 pb-[20px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <div className='text-center lg:text-left'>
                <a className='px-2 lg:px-4  border-1 bg-[#FCD980] border-black rounded-[16px] lg:py-4 py-1 text-black lg:text-[18px] text-[8px] font-semibold text-center' href="#">View our work</a>
                <a className='text-white lg:text-[16px] text-[8px]  font-medium ' href="#"> View Pricing </a>
                </div>
              
            </div>
            <div className='lg:w-6/12 w-full py-5 lg:py-0  justify-center'>
            <img className='w-full' src={banner} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default Banner