import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Footer = () => (
  <footer className='bg-gray-900 text-white py-8'>

    <div className='border-t border-gray-700  pt-8'>
      <div className='max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
        <div className='mb-4'>
          <h3 className='font-bold text-lg'>Follow Us</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://www.facebook.com/share/1C7at92AHy/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-3xl" /> {/* Increase size of the icon */}
            </a>
            <a
              href="https://www.instagram.com/rostsmurussia.officials?igsh=Zjh5ODhjdHA4Nm9p"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl" /> {/* Increase size of the icon */}
            </a>
            <a
              href="https://youtube.com/@rostsmuofficials?si=zf16-kVZj-gsjtIf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-3xl" /> {/* Increase size of the icon */}
            </a>
          </div>

        </div>
        <div className='col-span-1 lg:col-span-2 mb-4 lg:mb-0'>
          <h3 className='font-bold text-lg'>Subscribe to our Newsletter</h3>
          <form className='mt-4 flex justify-center'>
            <input type='email' placeholder='Enter your email address' className='p-4 text-black rounded-l-lg' />
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-lg'>Subscribe</button>
          </form>
        </div>
        <div className='mb-4'>
          <h3 className='font-bold text-lg'>Policies</h3>
          <ul>
            <li><a href='#'>Privacy Policy</a></li>
            <li><a href='#'>Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </div>
    <p className='text-center mt-8'>© 2025 Rostov State Medical University. All Rights Reserved.</p>
  </footer>
);

export default Footer;