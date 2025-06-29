import React from 'react'


const WorkReusable = ({image, title}) => {
  return (
    <>
     
            
                <img className='lg:mx-0 mx-auto' src={image} alt="" />
                <h1 className='lg:text-[48px] text-[30px] font-medium lg:w-[328px] w-full lg:text-left text-center'> {title}</h1>
                <p className='lg:text-[16px] text-[10px] text-black lg:w-[300px] w-full lg:text-left tex-center  '>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
          
    </>
  )
}

export default WorkReusable