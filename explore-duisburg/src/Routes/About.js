import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import AboutImg from '../Assets/aboutimg.jpg'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'


export default function About() {
  return (
    <>
    <Navbar />
    <Hero
    cName="hero-mid"
    heroImg={AboutImg}
    title="About"
    
    
    btnClass="hide"
    

    />
    <AboutUs/>
    <Footer />
    </>
  )
}