import React from 'react'
import Container from './Container'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='bg-[#1C1E53] py-4 '>
           <Container className='flex items-center'>
        <div className='w-4/12'>
            <img src={logo} alt="" />
        </div>
        <div className='w-8/12 text-white '>
            <ul className='flex gap-4  justify-end'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Feature</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
            <li><a className='px-6 border-1 border-white text-white py-2 rounded-[16px]' href="#">Contact</a></li>
            </ul>
       
        </div>
    </Container>
    </div>
 
  )
}

export default Header