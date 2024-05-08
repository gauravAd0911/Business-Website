import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeComp from '../components/HomeComp'
import AboutUs from '../components/AboutUs'
// import Blog from '../components/BlogComp'
// import Testimonials from '../components/Testimonials'
import Gallery from '../components/GalleryComp'
import ContactComp from '../components/ContactComp'

function Home() {
  return (
   <div>
    <Header/>
    <HomeComp/>
    <AboutUs/>

    <Gallery/>
    {/* <Blog/> */}
    {/* <Testimonials/> */}
    <ContactComp/>
    <Footer/>
   </div>
  )
}

export default Home
