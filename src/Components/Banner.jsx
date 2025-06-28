import React from 'react'
import Container from './Container'
import banner from '../assets/banner.png'
import { GoArrowRight } from "react-icons/go";


const Banner = () => {
  return (
    <div className='bg-[#1C1E53] py-[100px]'>
        <Container className='flex items-center'>
            <div className='w-6/12'>
                <h1 className='text-white text-[54px] font-semibold w-[582px]'>Building stellar websites for early startups</h1>
                <p className='text-white text-[16px] font-medium w-[520px] py-2 pb-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                <a className='px-4 border-1 bg-[#FCD980] border-black rounded-[16px] py-4 text-black text-[18px] font-semibold' href="#">View our work</a>
                <a className='text-white text-[16px] font-medium ' href="#"> View Pricing </a>
            </div>
            <div className='w-6/12'>
            <img src={banner} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default Banner