import React from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci"

const Footer = () => {
  return (
    <div className="py-[50px] bg-[#1C1E53] text-white">
      <Container className="flex flex-col lg:flex-row gap-10">
        
        {/* Left section */}
        <div className="w-full lg:w-6/12">
          <img src={logo} alt="Logo" />
          <p className="py-4 text-[16px] w-[90%] lg:w-[60%] leading-relaxed">
            We are always open to discuss your project and improve your online presence.
          </p>

          <div className="bg-[#FCD980] text-black rounded-md p-4 flex flex-col sm:flex-row justify-between w-full sm:w-[80%] mt-4">
            <div>
              <h1 className="font-semibold">Email me at</h1>
              <p className="text-sm">contact@website.com</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <h1 className="font-semibold">Call us</h1>
              <p className="text-sm">0927 6277 28525</p>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-6/12">
          <h1 className="text-[36px] md:text-[48px] font-semibold mb-4">Let’s Talk!</h1>
          <p className="text-[16px] leading-relaxed w-[90%] mb-6">
            We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
          </p>
          <div className="flex gap-4 text-[24px]">
            <CiFacebook />
            <CiTwitter />
            <CiInstagram />
            <CiLinkedin />
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Footer
