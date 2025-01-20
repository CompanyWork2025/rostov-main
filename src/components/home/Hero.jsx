import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import image1 from "../../assets/team.webp";
import image2 from "../../assets/doctor.webp";
import image3 from "../../assets/team2.webp";

const Hero = () => {
  // State for image loop
  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);

  // Update image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px] z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1530293959042-0aac487c21e3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlnaHQlMjBibHVlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative container mx-auto h-full flex flex-col lg:flex-row items-center px-6 lg:px-20">
          {/* Left Content */}
          <div
            className="w-full mt-4 lg:-mt-4 lg:w-1/2 text-[#306185] text-center md:text-left z-10"
            style={{
              animation: "slideUp 1s ease-out",
            }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-relaxed mb-6">
              Rostov State Medical University
            </h1>
            <p className="text-xl lg:text-3xl text-gray-600 mb-6">
              Leading University for Medical Education
            </p>
            <p className="lg:text-xl text-gray-600 mb-6">
              Admissions are open for international students!
            </p>
            {/* WhatsApp and Email Section */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* WhatsApp Box */}
              <div className="flex items-center bg-white shadow-lg rounded-lg p-4 space-x-4">
                {/* WhatsApp Logo */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-12 h-12 flex-shrink-0"
                />

                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/79515173719" // Removed unnecessary characters in the link
                  target="_blank"
                  rel="noopener noreferrer" // Added security attributes for external links
                  className="text-lg sm:text-xl font-medium text-[#306185] hover:underline break-words"
                >
                  WhatsApp
                </a>
              </div>

              {/* Email Box */}
              <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
                <img
                  src="https://icon-library.com/images/red-email-icon-png/red-email-icon-png-27.jpg"
                  alt="Email"
                  className="w-12 h-12 mr-4 flex-shrink-0"
                />
                <a
                  href="mailto:rostsmu@gmail.com"
                  className="text-lg sm:text-xl font-medium text-[#306185] hover:underline break-words"
                >
                  rostsmu@gmail.com
                </a>
              </div>
            </div>
            <button
              className="px-6 py-3 mt-8 w-full bg-[#306185] hover:bg-red-700 rounded-lg text-white text-lg font-semibold transition-colors"
            >
              <Link to="/contact" className="w-full h-full inline-block text-center">
                Apply Now!
              </Link>
            </button>
          </div>
          {/* Right Dynamic Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src={images[currentImage]}
              alt={`Dynamic ${currentImage + 1}`}
              className="max-w-xs lg:max-w-md transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* White Background Grid Boxes */}
      <div className="container mx-auto px-6 lg:px-20 relative z-20 mt-80 lg:-mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Leading University", "Most Rated", "High Quality", "Great Choice"].map((title, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 animate-slideUp delay-${index * 200}`}
            >
              <h3 className="text-xl font-semibold text-red-500 mb-3">{title}</h3>
              <p className="text-gray-600">
                {index === 0
                  ? "Established in 1932, RSMU is one of the leading medical universities in Russia and a center of medical and pharmaceutical sciences in Bashkortostan."
                  : index === 1
                    ? "Included in domestic and international university rankings, such as UniRank and Webometrics."
                    : index === 2
                      ? "268 professors and 739 associate professors guide students with cutting-edge knowledge."
                      : "Renowned for scientific schools in Surgery, Urology, Oncology, Cardiology, and Morphology."}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20%);
            }
            to {
              opacity: 1;
              transform: translateY(0%);
            }
          }
          .animate-slideUp {
            animation: slideUp 0.6s ease-out forwards;
          }
          .delay-0 {
            animation-delay: 0s;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-400 {
            animation-delay: 0.4s;
          }
          .delay-600 {
            animation-delay: 0.6s;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
