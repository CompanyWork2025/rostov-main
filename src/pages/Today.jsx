import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // Importing Link from React Router
import today from "../assets/today.jpg";

const Today = () => {
  return (
    <>
      <Helmet>
        <title>RSMU Today | RSMU University</title>
        <meta
          name="description"
          content="Learn about the Today of RSMU University. From its inception to becoming a leader in education."
        />
      </Helmet>

      {/* Top Banner Image */}
      <div className="relative w-full lg:h-80">
        <img
          src={today}
          alt="RSMU University Today"
          className="w-full h-full object-cover"
        />
       
      </div>

      {/* Main Content Section */}
      <div className="px-6 py-10 max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">The Present and Future of Rostov State Medical University</h2>
          <p className="text-lg text-gray-600">
            RSMU University is one of the leading institutions in medical education. With cutting-edge technology, a rich research environment, and a global reach, it is shaping the future of medicine and healthcare.
          </p>
        </div>

        {/* Today Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">A Modern Campus</h3>
            <p className="text-gray-700 mb-4">
              RSMU’s campus has been transformed into a modern educational hub equipped with the latest technology and facilities that support medical learning and research.
            </p>
            <img
              src="https://satyamevedu.co.in/wp-content/uploads/2023/04/WhatsApp-Image-2022-05-10-at-12.18.11-AM-1024x683.jpeg"
              alt="Campus Image"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Global Research Impact</h3>
            <p className="text-gray-700 mb-4">
              Today, RSMU’s faculty and students are pioneers in medical research, contributing to both national and global medical innovations. Collaborative projects involve cutting-edge fields, including telemedicine, biotechnology, and pharmaceuticals.
            </p>
            <img
              src="https://www.worldwidecolleges.com/wp-content/uploads/classified-listing/2023/04/2019-04-19.jpg"
              alt="Research Image"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Top Medical School</h4>
              <p className="text-gray-600">
                Recognized as one of the top medical schools in Russia, RSMU has been producing world-class professionals in healthcare.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Innovation & Research</h4>
              <p className="text-gray-600">
                RSMU remains a leader in medical research, hosting international conferences and contributing to breakthrough innovations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Global Partnerships</h4>
              <p className="text-gray-600">
                Through its extensive network of partnerships, RSMU is working with global medical institutions to improve healthcare worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Join the Future of Medicine</h2>
          <p className="text-lg text-gray-600 mb-8">
            Become a part of RSMU's thriving academic community. Get involved in global research, participate in innovative projects, and shape the future of healthcare.
          </p>
          {/* Using Link instead of href */}
          <Link to="/contact" className="inline-block px-8 py-3 text-white bg-[#306185] rounded-lg shadow hover:bg-blue-700 transition duration-300 transform hover:scale-105">
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Today;
