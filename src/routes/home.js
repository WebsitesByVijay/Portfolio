import React from 'react'

import Navbar from '../components/Navbar'
import HomeBg1 from '../components/HomeBg1'
import Footer from "../components/Footer";
import Work from "../components/Work"



const home = () => {
  return (
    <div>
      <Navbar />
      <HomeBg1 />
      <Work />
      <Footer />
    </div>
  )
}

export default home