import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Dormitories = () => {
  const dormitoryInfo = [
    {
      image: 'https://i.ytimg.com/vi/_yoy_HK5NeA/maxresdefault.jpg',
      title: 'Dormitory Building 1',
      description: 'Comfortable living spaces with access to all amenities. Fully furnished rooms, and security services available.',
    },
    {
      image: 'https://i.ytimg.com/vi/Nm-Iox9uDdE/maxresdefault.jpg',
      title: 'Dormitory Building 2',
      description: 'Well-equipped study lounges, common areas for students, and 24/7 medical assistance available.',
    },
    {
      image: 'https://i0.wp.com/abroadeduco.com/wp-content/uploads/2021/11/hostel-room-russia.jpg?ssl=1',
      title: 'Dormitory Building 3',
      description: 'Cafeteria, laundry services, and dormitory Wi-Fi available. Experience student living at its best.',
    },
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
        <h1 className="text-4xl font-bold text-[#306185]">Rostov University Dormitories</h1>
        <p className="text-gray-600 mt-4">Discover the comfort and convenience of our campus dorms.</p>
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
              <div className="mt-4">
                <a
                  href={commonPdfLink}
                  download
                  className="inline-block bg-[#306185] text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition duration-300"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <div className="mt-16 p-8 bg-[#f0f4f7] rounded-lg">
        <h2 className="text-3xl font-semibold text-[#306185] text-center">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-6 mt-6">
          <div className="text-gray-700">
            <h4 className="font-bold">What facilities are provided in the dorms?</h4>
            <p>Cafeteria, study lounges, Wi-Fi, 24/7 security, laundry, and more.</p>
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
          Apply for dormitory accommodations now and secure your spot on campus for the upcoming semester!
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-[#669d3f] rounded-lg shadow hover:bg-green-600 transition duration-300"
        >
          Apply for Dormitory Accommodation
        </Link>
      </div>
    </div>
  );
};

export default Dormitories;
