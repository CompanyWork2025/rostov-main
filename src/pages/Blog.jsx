import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // React Router for navigation
import { Helmet } from 'react-helmet'; // Importing Helmet for SEO

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const blogs = [
    {
      title: 'The Future of Medicine in RSMU',
      image: 'https://i.ytimg.com/vi/WtuZc78FGI8/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgWihNMA8=&rs=AOn4CLC2mKtqCNg-FKJCS-d1oHFz_xQHqQ',
      description: 'RSMU University is a leader in medical education...',
      fullDescription: 'RSMU University has always been at the forefront of modern medical practices...',
      date: '2025-01-01',
    },
    {
      title: 'Innovative Teaching Methods at RSMU',
      image: 'https://akecindia.com/assets/images/Medical-Universities-in-Russia-Choose-Your-MBBS-College-Wisely.png',
      description: 'RSMU incorporates cutting-edge teaching methods that support...',
      fullDescription: 'The teaching methodologies employed at RSMU University are forward-thinking...',
      date: '2025-01-02',
    },
    {
      title: 'Global Collaborations and Partnerships',
      image: 'https://i.ytimg.com/vi/SDNC4qdW1Es/maxresdefault.jpg',
      description: 'RSMU University has formed global collaborations to enhance...',
      fullDescription: 'RSMU’s global collaborations with international universities and research organizations...',
      date: '2025-01-03',
    },
    {
      title: 'Medical Research and Development at RSMU',
      image: 'https://static.wixstatic.com/media/9cdbfb_96ebee1182014e6ba42d14a52ec5bd2d~mv2.jpg/v1/fill/w_1080,h_607,al_c,q_85/Omsk%20State%20Medical%20University%20Russia.jpg',
      description: 'RSMU is known for its groundbreaking research in medical science...',
      fullDescription: 'Research is one of the pillars that supports RSMU’s academic excellence...',
      date: '2025-01-04',
    },
    {
      title: 'RSMU Alumni Success Stories',
      image: 'https://softamo.org/wp-content/uploads/2023/03/Rostov-State-Medical-University.jpg',
      description: 'The alumni network of RSMU contributes significantly to society...',
      fullDescription: 'Our alumni have gone on to become leaders in the medical field...',
      date: '2025-01-05',
    },
    {
      title: 'RSMU’s State-of-the-Art Facilities',
      image: 'https://nixstudyabroad.com/wp-content/uploads/2022/01/rostov-state-medical-university.jpg',
      description: 'RSMU boasts a campus equipped with modern medical teaching tools...',
      fullDescription: 'We pride ourselves on our state-of-the-art facilities at RSMU...',
      date: '2025-01-06',
    },
  ];

  const openModal = (blog) => {
    setCurrentBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentBlog(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Blogs - RSMU University</title>
        <meta name="description" content="Explore the latest blog posts from RSMU University, covering innovations in medical education, research, and more." />
      </Helmet>

      {/* Top Banner */}
      <div className="relative w-full lg:h-64 lg:mb-10">
        <img
          src="https://media.istockphoto.com/id/1220573371/photo/minimal-work-space-creative-flat-lay-photo-of-workspace-desk-top-view-office-desk-with-laptop.jpg?s=612x612&w=0&k=20&c=xmrSzPD4LCRhPD4L5TlttC88sSYe9Pc3J2ZnxCMzzyQ="
          alt="RSMU University Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-2xl lg:text-5xl font-bold">Blogs</h1>
        </div>
      </div>

      {/* Blog Introduction Paragraph */}
      <div className="px-6 py-10 max-w-7xl mx-auto text-center">
        <p className="lg:text-xl text-gray-700 mb-6">
          Welcome to the official blog of RSMU University. Here, we share news,
          insights, and advancements in the field of medical education. Explore
          the latest updates from our institution, including innovative teaching
          methods, global collaborations, and more.
        </p>
      </div>

      {/* Search Bar - Centered */}
      <div className="px-6 py-4 max-w-7xl mx-auto mb-6 flex justify-center">
        <input
          type="text"
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Blog Cards Section */}
      <div className="px-6 py-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.slice(0, 6).map((blog, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{blog.title}</h3>
                <p className="text-lg text-gray-600 mb-4">
                  {blog.description}
                </p>

                {/* See More Button on the Right */}
                <div className="flex justify-end mt-4">
                  <Link
                    onClick={() => openModal(blog)}
                    className="bg-[#306185] text-white text-md px-4 py-2 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg text-center text-gray-500 col-span-3">
            No blogs found matching your search.
          </p>
        )}
      </div>

      {/* Modal for Full Description */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-3/4 max-w-3xl flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">{currentBlog.title}</h2>
            <p className="text-lg text-gray-600 mb-6 text-center">{currentBlog.fullDescription}</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Blog;
