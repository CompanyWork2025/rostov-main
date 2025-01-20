import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Footer = () => (
  <footer className='bg-gray-900 text-white py-8'>

    <div className='border-t border-gray-700  pt-8'>
      <div className='max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
        <div className='mb-4'>
          <h3 className='font-bold text-lg'>Follow Us</h3>
          <div className='flex justify-center space-x-4 mt-2'>
            <a href='#'><FaFacebookF /></a>
            <a href='#'><FaTwitter /></a>
            <a href='#'><FaInstagram /></a>
            <a href='#'><FaYoutube /></a>
          </div>
        </div>
        <div className='col-span-1 lg:col-span-2 mb-4 lg:mb-0'>
          <h3 className='font-bold text-lg'>Subscribe to our Newsletter</h3>
          <form className='mt-4 flex justify-center'>
            <input type='email' placeholder='Enter your email address' className='p-2 rounded-l-lg' />
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
    <p className='text-center mt-8'>© 2025 Rostov University. All Rights Reserved.</p>
  </footer>
);

export default Footer;