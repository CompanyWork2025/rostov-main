import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import logo from '../../assets/logo.png';
import { useLocation } from 'react-router-dom'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ENG');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ENG' ? 'RUS' : 'ENG'); // Toggle language between ENG and RUS
  };

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top
  }, [location]);  // Dependency array listens to route changes


  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg shadow-blue/20 transition-shadow"> {/* Updated shadow to shadow-md */}
      <div className="max-w-screen-xl mx-auto px-6 py-4 lg:py-0 flex justify-between items-center">
        {/* Logo and Text Container */}
        <NavLink to="/" className="flex items-center space-x-4">
          {/* Logo */}
          <img
            src={logo}
            className="w-10 h-10 lg:w-20 lg:h-20"
            alt="Logo"
          />

          {/* Text */}
          <div>
            <p className="text-sm lg:text-xl font-semibold text-gray-600">
              Admission RSMU 2025
            </p>
          </div>
        </NavLink>


        {/* Navbar Links */}
        <div className="hidden md:flex mt-2 space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'
            }
          >
            Contact
          </NavLink>
          {/* Language Switcher Button */}
          <div className="flex items-center -mt-2 space-x-4">
            <button
              onClick={toggleLanguage}
              className="w-32 h-10 flex border-2 border-black rounded-lg overflow-hidden"
            >
              {/* Left side (ENG) */}
              <div
                className={`w-1/2 mt-2 flex items-center justify-center text-sm font-semibold cursor-pointer bg-white text-black`}
              >
                ENG
              </div>

              {/* Vertical Divider */}
              <div className="w-0.5 bg-black h-full" />

              {/* Right side (RUS) */}
              <div
                className={`w-1/2 h-full flex items-center justify-center text-sm font-semibold cursor-pointer bg-black text-white`}
              >
                RUS
              </div>
            </button>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Toggled with state) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
        {/* Mobile Menu Content */}
        <div className="fixed top-0 right-0 bg-white w-4/5 h-full z-20 p-6 space-y-6">
          <div className="flex justify-start mb-4">
            <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-[#306185] block text-center'
                : 'text-gray-500 hover:text-blue-500 block text-center'
            }
          >
            Gallery
          </NavLink>


          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
