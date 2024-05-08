// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Blog from './pages/Blog';
import DetailedBlog from './pages/DetailedBlog';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<DetailedBlog />} />
        {/* Add more routes as needed */}
      </Routes>
     
    </Router>
  );
}

export default App;
