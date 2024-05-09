import React from 'react';
import bg from './../assets/images/bg.jpg';
import tLogo from './../assets/images/tLogo.png';
import { Link } from 'react-router-dom';
function HomeComp() {
  return (
    <div
    className="min-h-screen relative bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col justify-center px-6 py-12"
    style={{
      backgroundImage: `url(${bg})`, // Set the background image
      backgroundSize: 'cover', // Cover the entire container
      backgroundPosition: 'center', // Center the image horizontally and vertically
      transition: 'background-image 0.5s ease',
    }}
  >
    {/* Semi-transparent overlay behind the text content */}
    <div className="absolute inset-0 bg-black opacity-70"></div>
  
    {/* Content container */}
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center relative z-10">
      {/* Image section */}
      <div className="md:w-1/2 mb-12 md:mb-0">
        <img src={tLogo} className='w-full md:w-4/5 mx-auto' alt="Ambika Cane Industries" />
      </div>
  
      {/* Text section */}
      <div className=" caveat-custom  md:w-1/2 text-center">
        {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to <br /><span>Ambika Cane Industries</span></h1> */}
        <p className="text-lg text-orange-100 md:text-xl mb-8"><span className='md:text-5xl text-2xl text-orange-50'>We're Goa's premier cane furniture manufacturer.</span> <br />Trusted by coastal clients, our designs elevate every space. <br />Reach out to us for custom designs.</p>
        <Link to="/contact" className="inline-flex items-center text-2xl bg-orange-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out">
      Contact Us
      <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </Link>
      </div>
    </div>
  </div>
  
  );
}

export default HomeComp;
