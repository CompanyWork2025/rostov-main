import React from 'react';
import { Helmet } from 'react-helmet';

const History = () => {
  return (
    <>
      <Helmet>
        <title>History | RSMU University</title>
        <meta
          name="description"
          content="Learn about the history of RSMU University. From its inception to becoming a leader in education."
        />
      </Helmet>

      {/* Top Banner Image */}
      <div className="relative w-full lg:h-96">
        <img
          src="https://rostgmu.net/images/rostov-state-medical-university-history.webp"  // Replace with the correct image URL
          alt="RSMU University History"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="px-6 py-8 max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl text-center lg:text-left font-semibold mb-6">Rostov State Medical University</h2>
        <p className='mb-8 text-center text-justify lg:text-left'>
          <p>
            RSMU University has a rich history rooted in the vision to provide high-quality education and contribute to scientific
            research. The institution was founded with the goal of bridging knowledge gaps, fostering talent, and preparing students
            for the global job market.
          </p>
        </p>
        <h2 className="text-2xl md:text-3xl text-center lg:text-left font-semibold mb-6">History of Rostov State Medical University, Russia</h2>

        {/* Paragraphs with Gaps */}
        <div className="space-y-6 text-justify text-gray-700">
          <p>
            In 1915, the Division of Medicine at the Russian Warsaw University was moved to Rostov on Don and that gave rise to the present-day Rostov State Medical University. It was initially formed as a department and later transformed into a medical Institute in 1930. There were about 295 graduating doctors in the first graduating class of the newly formed school. Rostov State Medical University proves to be one of the oldest Higher Medical educational establishments in Russia. The history of its foundation is significantly different from the history of other medical institutions in Russia. In 1915 the Russian Warsaw University was evacuated from Warsaw to Rostov-on-Don where the University had become the Donskoy University. The best representatives from the medical institutions of Warsaw, Moscow, Saint-Petersburg, and Kazan had gathered in its medical faculty and founded its own unique Rostov medical school that had become one of the best in Russia. Later on, the University’s medical faculty and Rostov Medical Women Institute were united and became the largest center of medical science and training of medical personnel in the South of Russia.
          </p>
          <p>
            In University annually trains over 5000 to 7000 students – the faculty training and professional retraining of specialists, each year more than 650 people trained in the internship, residency, the graduate school. The university operates the coordinating council for the additional post-graduate professional education of the Southern Federal District. In college widely used modern educational technology, including computer technology.
          </p>
          <p>
            The University operates 91 departments, which employs over 800 people teaching staff, more than 130 doctors, professors, about 500 candidates. The university engaged in research and clinical activities, and 31 academicians, corresponding members of the Russian Academy of Medical Sciences. 52 professors are members of other Russian and International academies, 9 employees are Honored Scientists of Russia, 26 – Honorary Doctor of Russian Federation, and 10 – Honored Workers of Higher School of the Russian Federation.
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row lg:items-start justify-between px-6 py-8 max-w-7xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Side - YouTube Video */}
        <div className="flex-1">
          <h3 className="text-xl text-center lg:text-left font-semibold mb-4">Watch Our Journey</h3>
          <iframe
            src="https://www.youtube.com/embed/lKSPZij2Woc"  // Correct YouTube embed URL format
            title="History of RSMU University"
            width="100%"
            height="350"
            className="shadow-lg"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Side - Grid with Text */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h4 className="font-semibold mb-2">Our Beginning</h4>
            <p>
              The history of RSMU began with a vision to empower individuals through transformative education. Early investments
              focused on laying a strong academic foundation.
            </p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h4 className="font-semibold mb-2">Growth and Innovation</h4>
            <p>
              Over the years, RSMU's growth has been accompanied by innovation, developing cutting-edge research, and fostering
              partnerships with global organizations.
            </p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h4 className="font-semibold mb-2">Global Outreach</h4>
            <p>
              Today, RSMU University maintains a global presence, fostering an inclusive academic environment where students
              engage in international programs.
            </p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h4 className="font-semibold mb-2">Academic Excellence</h4>
            <p>
              The university remains a beacon of academic excellence, with its courses designed to keep pace with industry demands,
              encouraging critical thinking and creativity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
