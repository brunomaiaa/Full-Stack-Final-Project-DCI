import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import PlaceImg from '../Assets/placetovisit.jpg'
import Footer from '../Components/Footer'
import TripAdvisorEmbed from '../Components/TripAdvisorEmbed'

export default function PlacesToVisit() {
  return (
    <>
     <Navbar />
    <Hero
    cName="hero-mid"
    heroImg={PlaceImg}
    title="Places to visit"
    
    
    btnClass="hide"

    />
    <TripAdvisorEmbed/>
    <Footer />
    </>
  )
}