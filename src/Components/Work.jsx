import React from 'react'
import Container from './Container'
import one from '../assets/pointer1.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'

import WorkReusable from './Reusable/WorkReusable'

const Work = () => {
  return (
    <div className='py-[50px]'>
        <Container className='lg:flex'>
        <div className='lg:w-[4/12] w-full'>
                <h1 className='lg:text-[48px] text-[30px] font-semibold text-black lg:w-[400px] w-full text-center lg:text-left'>How we work</h1>
                <p className='lg:text-[16px] text-[10px] text-black lg:w-[400px] w-full text-center  lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className='text-center lg:text-left'> 
                <a className='lg:text-[16px] text-[10px] font-semibold text-[#2405F2]  ' href="#">Get in touch with us</a>
                </div>
               
            </div>
            <div className='lg:w-[8/12] w-full flex lg:mx-auto py-2 '>
            <div className='lg:py-0 py-5'>
            <WorkReusable image={one} title='Strategy'/>
           <WorkReusable image={two} title='Wireframing'/>
           </div>
           <div className='lg:py-0 lg:px-0 py-5 px-5'>
           <WorkReusable image={three} title='Design'/>
           <WorkReusable image={four} title='Development'/>
           </div>
           
            
          
           </div>
        </Container>
    </div>
  )
}

export default Work