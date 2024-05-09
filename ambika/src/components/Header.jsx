import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tLogo from '../assets/images/tLogo.png';

function Header() {
  // State to toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="caveat-custom text-2xl bg-gray-900 text-white py-2 px-6 flex flex-wrap justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src={tLogo} alt="Logo" className=" w-40 md:ml-8 mr-12" />
        {/* <h1 className="text-lg font-bold">Ambika Cane Industries</h1> */}
      </div>
      
      {/* Mobile Menu Icon */}
      <button 
        className="block content-start md:hidden focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg 
          className="h-6 w-6 text-white" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {/* Mobile Menu */}
      <ul className={`md:flex md:items-center ml-20 ${isOpen ? 'block' : 'hidden'}`}>
        <li className="text-2xl font-medium my-2 md:my-0 md:mx-4">
          <Link to="/">Home</Link>
        </li>
        <li className="text-2xl font-medium my-2 md:my-0 md:mx-4">
          <Link to="/about">About Us</Link>
        </li>
        {/* <li className="text-2xl font-medium my-2 md:my-0 md:mx-4">
          <Link to="/products">Products</Link>
        </li> */}
        <li className="text-2xl font-medium my-2 md:my-0 md:mx-4">
          <Link to="/gallery">Gallery</Link>
        </li>
        {/* <li className="text-2xl font-medium my-2 md:my-0 md:mx-4">
          <Link to="/blog">Blogs</Link>
        </li> */}
        <li className="text-2xl  font-medium my-2 md:my-0 md:mx-4">
        <Link to="/contact" className="bg-transparent hover:bg-gray-800  text-white md:ml-20 font-semibold py-2 px-4 border border-white rounded flex items-center mr-8">
        Contact Us
      </Link>
        </li>
        {/* Add more header links as needed */}
      </ul>
      
      {/* Contact us Button */}
      
    </header>
  );
}

export default Header;
