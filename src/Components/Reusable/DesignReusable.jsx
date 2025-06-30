import React from 'react'

const DesignReusable = ({image, title}) => {
  return (
    <>
    <img className='mx-auto lg:mx-0' src={image} alt="" />
    <h1 className='lg:text-[24px] text-[12px] lg:font-medium font-bold text-[#282938] '>{title}</h1>
    <p className='lg:text-[16px] text-[8px]  text-[#282938] lg:w-[300px] w-[full] text-balance'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
    </>
    
  )
}

export default DesignReusable