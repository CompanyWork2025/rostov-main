import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet
import call from './assets/call.gif';
import logo from "./assets/logo.png";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import History from "./pages/History";
import Today from "./pages/Today";
import Gallery from "./pages/Gallery";
import VideoGallery from "./pages/VideoGallery";
import Fee from "./pages/Fee";
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
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(""); // For success/error message
  const [formErrors, setFormErrors] = useState({}); // For storing form validation errors

  // Ref for the form element
  const formRef = useRef(null);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  // Handle form input changes //
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Validate form before submission
  const validateForm = () => {
    let errors = {};
    if (!form.name) errors.name = "Name is required.";
    if (!form.email) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Email address is invalid.";
    if (!form.message) errors.message = "Message is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // If the form validation fails, return and don't send the email.
      return;
    }

    // Sending form using emailjs with formRef as the form reference
    emailjs.sendForm('service_nqcxku8', 'template_gla2qvi', formRef.current, 'VJBeG2pqOFep9BD36')
      .then((result) => {
        console.log(result.text);
        // Set success message when the submission is successful
        setSubmissionStatus("Your message has been successfully submitted. Thank you!");
        // Clear form fields after submission
        setForm({
          name: '',
          email: '',
          message: '',
        });
        setFormErrors({});
      }, (error) => {
        console.log(error.text);
        // Set error message when there's a failure in submission
        setSubmissionStatus("Oops, something went wrong. Please try again.");
      });
  };

  return (
    <>
      <Router>
        <Helmet>
          {/* Default Meta Title and Description */}
          <title>Rostov State Medical University - Admisisons are open for 2025</title>
          <meta
            name="description"
            content="Apply to Rostov State Medical University for the 2025 academic year! Offering world-class medical education, affordable fees, NMC-approved curriculum, and excellent facilities for international students."
          />
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/today" element={<Today />} />
          <Route path="/representatives" element={<Representatives />} />
          <Route path="/photo-gallery" element={<Gallery />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/fee" element={<Fee />} />
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

        <div>
          {/* Telephone Icon */}
          <a
            href="tel:+917669533991"
            className="fixed bottom-20 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-50"
          >
            <img
              src={call}
              alt="Telephone Icon"
              className="w-20 h-20 object-cover"
            />
          </a>


          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/79515173719"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-50"
          >
            <img src={app} alt="WhatsApp" className="w-12 h-12 object-contain" />
          </a>
        </div>


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
              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    className="w-full p-4 border border-gray-300 rounded-xl"
                    placeholder="Your Full Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && <div className="text-red-500 text-sm">{formErrors.name}</div>}
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    className="w-full p-4 border border-gray-300 rounded-xl"
                    placeholder="Your Email Address"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && <div className="text-red-500 text-sm">{formErrors.email}</div>}
                </div>

                <div className="mb-4">
                  <textarea
                    name="message"
                    className="w-full p-4 border border-gray-300 rounded-xl"
                    rows="4"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                  {formErrors.message && <div className="text-red-500 text-sm">{formErrors.message}</div>}
                </div>

                <div className="flex justify-center text-right">
                  <button
                    type="submit"
                    className="bg-[#306185] text-white px-8 py-2 rounded-full"
                  >
                    Submit
                  </button>
                </div>

                {/* Success or Error Message */}
                {submissionStatus && (
                  <div className="text-center text-green-500 font-semibold py-4 mt-4">
                    {submissionStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </Router>
    </>
  );
};

export default App;
