import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import AboutUs from '../AboutUs'
import Goals from '../Goals'

const Aboutus = () => {
  return (
    <>
      <Header/>
      <AboutUs/>
      <Goals/>
      <Outlet/>
      <Footer/>
    </>
  
  )
}

export default Aboutus