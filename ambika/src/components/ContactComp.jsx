import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className=" bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className=" caveat-custom text-5xl font-semibold text-white mb-8 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column: Contact form */}
          <div className='caveat-custom'>
            <h3 className="text-3xl font-semibold text-white mb-4">Send us a message</h3>
            <form className='text-xl'>
              <div className=" mb-6">
                <label htmlFor="name" className="block text-white font-medium mb-1">Your Name</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-white font-medium mb-1">Your Email</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-1">Your Message</label>
                <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"></textarea>
              </div>
              <button type="submit" className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600">Send Message</button>
            </form>
          </div>
          {/* Right column: Contact information */}
          <div className=' inconsolata border border-orange-400 rounded-lg p-6'>
            <div className=''>
            <h3 className=" text-3xl caveat-custom font-semibold text-orange-400 mb-4">Contact Information</h3>
            <p className="mb-4 text-xl text-white">
              <span className="font-semibold">Address:</span> Opp. Grampachayat Office, Bazarwada Collem, Dharbandora, Goa 403410
            </p>
            <p className="mb-4 text-xl text-white">
              <span className="font-semibold">Phone:</span> +91 95278 17069 | +91 9923270690
            </p>
            <p className="mb-4 text-xl text-white">
              <span className="font-semibold">Email:</span> ambikacaneindu@gmail.com
            </p>
            </div>
            {/* Add social media links */}
            {/* Social media links */}
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/ambika_cane_industry?igsh=aWlha25ra3g0ZTY5" className="text-white hover:text-blue-400">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/share/NY1axbCjAHk8Rkrd/?mibextid=qi2Omg" className="text-white hover:text-blue-400">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              {/* <a href="#" className="text-white hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} />
              </a> */}
              <a href="mailto:ambikacaneindu@gmail.com" className="text-white hover:text-blue-400">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
