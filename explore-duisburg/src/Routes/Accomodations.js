import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import AccomodationsImg from '../Assets/house.webp'
import Footer from '../Components/Footer'

import AirbnbEmbed from '../Components/AirbnbEmbed'

export default function Accomodations() {
  return (
    <>
    <Navbar />
    <Hero
    cName="hero-mid"
    heroImg={AccomodationsImg}
    title="Accomodations"
    
    
    btnClass="hide"

    />
    <AirbnbEmbed/>
    <Footer />
    </>
  )
}