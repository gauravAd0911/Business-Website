import React from 'react';
import aboutimg from '../assets/images/aboutimg.jpg';
function About() {
  return (
    <div className="caveat-custom bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-semibold text-white mb-8 text-center">Crafting Elegance, <span className='text-green-600'>Sustaining</span> Tradition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex justify-center items-center">
            <img src={aboutimg} alt="About Us Image" className="max-w-full  rounded-lg border-orange-300" />
          </div>
          <div className='text-justify'>
            <p className="text-2xl text-gray-300 mb-6">
              <span className="text-3xl font-semibold text-orange-400">Established in 1981,</span> Ambika Cane Industries has been a pioneer in crafting exquisite cane furniture pieces that adorn homes, coastal resorts, and hotels across the scenic landscapes of Goa. With a rich legacy spanning over a decade, our commitment to quality craftsmanship and sustainable practices has earned us a reputation as the foremost manufacturer in the region.
            </p>
            <p className="text-2xl text-gray-300 mb-6">
              Our journey began with a vision to blend traditional craftsmanship with contemporary design, creating timeless pieces that captivate hearts and enrich spaces. Each product meticulously handcrafted by our skilled artisans embodies the essence of elegance and durability, reflecting the vibrant culture and heritage of coastal living.
            </p>
            <p className="text-2xl text-gray-300">
              At Ambika Cane Industries, we take pride in our eco-conscious approach, sourcing premium cane materials from sustainable plantations and employing ethical production practices. Our commitment to sustainability extends beyond our products, as we strive to minimize our environmental footprint and contribute to the preservation of our natural resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
