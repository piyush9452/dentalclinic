import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Values from './Components/Values'
import AboutUs from './Components/AboutUs'
import Footer from './Components/Footer'
import ServicesSection from './Components/Services'
import ReviewsSection from './Components/Reviews'
import Departments from './Components/Departments'
import BlogPosts from './Components/BlogPosts'
import Questions from './Components/Questions'
import Doctors from './Components/Doctors'

function App() {
  return (
    <>
      <Navbar />
      
      <Hero id="hero" />
      <Values id="values" />
      <AboutUs id="about" />
      <Departments id="departments" />
      <ServicesSection id="services" />
      <Doctors id ="doctors" />
      <ReviewsSection id="reviews" />
      <BlogPosts id="blog" />
      <Questions id="questions" />
      <Footer id="footer" />
    </>
  )
}

export default App
