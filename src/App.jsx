import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./assets/logo.png";
import Navbar from "./components/shared/Navbar"; 
import Home from "./pages/Home";
import History from "./pages/History";
import Today from "./pages/Today"; 
import Gallery from "./pages/Gallery"; 
import VideoGallery from "./pages/VideoGallery"; 
import Blog from "./pages/Blog";
import NMC from "./pages/NMCRegulations";
import Updates from "./pages/Updates";
import FAQ from "./pages/FAQ";
import Dormi from "./pages/Dormitories";
import NeetUpdates from "./pages/NEETUpdates";
import Contact from "./pages/Contact";
import Footer from "./components/shared/Footer";
import app from './assets/whatsapp.gif';
import Representatives from "./pages/Representatives";

// Import the emailjs-com package
import emailjs from 'emailjs-com';
import Recognition from "./pages/Recognition";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  // State to capture the form inputs
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nqcxku8', 'template_gla2qvi', form, 'VJBeG2pqOFep9BD36')
      .then((result) => {
        console.log(result.text);
        // You can also show a success message here
      }, (error) => {
        console.log(error.text);
        // Show an error message
      });

    // Reset form after submission
    setForm({
      name: '',
      email: '',
      message: '',
    });
    closePopup();
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/today" element={<Today />} />
          <Route path="/representatives" element={<Representatives />} />
          <Route path="/photo-gallery" element={<Gallery />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/dormitories" element={<Dormi />} />
          <Route path="/neet-ug-updates" element={<NeetUpdates />} />
          <Route path="/nmc-regulations" element={<NMC />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/upcoming-events" element={<Updates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

        <div
          className="fixed top-80 lg:top-64 right-0 w-10 h-40 bg-[#FF931E] z-15 rounded-l-3xl flex flex-col items-center justify-center z-50 cursor-pointer"
          onClick={openPopup}
        >
          <p className="text-white transform lg:text-xl -rotate-90 whitespace-nowrap">
            Apply Now!
          </p>
        </div>

        <a
          href="https://wa.me/79515173719"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-50"
        >
          <img
            src={app}
            alt="WhatsApp"
            className="w-12 h-12 object-contain"
          />
        </a>

        {showPopup && (
          <div className="fixed inset-0 px-4 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full animate__animated animate__fadeIn animate__delay-0.5s">
              <div className="flex justify-between items-center mb-4">
                <div className="flex-grow flex justify-center">
                  <img src={logo} className="w-20 h-20 -ml-8 lg:-ml-4" alt="Logo" />
                </div>
                <button onClick={closePopup} className="text-gray-600 text-xl -mt-28 -mr-6 font-semibold">
                  &times;
                </button>
              </div>

              {/* Form Fields */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#306185] transition duration-300"
                    placeholder="Your Full Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#306185] transition duration-300"
                    placeholder="Your Email Address"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    name="message"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#306185] transition duration-300"
                    rows="4"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
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
    </>
  );
};

export default App;
