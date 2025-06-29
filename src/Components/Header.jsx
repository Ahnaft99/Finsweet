import React, { useState } from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

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
        <div className='w-8/12 text-white '>
            <ul className={` lg:flex lg:gap-4 justify-end lg:static  ${show == true ? "bg-green-500 absolute left-0 top-[50px] w-full text-center" : "absolute left-[-200px] top-0"}`}>
            <li className='lg:text-[16px] text-[14px]'><a href="#">Home</a></li>
            <li className='lg:text-[16px] text-[14px]'><a href="#">About us</a></li>
            <li className='lg:text-[16px] text-[14px]'><a href="#">Feature</a></li>
            <li className='lg:text-[16px] text-[14px]'><a href="#">Pricing</a></li>
            <li className='lg:text-[16px] text-[14px]'><a href="#">FAQ</a></li>
            <li className='lg:text-[16px] text-[14px]'><a href="#">Blog</a></li>
            <li ><a className=' lg:text-[16px] text-[14px] lg:px-6 px-2 border-1 border-white text-white lg:py-2 py-1 rounded-[16px] ' href="#">Contact</a></li>
            </ul>
       
        </div>
        <div className='lg:hidden items-center pr-2 lg:pr-0' onClick={handleShow}>
          {show ? <RxCross2 className='text-white'/> :  <FaBars className='text-white'/> }
         
          
        </div>
    </Container>
    </div>
 
  )
}

export default Header