import React from 'react'


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from '../components/HeroImg';
import Form from "../components/Form"


const contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="CONTACT." text="Get in touch." />
      <Form />
      <Footer />
    </div>
  )
}

export default contact