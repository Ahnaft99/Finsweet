import React, { useState } from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CiHome } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { FaQuora } from "react-icons/fa6";
import { FaBlogger } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";



const Header = () => {
  let[show, setShow] = useState(false)
  let handleShow = ()=>{
    setShow(!show)
  }
       
  return (
    <div className='bg-[#1C1E53] py-4 '>
           <Container className='flex items-center'>
        <div className='w-4/12'>
            <img src={logo} alt="" />
        </div>
        <div className='lg:w-8/12 lg:text-white text-black  w-full'>
        <div className=''>
        <ul className={`lg:flex lg:gap-4 justify-end lg:static transition-all duration-300
  ${show ? "bg-[#FAF9F6] absolute left-[69%] top-[50px] w-[30%] py-5" : "absolute left-[-200px] top-0"}
`}>
            <li className='lg:text-[16px] text-[14px]   '><a className='flex gap-1 pl-4 items-center' href="#"><CiHome className='lg:hidden  text-right'/>Home</a></li>
            <li className='lg:text-[16px] text-[14px]'><a className='flex gap-1 pl-4 items-center' href="#"><FcAbout className='lg:hidden'/>About us</a></li>
            <li className='lg:text-[16px] text-[14px]'><a className='flex gap-1 pl-4  items-center' href="#"><MdOutlineFeaturedPlayList className='lg:hidden'/>Feature</a></li>
            <li className='lg:text-[16px] text-[14px]'><a className='flex gap-1 pl-4  items-center' href="#"><IoPricetagOutline className='lg:hidden'/>Pricing</a></li>
            <li className='lg:text-[16px] text-[14px]'><a className='flex gap-1 pl-4  items-center' href="#"><FaQuora className='lg:hidden'/>FAQ</a></li>
            <li className='lg:text-[16px] text-[14px]'><a className='flex gap-1 pl-4  items-center' href="#"><FaBlogger className='lg:hidden'/>Blog</a></li>
            <li ><a className=' lg:text-[16px] text-[14px] lg:px-6  lg:border-1 lg:border-white lg:text-white text-black lg:py-2  rounded-[16px]  flex gap-1 pl-4  items-center' href="#"><IoIosContact className='lg:hidden'/>Contact</a></li>
            </ul>
       
        </div>
           
        </div>
        <div className='lg:hidden items-center pr-2 lg:pr-0' onClick={handleShow}>
          {show ? <RxCross2 className='text-white'/> :  <FaBars className='text-white'/> }
         
          
        </div>
    </Container>
    </div>
 
  )
}

export default Header