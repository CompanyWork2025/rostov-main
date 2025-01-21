import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import image1 from "../../assets/team.webp";
import image2 from "../../assets/doctor.webp";
import image3 from "../../assets/team2.webp";

const Hero = () => {
  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);
  const [isContentExpanded, setIsContentExpanded] = useState([false, false, false, false]);

  const toggleContent = (index) => {
    const updatedState = [...isContentExpanded];
    updatedState[index] = !updatedState[index];
    setIsContentExpanded(updatedState);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Rostov State Medical University - Admissions Open</title>
        <meta
          name="description"
          content="Rostov State Medical University offers world-class medical education. Admissions are now open for international students. Learn more about our programs and apply today."
        />
        <meta
          name="keywords"
          content="Rostov State Medical University, RSMU, medical education, international students, apply to RSMU, study in Russia"
        />
        <meta property="og:title" content="Rostov State Medical University - Admissions Open" />
        <meta
          property="og:description"
          content="Join Rostov State Medical University, a leading institution for medical education in Russia. Admissions are open for international students!"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1530293959042-0aac487c21e3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
        />
        <meta property="og:url" content="https://rsmu.edu" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[600px] z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1530293959042-0aac487c21e3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative container mx-auto h-full flex flex-col lg:flex-row items-center px-6 lg:px-20">
          {/* Left Content */}
          <div className="w-full mt-4 lg:-mt-4 lg:w-1/2 text-[#306185] text-center md:text-left z-10">
            <h1 className="text-4xl lg:text-6xl font-bold leading-relaxed mb-6">
              Rostov State Medical University
            </h1>
            <p className="text-xl lg:text-3xl text-gray-600 mb-6">
              Leading University for Medical Education
            </p>
            <p className="lg:text-xl text-gray-600 mb-6">
              Admissions are open for international students!
            </p>

            {/* Contact Methods */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* WhatsApp */}
              <div className="flex items-center bg-white shadow-lg rounded-lg p-4 space-x-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp Logo"
                  className="w-12 h-12 flex-shrink-0"
                />
                <a
                  href="https://wa.me/79515173719"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-medium text-[#306185] hover:underline break-words"
                >
                  WhatsApp
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center bg-white shadow-lg rounded-lg p-4">
                <img
                  src="https://icon-library.com/images/red-email-icon-png/red-email-icon-png-27.jpg"
                  alt="Email Icon"
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

            <Link to="/contact">
              <button className="px-6 py-3 mt-8 w-full bg-[#306185] hover:bg-red-700 rounded-lg text-white text-lg font-semibold transition-colors">
                Apply Now!
              </button>
            </Link>
          </div>

          {/* Dynamic Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src={images[currentImage]}
              alt={`Feature ${currentImage + 1}`}
              className="max-w-xs lg:max-w-md transition duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </header>

      {/* Info Boxes */}
      <main className="container mx-auto px-6 lg:px-20 relative z-20 mt-80 lg:-mt-10">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {["Leading University", "Overview of RSMU", "High Quality Education", "Great Choice"].map((title, index) => (
          <article
            key={index}
            className={`bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 animate-slideUp delay-${index * 200} flex flex-col`}
          >
            <h2 className="text-xl font-semibold text-red-500 mb-3">{title}</h2>
            <p
              className={`text-gray-600 text-sm flex-grow overflow-hidden transition-all duration-500 ${
                isContentExpanded[index] ? 'max-h-full' : 'max-h-28'
              }`}
            >
              {index === 0
                ? "Rostov State Medical University, Russia – A Gateway For An Extraordinary Medical Education. Russia is reckoned as one of the most popular destinations for studying medicine. It is consistently preferred as one of the frontline choices to pursue medical education for many aspirants in India. Well, there are many NMC (National Medical Commission) recognized and government-affiliated medical universities in Russia, however, Rostov State Medical University is irresistibly a supreme choice for those who want to be assured of grabbing world-class medical education at affordable cost and are willing to complete their MBBS with complete knowledge in their profession."
                : index === 1
                ? "RostSMU is among one of the oldest and top medical universities in Russia. Rostov University came into existence in 1930. It is also known as RostSMU or RostGMU. This is a government medical education institute that is located in Rostov-on-Don City, Russia and it is the largest Government Medical University in South Russian Federation. It is seventh oldest medical university of Russian Federation. RostSMU will be an exciting and promising option for medical education in Russia. RREC is the official representative of RostSMU will always be there to provide all assistance and consultation for the admission in RostSMU. Feel a free to contact RREC  for free consultation."
                : index === 2
                ? "RSMU operates more than 100 Departments. More than 900+ teachers are constantly working introducing innovations and interactive forms of learning. Among them are 180+ Doctors of Medical Sciences, 95+ professors and 480+ PH.Ds. The Honoured Cultural Worker of the Russian Federation, holders of the honorary titles of Russia and world-renowned scientists carry out educational activities at the university on modern scientific, matierial and technical base. RostSMU is an International university. The students of more than a hundred nationalities of the world are trained here."
                : "Renowned for scientific departments in Surgery, Urology, Oncology, Cardiology, Nephrology, Neurosurgery, Morphology, and Dermatology. Rostov State Medical University is one of the few medical educational organizations in Russia with its own clinic with 675 hospital cots, a dental clinic, a diagnostic, treatment clinic, simulation center, and Military training center that trains specialists in military medical specialties."}
            </p>
            <button
              className="text-blue-500 mt-auto text-sm"
              onClick={() => toggleContent(index)}
            >
              {isContentExpanded[index] ? "⬆️" : "⬇️"}
            </button>
          </article>
        ))}
      </section>
    </main>
    </>
  );
};

export default Hero;
