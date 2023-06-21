import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import ContactImg from '../Assets/contact.jpg'

export default function Contact() {
  return (
    <>
    <Navbar />
    <Hero
    cName="hero-mid"
    heroImg={ContactImg}
    title="Contact"
    
    
    btnClass="hide"

    />
    </>
  )
}