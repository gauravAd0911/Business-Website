import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import blogImage1 from './../assets/images/blog1.jpg';
import blogImage2 from './../assets/images/blog2.jpg';

function BlogSection() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Blog Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={blogImage1} alt="Blog Image" className="w-full h-64 object-cover object-center" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">The Benefits of Choosing Cane Furniture for Your Home</h3>
            <p className="text-gray-700 mb-4">Discover why cane furniture is becoming increasingly popular among homeowners...</p>
            <div className="flex items-center text-gray-500">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              <span>May 12, 2024</span>
              <FontAwesomeIcon icon={faUser} className="ml-4 mr-2" />
              <span>Admin</span>
            </div>
            <Link to="/blog/1" className="block mt-4 text-blue-500 hover:underline">Read More</Link>
          </div>
        </div>
        {/* Blog Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={blogImage2} alt="Blog Image" className="w-full h-64 object-cover object-center" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">How to Incorporate Cane Furniture into Your Interior Design</h3>
            <p className="text-gray-700 mb-4">Explore creative ways to integrate cane furniture into your home decor...</p>
            <div className="flex items-center text-gray-500">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              <span>April 28, 2024</span>
              <FontAwesomeIcon icon={faUser} className="ml-4 mr-2" />
              <span>Admin</span>
            </div>
            <Link to="/blog/2" className="block mt-4 text-blue-500 hover:underline">Read More</Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link to="/blogs" className="text-blue-500 hover:underline">View All Blogs</Link>
      </div>
    </div>
  );
}

export default BlogSection;
