import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./assets/logo.png";
import Navbar from "./components/shared/Navbar"; // Import Navbar
import Home from "./pages/Home"; // Import Home page
import Gallery from "./pages/Gallery"; // Import About page
import Services from "./pages/Services"; // Import Services page
import Contact from "./pages/Contact"; // Import Contact page
import app from './assets/whatsapp.gif';

const App = () => {
  // Popup state to control visibility of the form
  const [showPopup, setShowPopup] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      <Navbar /> {/* Include Navbar component */}

      {/* Main routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    

      {/* Sticky "Apply Now!" button on right side vertically */}
      <div
        className="fixed top-80 lg:top-64 right-0 w-10 h-40 bg-[#FF931E] z-15 rounded-l-3xl flex flex-col items-center justify-center z-50 cursor-pointer"
        onClick={openPopup}
      >
        <p className="text-white transform lg:text-xl -rotate-90 whitespace-nowrap">
          Apply Now!
        </p>
      </div>

      {/* WhatsApp Icon in Bottom-Left Corner with Image */}
      <a
        href="https://wa.me/79515173719"  // Replace with your phone number or WhatsApp link
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-50"
      >
        <img
          src={app} // Replace with your image URL (WhatsApp Logo)
          alt="WhatsApp"
          className="w-12 h-12 object-contain" // Adjust image size if necessary
        />
      </a>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 px-4 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full animate__animated animate__fadeIn animate__delay-0.5s">
            <div className="flex justify-between items-center mb-4">
              {/* Left Space */}
              <div className="flex-shrink-0 w-14" /> 
              {/* Logo centered */}
              <div className="flex-grow flex justify-center">
                <img src={logo} className="w-20 h-20 -ml-8 lg:-ml-16" alt="Logo" />
              </div>
              {/* Close button */}
              <button onClick={closePopup} className="text-gray-600 text-xl -mt-28 -mr-6 font-semibold">
                &times;
              </button>
            </div>

            {/* Form Fields */}
            <form className="space-y-6">
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#306185] transition duration-300"
                  placeholder="Your Full Name"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#306185] transition duration-300"
                  placeholder="Your Email Address"
                />
              </div>

              <div className="mb-4">
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#306185] transition duration-300"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="flex justify-center text-right">
                <button
                  type="submit"
                  className="bg-[#306185] text-white px-8 py-2 rounded-full hover:bg-[#204d69] transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
