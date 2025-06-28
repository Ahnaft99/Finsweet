import React from 'react'
import Container from './Container'
import pointer from '../assets/pointer1.png'

const Work = () => {
  return (
    <div className='py-[50px]'>
        <Container className='flex'>
            <div className='w-[4/12]'>
                <h1>How we work</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <a href="#">Get in touch with us</a>
            </div>
            <div className='w-[8/12]'>
                <img src={pointer} alt="" />
                <h1>Strategy</h1>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
            </div>
        </Container>
    </div>
  )
}

export default Work