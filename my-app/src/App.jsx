import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Values from './Components/Values'
import AboutUs from './Components/AboutUs'
import Footer from './Components/Footer'
import AwardsSection from './Components/Awards'
import ReviewsSection from './Components/Reviews'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Values />
      <AboutUs />
      <AwardsSection />
      <ReviewsSection />
      <Footer />
    </>
  )
}

export default App
