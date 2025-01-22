import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import dorm1 from '../assets/hostel1.jpeg';
import dorm2 from '../assets/hostel2.jpeg';
import dorm3 from '../assets/hostel3.jpeg';
import dorm4 from '../assets/hostel4.png';
import dorm5 from '../assets/hostel5.png';

const Dormitories = () => {
  const dormitoryInfo = [
    {
      image: dorm1,
      title: 'Dormitory Building 1',
      description: 'Designed for comfort, this dormitory provides spacious rooms, high-speed Wi-Fi, and fully furnished living areas for a convenient and pleasant stay.',
    },
    {
      image: dorm2,
      title: 'Dormitory Building 2',
      description: 'A hub for academic success, featuring study lounges, collaborative common rooms, and round-the-clock medical support for students.',
    },
    {
      image: dorm3,
      title: 'Dormitory Building 3',
      description: 'Known for its quiet and supportive atmosphere, perfect for focused study and relaxation after a long day at the university.',
    },
    {
      image: dorm4,
      title: 'Dormitory Building 4',
      description: 'Equipped with modern facilities, including shared kitchens, recreational spaces, and a welcoming community for all students.',
    },
    {
      image: dorm5,
      title: 'Dormitory Building 5',
      description: 'A blend of functionality and comfort, offering essential amenities to ensure students feel right at home while pursuing their education.',
    }
  ];
  

  const commonPdfLink = 'https://rostgmu.ru/wp-content/uploads/2023/07/Dormitories-for-International-Students.pdf';

  return (
    <div className="container mx-auto px-6 lg:px-20 mt-8">
      {/* SEO Helmet */}
      <Helmet>
        <title>Rostov University Dormitories - Comfortable Student Accommodation</title>
        <meta
          name="description"
          content="Explore the various dormitory buildings of Rostov University with fully furnished rooms, 24/7 security, cafeteria, and all other essential amenities for international students."
        />
        <meta
          name="keywords"
          content="Rostov University dormitories, student accommodations, student living, international students, Rostov University housing"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-[#306185]">Rostov University Dormitories</h1>
        <p className="text-gray-600 mt-4">Discover the comfort and convenience of our campus dorms. RSMU have five dormitories, from them two are in campus of university hostel 1 & 2.</p>
      </div>

      {/* Image Gallery Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dormitoryInfo.map((dorm, index) => (
          <div
            key={index}
            className="bg-white border border-2 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <img src={dorm.image} alt={dorm.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#306185]">{dorm.title}</h3>
              <p className="text-gray-500 mt-2">{dorm.description}</p>
             
            </div>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <div className="mt-8 p-8 bg-[#f0f4f7] rounded-lg">
        <h2 className="text-3xl font-semibold text-[#306185] text-center">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-6 mt-6">
          <div className="text-gray-700">
            <h4 className="font-bold">What facilities are provided in the dorms?</h4>
            <p>Cafeteria nearby, common kitchens on every floors, study library, security, laundry and more.</p>
          </div>
          <div className="text-gray-700">
            <h4 className="font-bold">Are the dormitories secure?</h4>
            <p>Yes, we have 24/7 security and surveillance to ensure student safety.</p>
          </div>
          <div className="text-gray-700">
            <h4 className="font-bold">Can I request a room with a view?</h4>
            <p>Room allocations depend on availability; however, we try to accommodate preferences where possible.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 mb-6 bg-[#306185] p-8 text-center text-white rounded-lg">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Ready to Live the Campus Life?</h2>
        <p className="text-lg mb-8">
          Apply for the study medicine at RSMU, secure your dormitory accommodation now and secure your spot on campus.
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-[#FF931E] rounded-lg shadow hover:bg-green-600 transition duration-300"
        >
          Apply for Dormitory Accommodation
        </Link>
      </div>
    </div>
  );
};

export default Dormitories;
