import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import logo from '../../assets/logo.png';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ENG');
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false); // Separate state for Gallery dropdown
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
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
    <>
      <div className="bg-[#306185] text-white py-2">
        <div className="max-w-screen-xl mx-auto font-semibold px-6 text-right">
          <p>Admission Helpline: +91-7669533991</p>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-white shadow-lg shadow-blue/20 transition-shadow">
        <div className="max-w-screen-xl mx-auto px-6 py-4 lg:py-0 flex justify-between items-center">
          {/* Logo and Text Container */}
          <NavLink to="/" className="flex items-center space-x-4">
            <img
              src={logo}
              className="w-10 h-10 lg:w-20 lg:h-20"
              alt="Logo"
            />
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
              to="/history"
              className={({ isActive }) =>
                isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'
              }
            >
              History
            </NavLink>
            <NavLink
              to="/today"
              className={({ isActive }) =>
                isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'
              }
            >
              RSMU Today
            </NavLink>
            <NavLink
              to="/representatives"
              className={({ isActive }) =>
                isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'
              }
            >
              Representative
            </NavLink>

            {/* Gallery Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsGalleryDropdownOpen(!isGalleryDropdownOpen)}
                className="text-gray-500 hover:text-[#2d4f6b] font-medium flex items-center justify-center space-x-2"
              >
                <span>Gallery</span>
                {/* Dropdown icon */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {isGalleryDropdownOpen && (
                <div
                  className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg text-gray-800"
                  onMouseLeave={() => setIsGalleryDropdownOpen(false)}
                >
                  <NavLink
                    to="/photo-gallery"
                    onClick={() => setIsGalleryDropdownOpen(false)}
                    className={({ isActive }) =>
                      isActive ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-2 px-4 hover:bg-gray-200'
                    }
                  >
                    Photo Gallery
                  </NavLink>
                  <NavLink
                    to="/video-gallery"
                    onClick={() => setIsGalleryDropdownOpen(false)}
                    className={({ isActive }) =>
                      isActive ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-2 px-4 hover:bg-gray-200'
                    }
                  >
                    Video Gallery
                  </NavLink>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                className="text-gray-500 hover:text-[#2d4f6b] font-medium flex items-center justify-center space-x-2"
              >
                <span>Resources</span>
                {/* Dropdown icon */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {isResourcesDropdownOpen && (
                <div
                  className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg text-gray-800"
                  onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                >
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-2 px-4 hover:bg-gray-200'
                    }
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/neet-ug-updates"
                    className={({ isActive }) =>
                      isActive ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-2 px-4 hover:bg-gray-200'
                    }
                  >
                    NEET - UG Updates
                  </NavLink>
                  <NavLink
                    to="/faqs"
                    className={({ isActive }) =>
                      isActive ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-2 px-4 hover:bg-gray-200'
                    }
                  >
                    FAQ’s
                  </NavLink>
                  <NavLink
                    to="/upcoming-events"
                    className={({ isActive }) =>
                      isActive ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-2 px-4 hover:bg-gray-200'
                    }
                  >
                    Upcoming Events
                  </NavLink>
                  <NavLink
                    to="/nmc-regulations"
                    className={({ isActive }) =>
                      isActive ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100' : 'block py-2 px-4 hover:bg-gray-200'
                    }
                  >
                    NMC Regulations
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'font-bold text-[#306185]' : 'text-gray-500 hover:text-[#2d4f6b]'
              }
            >
              Contact
            </NavLink>
          </div>


          {/* Mobile Menu (Toggled with state) */}
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

          {/* Mobile Menu (Toggled with state) */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleMenu}></div>
            {/* Mobile Menu Content */}
            <div className="fixed top-0 right-0 bg-white w-full max-w-xs h-full z-20 p-6 space-y-6 mx-auto">
              <div className="flex justify-start mb-4">
                <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              {/* Links */}
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
                to="/history"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'
                }
              >
                History
              </NavLink>
              <NavLink
                to="/today"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'
                }
              >
                RSMU Today
              </NavLink>
              <NavLink
                to="/representatives"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? 'font-bold text-[#306185] block text-center' : 'text-gray-500 hover:text-blue-500 block text-center'
                }
              >
                Representative
              </NavLink>

              {/* Centered Gallery Dropdown */}
              <div className="relative w-full text-center">
                <button
                  onClick={() => setIsGalleryDropdownOpen(!isGalleryDropdownOpen)}
                  onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                  className="text-gray-500 hover:text-[#2d4f6b] block mx-auto flex justify-center items-center"
                >
                  <span className="mr-2">Gallery</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {isGalleryDropdownOpen && (
                  <div className="mt-2 w-full bg-white shadow-lg rounded-lg text-gray-800 mx-auto">
                    <NavLink
                      to="/photo-gallery"
                      onClick={() => {
                        setIsGalleryDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      Photo Gallery
                    </NavLink>
                    <NavLink
                      to="/video-gallery"
                      onClick={() => {
                        setIsGalleryDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      Video Gallery
                    </NavLink>
                  </div>
                )}
              </div>


              {/* Centered Resources Dropdown */}
              <div className="relative w-full text-center">
                <button
                  onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                  className="text-gray-500 hover:text-[#2d4f6b] block mx-auto flex justify-center items-center"
                >
                  <span className="mr-2">Resources</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {isResourcesDropdownOpen && (
                  <div className="mt-2 w-full bg-white shadow-lg rounded-lg text-gray-800 mx-auto">
                    <NavLink
                      to="/blog"
                      onClick={() => {
                        setIsResourcesDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      to="/neet-ug-updates"
                      onClick={() => {
                        setIsResourcesDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      NEET - UG Updates
                    </NavLink>
                    <NavLink
                      to="/faqs"
                      onClick={() => {
                        setIsResourcesDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      FAQ’s
                    </NavLink>
                    <NavLink
                      to="/upcoming-events"
                      onClick={() => {
                        setIsResourcesDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      Upcoming Events
                    </NavLink>
                    <NavLink
                      to="/nmc-regulations"
                      onClick={() => {
                        setIsResourcesDropdownOpen(false); // Close the dropdown
                        toggleMenu(); // Close the mobile menu
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'block py-2 px-4 font-bold text-[#306185] bg-gray-100'
                          : 'block py-2 px-4 hover:bg-gray-200'
                      }
                    >
                      NMC Regulations
                    </NavLink>
                  </div>
                )}
              </div>


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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
