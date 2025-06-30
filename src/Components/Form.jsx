import React from 'react'
import Container from './Container'

const Form = () => {
  return (
    <div className="py-10">
      <Container className="flex flex-col lg:flex-row gap-8">
        
        <div className="w-full lg:w-6/12">
          <div
            className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] 
                       bg-[url('/writing.png')] bg-no-repeat bg-center bg-cover 
                       rounded-xl overflow-hidden 
                       after:absolute after:inset-0 after:content-[''] 
                       after:bg-[rgba(28,30,83,0.6)]"
          >
            <h3 className="absolute z-10 text-white font-bold top-5 md:top-[15%] left-5 
                           text-xl md:text-3xl w-[90%] md:w-[70%] lg:w-[50%]">
              Building stellar websites for early startups
            </h3>
            <p className="absolute z-10 text-white text-[16px] font-normal top-[35%] left-5 
                          w-[90%] md:w-[70%] lg:w-[50%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
            </p>
          </div>
        </div>

       
        <div className="w-full lg:w-6/12 bg-[#1C1E53] rounded-xl py-10 px-6">
          <h2 className="text-white text-[28px] md:text-[32px] font-semibold text-center">
            Send inquiry
          </h2>
          <p className="text-white text-[15px] text-center mt-2 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>

          <form className="space-y-4">
            <div className="text-center">
              <input
                className="w-[80%] md:w-[60%] px-4 py-2 bg-transparent border border-white rounded-md text-white placeholder-white"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="text-center">
              <input
                className="w-[80%] md:w-[60%] px-4 py-2 bg-transparent border border-white rounded-md text-white placeholder-white"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="text-center">
              <input
                className="w-[80%] md:w-[60%] px-4 py-2 bg-transparent border border-white rounded-md text-white placeholder-white"
                type="text"
                placeholder="Figma Link"
              />
            </div>
            <div className="text-center pt-2">
              <a
                href="#"
                className="inline-block px-8 py-2 bg-[#FCD980] text-black font-semibold rounded-[16px]"
              >
                Send an Inquiry
              </a>
            </div>
            <div className="text-center pt-3">
              <a className="text-white underline text-sm" href="#">
                Get in touch with us
              </a>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Form
