import React from 'react'


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from '../components/HeroImg';
import AboutContent from '../components/AboutContent';



const about = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="ABOUT." text="I'm a Java Full Stack Developer"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default about