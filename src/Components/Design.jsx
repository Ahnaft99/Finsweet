import React from 'react'
import Container from './Container'
import people from '../assets/icon.png'
import DesignReusable from './Reusable/DesignReusable'
import icon2 from '../assets/i2.png'
import icon3 from '../assets/i3.png'
import icon4 from '../assets/i4.png'
import icon5 from '../assets/i5.png'
import icon6 from '../assets/i6.png'

const Design = () => {
  return (
    <div className='py-[10px]'>
        <Container>
            <div className='w-full bg-[#F4F6FC] py-5'>
                <h5 className='text-[16px] font-medium text-[#282938] text-center'>Features</h5>
                <h1 className='lg:text-[48px] text-[24px] font-bold text-[#282938] lg:w-[600px] mx-auto text-center'>Design that solves problems, one product at a time</h1>
            </div>
            <div className='w-12/12  lg:flex text-center lg:text-left lg:py-10 justify-between'>
             <div>
             <DesignReusable image={people} title='Uses Client First'/>
             </div>
             <div>
             <DesignReusable image={icon2}  title='Two Free Revision Round'/>
             </div>
             <div>
             <DesignReusable image={icon3}  title='Template Customization'/>
             </div>
           
            </div>
            <div  className='w-12/12  lg:flex text-center lg:text-left  justify-between'>
            <div>
             <DesignReusable image={icon4}  title='24/7 Support'/>
             </div>
             <div>
             <DesignReusable image={icon5}  title='Quick Delivery'/>
             </div>
             <div>
             <DesignReusable image={icon6}  title='Hands-on approach'/>
             </div> 
            </div>
           
        </Container>
    </div>
  )
}

export default Design