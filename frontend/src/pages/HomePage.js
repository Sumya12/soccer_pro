import React from 'react'
import Carousel from '../components/Home/Carousel'


import Faqs from '../components/Home/Faqs'
import Footer from '../components/Home/Footer'
import Hero from '../components/Home/Hero'
import Navbar from '../components/Home/Navbar'

export default function HomePage() {
  return (
    <>
   <Navbar/>
   {/* <Carousel/> */}
   <Hero/>
 
   <Faqs/>
   <Footer/>
   
    </>
  )
}
