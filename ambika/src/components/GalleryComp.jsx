import React from 'react';
import gallery1 from './../assets/images/gallery1.jpg';
import gallery2 from './../assets/images/gallery2.jpg';
import gallery3 from './../assets/images/gallery3.jpg';
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <div className="caveat-custom bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-semibold text-white mb-12 text-center">Gallery</h2>
        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Individual image items */}
          <div className="flex flex-col rounded-lg overflow-hidden border border-orange-300">
            <img src={gallery1} alt="Gallery img" className="w-full h-auto" />
          </div>
          <div className="flex flex-col rounded-lg overflow-hidden border border-orange-300">
            <img src={gallery2} alt="Gallery img" className="w-full h-auto" />
          </div>
          <div className="flex flex-col rounded-lg overflow-hidden border border-orange-300">
            <img src={gallery3} alt="Gallery img" className="w-full h-auto" />
          </div>
          {/* Add more images as needed */}
        </div>
      </div>
      {/* See more link */}
      <div className="flex justify-center mt-8">
        <Link to="https://drive.google.com/drive/folders/183LNvXepgxCERM5sFQHw49NGjJtotPwS" target='_' className="text-orange-300 text-2xl underline">
          See more
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
