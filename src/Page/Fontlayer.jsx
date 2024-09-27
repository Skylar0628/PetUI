import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'

const Fontlayer = () => {
  return (<>
     <Navbar/>
      <Outlet/>
     <Footer/>
  </>)
}

export default Fontlayer
