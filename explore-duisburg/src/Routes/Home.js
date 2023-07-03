import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import IntroDuisburg from '../Components/IntroDuisburg'
import MustSeePlaces from '../Components/MustSeePlaces'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero
    cName="hero"
    heroImg="https://images.pexels.com/photos/315499/pexels-photo-315499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
    title="Explore Duisburg"
    text="Choose Your Favourite Destination."
    buttonText="Plan Your Trip"
    url="/"
    btnClass="show"

    />
    <IntroDuisburg />
    <MustSeePlaces />
    <Footer />
    
    </>
  )
}
